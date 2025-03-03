
import { useEffect, useState } from 'react';

export default function DeerAvatar() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Random small movement
      setPosition(prev => ({
        x: prev.x + (Math.random() * 8 - 4),
        y: prev.y + (Math.random() * 8 - 4)
      }));
      
      // Random animation trigger
      if (Math.random() > 0.7) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative animate-float-slow" 
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="w-40 h-40 md:w-56 md:h-56 relative">
        {/* Deer Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-enchanted-pink-light to-enchanted-pink rounded-full shadow-glow-pink transform-gpu transition-all duration-300">
          {/* This represents the deer body as a simple shape for now */}
        </div>
        
        {/* Deer Head */}
        <div className="absolute w-20 h-24 md:w-28 md:h-32 bg-gradient-to-b from-enchanted-pink-light to-enchanted-pink rounded-full top-[-15%] left-[30%] transform-gpu transition-all duration-300">
          {/* This represents the deer head */}
        </div>
        
        {/* Antlers with flowers */}
        <div className="absolute top-[-25%] left-[30%] w-20 md:w-28 h-10 md:h-16 flex justify-center">
          {/* Left Antler */}
          <div className="relative h-full w-1/2">
            <div className="absolute bottom-0 left-2 w-1 h-12 md:h-16 bg-enchanted-gold transform rotate-[-30deg]"></div>
            <div className="absolute bottom-6 left-0 w-1 h-8 md:h-10 bg-enchanted-gold transform rotate-[-60deg]"></div>
            
            {/* Flowers on left antler */}
            <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-enchanted-purple rounded-full shadow-glow-purple"></div>
            <div className="absolute top-4 left-[-4px] w-2 h-2 md:w-3 md:h-3 bg-enchanted-pink rounded-full shadow-glow-pink"></div>
          </div>
          
          {/* Right Antler */}
          <div className="relative h-full w-1/2">
            <div className="absolute bottom-0 right-2 w-1 h-12 md:h-16 bg-enchanted-gold transform rotate-[30deg]"></div>
            <div className="absolute bottom-6 right-0 w-1 h-8 md:h-10 bg-enchanted-gold transform rotate-[60deg]"></div>
            
            {/* Flowers on right antler */}
            <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-enchanted-purple rounded-full shadow-glow-purple"></div>
            <div className="absolute top-4 right-[-4px] w-2 h-2 md:w-3 md:h-3 bg-enchanted-pink rounded-full shadow-glow-pink"></div>
          </div>
        </div>
        
        {/* Eyes */}
        <div className="absolute top-[-5%] left-[42%] w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
        <div className="absolute top-[-5%] left-[58%] w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
        
        {/* Glow effect */}
        <div 
          className={`absolute inset-[-10px] rounded-full bg-enchanted-pink/20 shadow-glow-pink blur-md transition-opacity duration-500 ${
            isAnimating ? 'opacity-80' : 'opacity-30'
          }`}
        ></div>
      </div>
    </div>
  );
}
