
import { useEffect, useState } from 'react';

interface FireflyProps {
  count?: number;
  size?: number;
  targetSelector?: string;
}

export default function Firefly({ count = 20, size = 10, targetSelector }: FireflyProps) {
  const [fireflies, setFireflies] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const container = targetSelector ? document.querySelector(targetSelector) : document.body;
    
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    
    const generateFireflies = () => {
      const newFireflies = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * containerRect.width,
        y: Math.random() * containerRect.height,
        size: Math.random() * size + 5,
        delay: Math.random() * 2
      }));
      
      setFireflies(newFireflies);
    };
    
    generateFireflies();
    
    const handleResize = () => {
      const updatedRect = container.getBoundingClientRect();
      setFireflies(prev => 
        prev.map(firefly => ({
          ...firefly,
          x: Math.min(firefly.x, updatedRect.width),
          y: Math.min(firefly.y, updatedRect.height)
        }))
      );
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [count, size, targetSelector]);

  return (
    <>
      {fireflies.map(firefly => (
        <div
          key={firefly.id}
          className="firefly"
          style={{
            width: `${firefly.size}px`,
            height: `${firefly.size}px`,
            left: `${firefly.x}px`,
            top: `${firefly.y}px`,
            animationDelay: `${firefly.delay}s`,
          }}
        />
      ))}
    </>
  );
}
