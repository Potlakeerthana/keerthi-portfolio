
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SecretGardenToggleProps {
  onToggle: (active: boolean) => void;
  active: boolean;
}

export default function SecretGardenToggle({ onToggle, active }: SecretGardenToggleProps) {
  const [isGlowing, setIsGlowing] = useState(false);
  
  useEffect(() => {
    // Mushroom glows periodically to attract attention
    const glowInterval = setInterval(() => {
      if (!active) {
        setIsGlowing(true);
        setTimeout(() => setIsGlowing(false), 1000);
      }
    }, 5000);
    
    return () => clearInterval(glowInterval);
  }, [active]);

  return (
    <button
      aria-label="Toggle Secret Garden"
      className={cn(
        'relative group transition-all duration-300 transform',
        'outline-none focus:outline-none',
        active ? 'scale-110' : 'hover:scale-105',
        'animate-float'
      )}
      onClick={() => onToggle(!active)}
    >
      {/* Mushroom cap */}
      <div 
        className={cn(
          'w-16 h-10 rounded-t-full transition-all duration-500',
          'transform origin-bottom',
          active ? 'bg-gradient-to-r from-enchanted-pink to-enchanted-purple shadow-glow-purple' 
                : 'bg-gradient-to-r from-enchanted-purple-light to-enchanted-purple',
          isGlowing || active ? 'shadow-glow-purple' : ''
        )}
      />
      
      {/* Mushroom stem */}
      <div 
        className={cn(
          'w-6 h-10 mx-auto bg-gradient-to-b from-white to-enchanted-pink-light rounded-b-lg',
          'transition-all duration-500',
          active ? 'shadow-glow-pink' : ''
        )}
      />
      
      {/* Mushroom dots */}
      <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-white opacity-70"></div>
      <div className="absolute top-3 left-7 w-1.5 h-1.5 rounded-full bg-white opacity-70"></div>
      <div className="absolute top-5 left-5 w-1 h-1 rounded-full bg-white opacity-70"></div>
      <div className="absolute top-1 left-10 w-1 h-1 rounded-full bg-white opacity-70"></div>
      
      {/* Glow effect */}
      <div 
        className={cn(
          'absolute inset-[-10px] rounded-full bg-enchanted-purple/20 blur-md transition-all duration-500',
          (isGlowing || active) ? 'opacity-90' : 'opacity-0'
        )}
      />
      
      {/* Label text that appears on hover/focus */}
      <span 
        className={cn(
          'absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap',
          'text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          active ? 'text-glow-purple' : ''
        )}
      >
        {active ? 'Secret Garden Open' : 'Discover Secret Garden'}
      </span>
    </button>
  );
}
