
import React from 'react';
import { cn } from '@/lib/utils';

interface TeaCupProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'pink' | 'purple' | 'green' | 'gold';
  className?: string;
  steamAnimation?: boolean;
}

export default function TeaCup({ 
  size = 'md',
  color = 'pink',
  className,
  steamAnimation = true
}: TeaCupProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };
  
  const colorClasses = {
    pink: 'text-enchanted-pink',
    purple: 'text-enchanted-purple',
    green: 'text-enchanted-green',
    gold: 'text-amber-400'
  };
  
  return (
    <div className={cn(
      'relative',
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path 
          d="M2 8C2 6 4 4 6 4H18C20 4 22 6 22 8C22 10 20 12 18 12H6C4 12 2 10 2 8Z" 
          fill="currentColor" 
          fillOpacity="0.2"
        />
        <path 
          d="M4 8C4 9.10457 4.89543 10 6 10H18C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8Z" 
          fill="currentColor" 
          fillOpacity="0.6"
        />
        <path 
          d="M6 10V16C6 18 8 20 12 20C16 20 18 18 18 16V10" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      
      {steamAnimation && (
        <div className="tea-steam">
          <div className="steam-particle steam-1"></div>
          <div className="steam-particle steam-2"></div>
          <div className="steam-particle steam-3"></div>
        </div>
      )}
    </div>
  );
}
