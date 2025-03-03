
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  glowColor?: 'pink' | 'purple' | 'green' | 'gold' | 'none';
  animated?: boolean;
}

export default function AnimatedHeading({
  children,
  className,
  level = 1,
  glowColor = 'none',
  animated = true
}: AnimatedHeadingProps) {
  const glowClasses = {
    pink: 'text-glow-pink',
    purple: 'text-glow-purple',
    green: 'text-glow-green',
    gold: 'text-glow-gold',
    none: ''
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        'font-display font-bold animate-slideUp opacity-0',
        {
          'text-4xl md:text-5xl lg:text-6xl': level === 1,
          'text-3xl md:text-4xl lg:text-5xl': level === 2,
          'text-2xl md:text-3xl': level === 3,
          'text-xl md:text-2xl': level === 4,
          'text-lg md:text-xl': level === 5,
          'text-base md:text-lg': level === 6
        },
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </Tag>
  );
}
