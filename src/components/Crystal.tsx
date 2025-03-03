
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface CrystalProps {
  color: 'pink' | 'purple' | 'green' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  position?: { x: number; y: number };
  className?: string;
  onClick?: () => void;
}

export default function Crystal({
  color,
  size = 'md',
  position,
  className,
  onClick
}: CrystalProps) {
  const [isGlowing, setIsGlowing] = useState(false);
  const [randomRotation, setRandomRotation] = useState(0);
  
  const colorClasses = {
    pink: 'bg-gradient-to-br from-enchanted-pink-light to-enchanted-pink shadow-glow-pink',
    purple: 'bg-gradient-to-br from-enchanted-purple-light to-enchanted-purple shadow-glow-purple',
    green: 'bg-gradient-to-br from-enchanted-green-light to-enchanted-green shadow-glow-green',
    gold: 'bg-gradient-to-br from-yellow-200 to-enchanted-gold shadow-glow-gold'
  };
  
  const sizeClasses = {
    sm: 'w-10 h-16',
    md: 'w-16 h-24',
    lg: 'w-20 h-32'
  };
  
  useEffect(() => {
    // Set random rotation
    setRandomRotation(Math.random() * 30 - 15);
    
    // Random glow animation timing
    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 1500);
    }, Math.random() * 5000 + 3000);
    
    return () => clearInterval(glowInterval);
  }, []);

  return (
    <div
      className={cn(
        'relative animate-float cursor-pointer',
        sizeClasses[size],
        className
      )}
      style={{
        left: position?.x ? `${position.x}%` : 'auto',
        top: position?.y ? `${position.y}%` : 'auto',
        transform: `rotate(${randomRotation}deg)`
      }}
      onClick={onClick}
    >
      {/* Crystal facets */}
      <div 
        className={cn(
          'absolute w-full h-full transition-all duration-300',
          colorClasses[color]
        )}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      
      {/* Crystal inner glow */}
      <div 
        className={cn(
          'absolute w-[80%] h-[80%] left-[10%] top-[10%] mix-blend-overlay transition-all duration-300',
          'bg-white/50'
        )}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      
      {/* Glow effect overlay */}
      <div 
        className={cn(
          'absolute inset-[-50%] rounded-full blur-md transition-opacity duration-500',
          {
            'bg-enchanted-pink/20': color === 'pink',
            'bg-enchanted-purple/20': color === 'purple',
            'bg-enchanted-green/20': color === 'green',
            'bg-enchanted-gold/20': color === 'gold',
          },
          isGlowing ? 'opacity-90 scale-110' : 'opacity-30 scale-100'
        )}
      />
    </div>
  );
}
