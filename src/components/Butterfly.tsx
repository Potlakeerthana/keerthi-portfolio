
import React from 'react';
import FloatingElement from './FloatingElements';
import { cn } from '@/lib/utils';

interface ButterflyProps {
  color?: 'pink' | 'purple' | 'green' | 'gold';
  position: { x: number; y: number };
  size?: 'sm' | 'md' | 'lg';
}

export default function Butterfly({ 
  color = 'pink', 
  position, 
  size = 'md' 
}: ButterflyProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    pink: 'text-enchanted-pink',
    purple: 'text-enchanted-purple',
    green: 'text-enchanted-green',
    gold: 'text-amber-400'
  };

  return (
    <div 
      className="absolute pointer-events-none"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%` 
      }}
    >
      <FloatingElement speed="slow" type="butterfly">
        <div className={cn(
          'butterfly-container',
          sizeClasses[size],
          colorClasses[color]
        )}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="butterfly-svg"
          >
            <path 
              d="M12 4C10.5 1 7.5 0 4 0C4 2.5 4.5 5.5 6 7L12 13L18 7C19.5 5.5 20 2.5 20 0C16.5 0 13.5 1 12 4Z" 
              fill="currentColor" 
              fillOpacity="0.7"
            />
            <path 
              d="M12 13L6 7C4.5 10.5 4 15 4 20C5.5 19.5 9 19 12 17.5C15 19 18.5 19.5 20 20C20 15 19.5 10.5 18 7L12 13Z" 
              fill="currentColor" 
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </FloatingElement>
    </div>
  );
}
