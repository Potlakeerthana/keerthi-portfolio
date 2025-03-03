
import { useState, useEffect } from 'react';

export default function WireframeTree() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Initial animation
    setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    // Repeat animation occasionally
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center">
      <svg 
        viewBox="0 0 300 400" 
        className="w-[80%] max-w-[400px] h-auto opacity-70"
      >
        {/* Tree trunk */}
        <path 
          d="M150,380 L150,280 Q150,260 160,250 T150,230 Q150,210 140,200 T150,180 L150,100"
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="3"
          strokeDasharray="400"
          strokeDashoffset={animate ? "0" : "400"}
          style={{ transition: "stroke-dashoffset 2s ease-out" }}
        />
        
        {/* Branches */}
        <path 
          d="M150,180 L100,140" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={animate ? "0" : "100"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.3s" }}
        />
        <path 
          d="M150,180 L200,150" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={animate ? "0" : "100"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.4s" }}
        />
        <path 
          d="M150,230 L90,220" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={animate ? "0" : "100"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.5s" }}
        />
        <path 
          d="M150,230 L210,210" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={animate ? "0" : "100"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.6s" }}
        />
        
        {/* Smaller branches */}
        <path 
          d="M100,140 L70,120" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="1.5" 
          strokeDasharray="50"
          strokeDashoffset={animate ? "0" : "50"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.7s" }}
        />
        <path 
          d="M100,140 L110,100" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="1.5"
          strokeDasharray="50"
          strokeDashoffset={animate ? "0" : "50"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.8s" }}
        />
        <path 
          d="M200,150 L230,140" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="1.5"
          strokeDasharray="50"
          strokeDashoffset={animate ? "0" : "50"}
          style={{ transition: "stroke-dashoffset 2s ease-out 0.9s" }}
        />
        <path 
          d="M200,150 L210,110" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="1.5"
          strokeDasharray="50"
          strokeDashoffset={animate ? "0" : "50"}
          style={{ transition: "stroke-dashoffset 2s ease-out 1s" }}
        />
        
        {/* Top branches */}
        <path 
          d="M150,100 L120,70" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="1.5"
          strokeDasharray="50"
          strokeDashoffset={animate ? "0" : "50"}
          style={{ transition: "stroke-dashoffset 2s ease-out 1.1s" }}
        />
        <path 
          d="M150,100 L180,60" 
          fill="none" 
          stroke="url(#treeGradient)" 
          strokeWidth="1.5"
          strokeDasharray="50"
          strokeDashoffset={animate ? "0" : "50"}
          style={{ transition: "stroke-dashoffset 2s ease-out 1.2s" }}
        />
        
        {/* Connection points for crystals */}
        <circle 
          cx="70" cy="120" r="4" 
          fill="url(#pointGradient)"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.5s ease-out 1.3s" }}
        />
        <circle 
          cx="110" cy="100" r="4" 
          fill="url(#pointGradient)"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.5s ease-out 1.4s" }}
        />
        <circle 
          cx="230" cy="140" r="4" 
          fill="url(#pointGradient)"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.5s ease-out 1.5s" }}
        />
        <circle 
          cx="210" cy="110" r="4" 
          fill="url(#pointGradient)"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.5s ease-out 1.6s" }}
        />
        <circle 
          cx="120" cy="70" r="4" 
          fill="url(#pointGradient)"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.5s ease-out 1.7s" }}
        />
        <circle 
          cx="180" cy="60" r="4" 
          fill="url(#pointGradient)"
          opacity={animate ? "1" : "0"}
          style={{ transition: "opacity 0.5s ease-out 1.8s" }}
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8B4FE" />
            <stop offset="100%" stopColor="#A7F3D0" />
          </linearGradient>
          <radialGradient id="pointGradient">
            <stop offset="0%" stopColor="#FFCCD5" />
            <stop offset="100%" stopColor="#D8B4FE" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
