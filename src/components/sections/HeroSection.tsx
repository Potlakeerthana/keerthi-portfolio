
import React from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import FloatingFlower from '@/components/FloatingFlower';
import Firefly from '@/components/Firefly';
import FloatingElement from '@/components/FloatingElements';
import DeerAvatar from '@/components/DeerAvatar';
import Butterfly from '@/components/Butterfly';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center px-6" id="home">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingFlower 
          color="pink" 
          size="lg" 
          position={{ x: 15, y: 20 }} 
        />
        <FloatingFlower 
          color="purple" 
          size="md" 
          position={{ x: 80, y: 25 }} 
        />
        <FloatingFlower 
          color="green" 
          size="sm" 
          position={{ x: 75, y: 70 }} 
        />
        <FloatingFlower 
          color="pink" 
          size="sm" 
          position={{ x: 20, y: 75 }} 
        />
        <Butterfly
          color="pink"
          size="md"
          position={{ x: 85, y: 15 }}
        />
        <Butterfly
          color="purple"
          size="sm"
          position={{ x: 25, y: 30 }}
        />
        <Butterfly
          color="green"
          size="lg"
          position={{ x: 60, y: 50 }}
        />
      </div>
      
      <Firefly count={15} />
      
      <div className="text-center mb-8 z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-enchanted-purple/20 backdrop-blur-sm mb-4 animate-fadeIn">
          <span className="text-sm font-medium text-enchanted-purple-dark">Welcome to my enchanted portfolio</span>
        </div>
        
        <AnimatedHeading 
          glowColor="purple"
          className="mb-4 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-dream">
            Potla Keerthana
          </span>
        </AnimatedHeading>
        
        <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-700 mb-8 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
          Bachelor of Technology in Computer Science and Engineering (Data Science)
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center animate-slideUp opacity-0" style={{ animationDelay: '0.6s' }}>
          <a href="mailto:keerthichowdary8247@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-enchanted-purple/10 text-enchanted-purple hover:bg-enchanted-purple/20 transition-colors">
            <Mail className="w-4 h-4" />
            keerthichowdary8247@gmail.com
          </a>
          <a href="tel:+918247223038" className="flex items-center gap-2 px-4 py-2 rounded-full bg-enchanted-purple/10 text-enchanted-purple hover:bg-enchanted-purple/20 transition-colors">
            <Phone className="w-4 h-4" />
            +91-8247223038
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 animate-slideUp opacity-0" style={{ animationDelay: '0.8s' }}>
          <a href="https://github.com/Potlakeerthana/" target="_blank" rel="noopener noreferrer">
            <Button className="relative overflow-hidden group bg-gradient-to-r from-enchanted-purple to-enchanted-pink hover:from-enchanted-pink hover:to-enchanted-purple text-white rounded-full px-8 py-6">
              <span className="relative z-10 flex items-center">
                GitHub Profile
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full px-8 py-6 border-enchanted-purple hover:bg-enchanted-purple/10">
              LinkedIn Profile
            </Button>
          </a>
        </div>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[15%] md:bottom-10 animate-float animate-slideUp opacity-0" style={{ animationDelay: '0.9s' }}>
        <FloatingElement>
          <DeerAvatar />
        </FloatingElement>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-sm text-gray-600 mb-2">Scroll Down</span>
        <ArrowDown className="w-5 h-5 text-gray-600" />
      </div>
    </section>
  );
};

export default HeroSection;
