
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FloatingFlowerProps {
  color: 'pink' | 'purple' | 'green';
  size?: 'sm' | 'md' | 'lg';
  position?: { x: number; y: number };
  className?: string;
}

export default function FloatingFlower({
  color,
  size = 'md',
  position,
  className
}: FloatingFlowerProps) {
  const [randomOffset, setRandomOffset] = useState({ x: 0, y: 0 });
  const [isGlowing, setIsGlowing] = useState(false);
  
  const colorClasses = {
    pink: 'bg-enchanted-pink shadow-glow-pink',
    purple: 'bg-enchanted-purple shadow-glow-purple',
    green: 'bg-enchanted-green shadow-glow-green'
  };
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  useEffect(() => {
    // Set random starting position offset
    setRandomOffset({
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10
    });
    
    // Random glow animation timing
    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1000);
    }, Math.random() * 5000 + 3000);
    
    return () => clearInterval(glowInterval);
  }, []);

  // Create petal elements for the flower
  const petals = [];
  for (let i = 0; i < 5; i++) {
    petals.push(
      <div
        key={i}
        className={cn(
          'absolute rounded-full transform-gpu transition-all duration-300',
          colorClasses[color]
        )}
        style={{
          width: '70%',
          height: '70%',
          transform: `rotate(${i * 72}deg) translateY(-50%)`,
          top: '50%',
          left: '15%',
          opacity: 0.8
        }}
      />
    );
  }

  return (
    <div
      className={cn(
        'relative animate-float',
        sizeClasses[size],
        className
      )}
      style={{
        left: position?.x ? `${position.x + randomOffset.x}%` : 'auto',
        top: position?.y ? `${position.y + randomOffset.y}%` : 'auto'
      }}
    >
      {/* Flower petals */}
      {petals}
      
      {/* Flower center */}
      <div 
        className={cn(
          'absolute inset-[30%] rounded-full transform-gpu transition-all duration-300',
          {
            'bg-enchanted-gold shadow-glow-gold': color === 'pink',
            'bg-enchanted-pink shadow-glow-pink': color === 'purple',
            'bg-enchanted-purple shadow-glow-purple': color === 'green'
          }
        )}
      />
      
      {/* Glow effect overlay */}
      <div 
        className={cn(
          'absolute inset-[-25%] rounded-full blur-md transition-opacity duration-500',
          {
            'bg-enchanted-pink/20': color === 'pink',
            'bg-enchanted-purple/20': color === 'purple',
            'bg-enchanted-green/20': color === 'green',
          },
          isGlowing ? 'opacity-90' : 'opacity-30'
        )}
      />
    </div>
  );
}
