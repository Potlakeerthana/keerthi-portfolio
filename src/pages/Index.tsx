
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import DeerAvatar from '@/components/DeerAvatar';
import FloatingFlower from '@/components/FloatingFlower';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import AnimatedHeading from '@/components/AnimatedHeading';
import MagicCursor from '@/components/MagicCursor';
import FallingPetals from '@/components/FallingPetals';
import Firefly from '@/components/Firefly';
import FloatingElement from '@/components/FloatingElements';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-enchanted-purple-light via-enchanted-pink-light to-white overflow-hidden">
      <MagicCursor />
      <FallingPetals />
      
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center px-6">
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
              Where Nature Meets <br className="sm:hidden" />Technology
            </span>
          </AnimatedHeading>
          
          <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-700 mb-8 animate-slideUp opacity-0" style={{ animationDelay: '0.3s' }}>
            Explore a magical digital showcase where elegant design intertwines with cutting-edge development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp opacity-0" style={{ animationDelay: '0.6s' }}>
            <Link to="/projects">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-enchanted-purple to-enchanted-pink hover:from-enchanted-pink hover:to-enchanted-purple text-white rounded-full px-8 py-6">
                <span className="relative z-10 flex items-center">
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </Link>
            
            <Link to="/skills">
              <Button variant="outline" className="rounded-full px-8 py-6 border-enchanted-purple hover:bg-enchanted-purple/10">
                View Skills
              </Button>
            </Link>
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
      
      {/* Introduction Section */}
      <section className="relative min-h-screen py-20 px-6 glass">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-enchanted-pink/20 backdrop-blur-sm mb-4">
                <span className="text-sm font-medium text-enchanted-pink-dark flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  About Me
                </span>
              </div>
              
              <AnimatedHeading 
                level={2}
                glowColor="pink"
                className="mb-6"
              >
                A Digital Enchantress
              </AnimatedHeading>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                I'm a designer and developer who blends nature's organic beauty with technological precision. My work creates immersive digital experiences that feel both magical and intuitive.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                With a passion for creating dreamy interfaces and interactive experiences, I transform concepts into enchanting digital realities.
              </p>
              
              <Link to="/contact">
                <Button className="rounded-full bg-gradient-to-r from-enchanted-pink to-enchanted-purple hover:from-enchanted-purple hover:to-enchanted-pink text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <GlassmorphicCard 
                glowColor="pink"
                animated
                className="p-0 overflow-hidden aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-dawn opacity-20" />
                <div className="relative z-10 p-8 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-enchanted-pink-light to-enchanted-pink mb-4 shadow-glow-pink">
                    {/* Placeholder for profile image */}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">Jane Doe</h3>
                  <p className="text-gray-700 italic">"Creating magic at the intersection of art and code"</p>
                </div>
              </GlassmorphicCard>
              
              <FloatingElement delay={2} speed="slow" className="absolute -bottom-8 -right-8 z-20">
                <GlassmorphicCard 
                  glowColor="purple"
                  className="py-2 px-4"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-enchanted-purple mr-2 animate-pulse" />
                    <span className="text-sm">Creative Coder</span>
                  </div>
                </GlassmorphicCard>
              </FloatingElement>
              
              <FloatingElement delay={1} className="absolute -top-8 -left-8 z-20">
                <GlassmorphicCard 
                  glowColor="green"
                  className="py-2 px-4"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-enchanted-green mr-2 animate-pulse" />
                    <span className="text-sm">UI/UX Designer</span>
                  </div>
                </GlassmorphicCard>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 text-center px-6 bg-gradient-dream">
        <div className="container mx-auto max-w-4xl">
          <AnimatedHeading 
            level={2}
            glowColor="gold"
            className="mb-6"
          >
            Ready to Explore the Magic?
          </AnimatedHeading>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Journey through my projects, skills, and discover the hidden wonders in my secret garden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button className="bg-gradient-to-r from-enchanted-purple to-enchanted-pink hover:opacity-90 text-white rounded-full px-8">
                View Projects
              </Button>
            </Link>
            
            <Link to="/garden">
              <Button variant="outline" className="rounded-full px-8 border-enchanted-purple hover:bg-enchanted-purple/10">
                Find Secret Garden
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <footer className="py-8 text-center text-gray-600 bg-white">
        <div className="container mx-auto">
          <p>© 2023 Enchanted Portfolio. Made with magic and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
