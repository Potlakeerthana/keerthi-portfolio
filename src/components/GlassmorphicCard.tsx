
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'pink' | 'purple' | 'green' | 'gold';
  glowIntensity?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function GlassmorphicCard({
  children,
  className,
  glowColor = 'pink',
  glowIntensity = 'md',
  animated = false
}: GlassmorphicCardProps) {
  const glowClasses = {
    pink: {
      sm: 'shadow-glow-pink',
      md: 'shadow-glow-pink',
      lg: 'shadow-glow-pink'
    },
    purple: {
      sm: 'shadow-glow-purple',
      md: 'shadow-glow-purple',
      lg: 'shadow-glow-purple'
    },
    green: {
      sm: 'shadow-glow-green',
      md: 'shadow-glow-green',
      lg: 'shadow-glow-green'
    },
    gold: {
      sm: 'shadow-glow-gold',
      md: 'shadow-glow-gold',
      lg: 'shadow-glow-gold'
    }
  };

  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 backdrop-blur-md border border-white/20',
        glowClasses[glowColor][glowIntensity],
        animated && 'transform transition-all duration-300 hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
}
