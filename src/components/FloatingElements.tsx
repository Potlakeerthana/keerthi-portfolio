
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  speed?: 'normal' | 'slow' | 'rapid';
  type?: 'default' | 'butterfly';
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
        className
      )}
    >
      {children}
      {type === 'butterfly' && (
        <div className="butterfly-wings">
          <div className="wing wing-left"></div>
          <div className="wing wing-right"></div>
        </div>
      )}
    </div>
  );
}
