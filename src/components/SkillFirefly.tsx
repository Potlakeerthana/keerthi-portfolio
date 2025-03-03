
import { ReactNode, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillFireflyProps {
  children: ReactNode;
  label: string;
  color: 'pink' | 'purple' | 'green' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  position: { x: number; y: number };
  className?: string;
}

export default function SkillFirefly({
  children,
  label,
  color,
  size = 'md',
  position,
  className
}: SkillFireflyProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [randomOffset, setRandomOffset] = useState({ x: 0, y: 0 });
  
  const colorClasses = {
    pink: 'bg-enchanted-pink shadow-glow-pink',
    purple: 'bg-enchanted-purple shadow-glow-purple',
    green: 'bg-enchanted-green shadow-glow-green',
    gold: 'bg-enchanted-gold shadow-glow-gold'
  };
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };
  
  useEffect(() => {
    // Add slight random position offset
    setRandomOffset({
      x: Math.random() * 30 - 15,
      y: Math.random() * 30 - 15
    });
    
    // Random glow animation timing
    const glowInterval = setInterval(() => {
      if (!isHovering) {
        setIsGlowing(true);
        setTimeout(() => setIsGlowing(false), 1000);
      }
    }, Math.random() * 4000 + 2000);
    
    return () => clearInterval(glowInterval);
  }, [isHovering]);

  return (
    <div
      className={cn(
        'absolute animate-float cursor-pointer transition-all duration-300',
        sizeClasses[size],
        className
      )}
      style={{
        left: `calc(${position.x}% + ${randomOffset.x}px)`,
        top: `calc(${position.y}% + ${randomOffset.y}px)`,
        zIndex: isHovering ? 10 : 1
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Skill icon circle */}
      <div 
        className={cn(
          'relative flex items-center justify-center rounded-full transition-all duration-300',
          'w-full h-full',
          colorClasses[color],
          isHovering ? 'scale-110' : 'scale-100'
        )}
      >
        {children}
      </div>
      
      {/* Label */}
      <div 
        className={cn(
          'absolute top-full left-1/2 transform -translate-x-1/2 mt-2',
          'whitespace-nowrap text-sm font-medium transition-all duration-300',
          isHovering ? 'opacity-100' : 'opacity-0',
          `text-glow-${color}`
        )}
      >
        {label}
      </div>
      
      {/* Glow effect */}
      <div 
        className={cn(
          'absolute inset-[-50%] rounded-full transition-all duration-500 blur-md',
          {
            'bg-enchanted-pink/20': color === 'pink',
            'bg-enchanted-purple/20': color === 'purple',
            'bg-enchanted-green/20': color === 'green',
            'bg-enchanted-gold/20': color === 'gold',
          },
          (isHovering || isGlowing) ? 'opacity-90 scale-110' : 'opacity-30 scale-100'
        )}
      />
      
      {/* Trailing particles when hovered */}
      {isHovering && (
        <>
          <div className="absolute w-2 h-2 rounded-full bg-white animate-ping" 
               style={{ left: '50%', top: '50%', animationDuration: '1.5s' }} />
          <div className="absolute w-1 h-1 rounded-full bg-white animate-ping" 
               style={{ left: '40%', top: '60%', animationDuration: '1.3s', animationDelay: '0.2s' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white animate-ping" 
               style={{ left: '60%', top: '40%', animationDuration: '1.7s', animationDelay: '0.4s' }} />
        </>
      )}
    </div>
  );
}
