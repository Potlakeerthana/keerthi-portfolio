
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  speed?: 'normal' | 'slow' | 'rapid';
}

export default function FloatingElement({
  children,
  className,
  delay = 1,
  speed = 'normal'
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
        className
      )}
    >
      {children}
    </div>
  );
}
