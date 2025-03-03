
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import FloatingElement from './FloatingElements';

interface TeaCupProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'black' | 'pink' | 'purple';
  className?: string;
  steamAnimation?: boolean;
}

export const TeaCup = ({ size = 'md', color = 'green', className, steamAnimation = true }: TeaCupProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16', 
    lg: 'w-24 h-24'
  };
  
  const colorClasses = {
    green: 'text-enchanted-green',
    black: 'text-gray-800',
    pink: 'text-enchanted-pink',
    purple: 'text-enchanted-purple'
  };
  
  return (
    <div className={cn('relative inline-block', sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" className={cn('w-full h-full', colorClasses[color])}>
        {/* Cup body */}
        <path d="M20,40 C20,70 30,85 50,85 C70,85 80,70 80,40 L20,40 Z" fill="currentColor" fillOpacity="0.2" />
        {/* Cup rim */}
        <path d="M15,40 C15,35 20,30 25,30 L75,30 C80,30 85,35 85,40 L80,40 C80,38 77,35 75,35 L25,35 C23,35 20,38 20,40 L15,40 Z" fill="currentColor" fillOpacity="0.3" />
        {/* Cup handle */}
        <path d="M80,45 C90,45 95,50 95,60 C95,70 90,75 80,75 L80,70 C87,70 90,67 90,60 C90,53 87,50 80,50 L80,45 Z" fill="currentColor" fillOpacity="0.3" />
        {/* Tea liquid */}
        <path d="M25,42 C25,65 32,80 50,80 C68,80 75,65 75,42 L25,42 Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {steamAnimation && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="steam-particle w-1 h-3 bg-white/20 rounded-full animate-steam-1 absolute"></div>
          <div className="steam-particle w-1 h-4 bg-white/20 rounded-full animate-steam-2 absolute left-2"></div>
          <div className="steam-particle w-1 h-3 bg-white/20 rounded-full animate-steam-3 absolute left-1"></div>
        </div>
      )}
    </div>
  );
};

export const TeaLeaf = ({ className }: { className?: string }) => {
  return (
    <div className={cn("tea-leaf", className)}>
      <svg viewBox="0 0 50 50" className="w-full h-full text-enchanted-green">
        <path d="M25,5 C35,15 40,25 25,45 C10,25 15,15 25,5 Z" fill="currentColor" fillOpacity="0.7" />
        <path d="M25,10 C25,10 30,20 25,35 C25,35 20,20 25,10 Z" fill="white" fillOpacity="0.3" />
      </svg>
    </div>
  );
};

interface TeaBackgroundProps {
  children: ReactNode;
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
}

export const TeaBackground = ({ children, density = 'medium', animate = true }: TeaBackgroundProps) => {
  const leafCount = {
    low: 5,
    medium: 10,
    high: 20
  };
  
  const leaves = Array.from({ length: leafCount[density] }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    top: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: Math.random() * 5
  }));
  
  return (
    <div className="relative">
      {animate && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {leaves.map(leaf => (
            <div
              key={leaf.id}
              className="absolute opacity-20"
              style={{
                width: `${leaf.size}px`,
                height: `${leaf.size}px`,
                left: `${leaf.left}%`,
                top: `${leaf.top}%`,
                transform: `rotate(${leaf.rotation}deg)`,
                animation: animate ? `floating 15s ease-in-out ${leaf.delay}s infinite` : 'none'
              }}
            >
              <TeaLeaf />
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};
