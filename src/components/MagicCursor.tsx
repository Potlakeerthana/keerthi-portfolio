
import { useEffect, useState } from 'react';

export default function MagicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverButton, setIsOverButton] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Check if hovering over clickable elements
    const handleElementHover = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      
      // Check if the element or its parents are clickable
      const isClickable = hoveredElement && (
        hoveredElement.tagName === 'BUTTON' ||
        hoveredElement.tagName === 'A' ||
        hoveredElement.closest('button') ||
        hoveredElement.closest('a') ||
        hoveredElement.getAttribute('role') === 'button' ||
        window.getComputedStyle(hoveredElement).cursor === 'pointer'
      );
      
      setIsHovering(isClickable);
      
      // Check if it's a "Send" or "Serve" button specifically
      const isSpecialButton = hoveredElement && (
        hoveredElement.textContent?.includes('Send') ||
        hoveredElement.textContent?.includes('Serve') ||
        (hoveredElement.closest('button')?.textContent || '').includes('Send') ||
        (hoveredElement.closest('button')?.textContent || '').includes('Serve')
      );
      
      setIsOverButton(isSpecialButton);
    };

    document.addEventListener('mousemove', (e) => {
      updatePosition(e);
      handleElementHover();
    });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  if (hidden) return null;

  return (
    <>
      {/* Tea cup cursor */}
      <div
        className="tea-cup-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.9 : 1}) ${isHovering ? 'rotate(-15deg)' : 'rotate(0deg)'}`,
          pointerEvents: 'none'
        }}
      >
        {/* Cup body */}
        <div 
          className={`cup-body ${isHovering ? 'cup-hover' : ''} ${isOverButton ? 'cup-pour' : ''}`}
          style={{
            backgroundColor: isOverButton ? 'rgba(216, 180, 254, 0.8)' : 'rgba(255, 204, 213, 0.7)',
            boxShadow: clicked 
              ? '0 0 20px rgba(216, 180, 254, 0.8)' 
              : '0 0 15px rgba(255, 204, 213, 0.7)'
          }}
        >
          {/* Cup handle */}
          <div 
            className="cup-handle"
            style={{
              borderColor: isOverButton ? 'rgba(216, 180, 254, 0.8)' : 'rgba(255, 204, 213, 0.7)',
              boxShadow: isHovering ? '0 0 10px rgba(255, 255, 255, 0.9)' : 'none'
            }}
          ></div>
          
          {/* Steam particles */}
          <div className="steam-container">
            <div className={`steam-particle steam-1 ${isHovering ? 'steam-active' : ''}`}></div>
            <div className={`steam-particle steam-2 ${isHovering ? 'steam-active' : ''}`}></div>
            <div className={`steam-particle steam-3 ${isHovering ? 'steam-active' : ''}`}></div>
          </div>
          
          {/* Liquid drip for "pour" animation */}
          {isOverButton && (
            <div className="tea-drip"></div>
          )}
          
          {/* Splash animation on click */}
          {clicked && (
            <div className="tea-splash"></div>
          )}
        </div>
      </div>
    </>
  );
}
