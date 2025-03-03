
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  speed?: 'normal' | 'slow' | 'rapid';
  type?: 'default' | 'butterfly' | 'tealeaf';
}

export default function FloatingElement({
  children,
  className,
  delay = 1,
  speed = 'normal',
  type = 'default'
}: FloatingElementProps) {
  const delayClasses = {
    1: 'float-delay-1',
    2: 'float-delay-2',
    3: 'float-delay-3'
  };

  const speedClasses = {
    normal: 'animate-float',
    slow: 'animate-float-slow',
    rapid: 'animate-float-rapid'
  };

  return (
    <div
      className={cn(
        'transition-all',
        speedClasses[speed],
        delayClasses[delay],
        type === 'butterfly' && 'butterfly-element',
        type === 'tealeaf' && 'tea-leaf-element',
        className
      )}
    >
      {children}
      {type === 'butterfly' && (
        <div className="butterfly-wings absolute -z-10">
          <div className="wing wing-left animate-flutter-left opacity-30"></div>
          <div className="wing wing-right animate-flutter-right opacity-30"></div>
        </div>
      )}
      {type === 'tealeaf' && (
        <div className="tea-leaf-animation absolute -z-10 w-full h-full">
          <div className="leaf-shadow opacity-20 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 blur-sm"></div>
        </div>
      )}
    </div>
  );
}
