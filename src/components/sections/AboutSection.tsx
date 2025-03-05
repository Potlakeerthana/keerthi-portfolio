
import React from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import FloatingElement from '@/components/FloatingElements';
import { Button } from '@/components/ui/button';
import { TeaCup, TeaLeaf, TeaBackground, TeaSaucer, TeaPot } from '@/components/TeaElements';
import { Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 glass" id="about">
      <TeaBackground density="low">
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
                <span className="relative">
                  Keerthi
                  <FloatingElement className="absolute -top-8 -right-8 opacity-50 transform-gpu animate-pulse">
                    <div className="tea-steam-container">
                      <TeaCup size="sm" color="pink" className="animate-[rotateTeacup_8s_ease-in-out_infinite]" />
                      <div className="tea-steam-enhanced">
                        <div className="steam-particle-enhanced steam-1"></div>
                        <div className="steam-particle-enhanced steam-2"></div>
                        <div className="steam-particle-enhanced steam-3"></div>
                      </div>
                    </div>
                  </FloatingElement>
                </span>
              </AnimatedHeading>
              
              <p className="text-gray-700 mb-4 leading-relaxed transform transition-all duration-500 hover:translate-z-5 hover:scale-105">
                Just like a perfectly brewed cup of tea, my work is a blend of creativity, passion, and attention to detail. I carefully select each ingredient in my projects, steeping them in innovation until they reach their full potential.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed transform transition-all duration-500 hover:translate-z-5 hover:scale-105">
                Currently pursuing Bachelor of Technology in Computer Science and Engineering (Data Science) at Sri Venkateswara College of Engineering and Technology with a CGPA of 8.7, brewing excellence with each semester.
              </p>
              
              <div className="relative mb-10 perspective-3d transform-gpu">
                <div className="absolute -left-4 -top-4 transform rotate-[-15deg] scale-75 z-0 animate-float-slow opacity-80">
                  <TeaSaucer size="md" color="pink" />
                </div>
                <div className="absolute -right-4 -bottom-10 transform rotate-[10deg] scale-75 z-0 animate-float-slow float-delay-2 opacity-80">
                  <TeaSaucer size="sm" color="purple" />
                </div>
                <div className="tea-scene relative z-10 transform transition-all duration-700 hover:scale-105 hover:rotate-y-5">
                  <div className="teacup-3d-container relative p-8 glass rounded-lg border border-white/30 shadow-glow-pink">
                    <h3 className="text-lg font-semibold text-enchanted-purple transform hover:translate-z-10 transition-transform mb-4">Tech Tea Pairings:</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tea-pairing-card px-4 py-2 rounded-full bg-enchanted-purple/10 text-enchanted-purple flex items-center relative overflow-hidden group transform transition-all duration-300 hover:rotate-2 hover:scale-105 hover:shadow-glow-purple">
                        <TeaCup size="sm" color="purple" className="mr-2 tea-cup-rotate transform transition-transform group-hover:rotate-12" steamAnimation={false} />
                        <span className="relative z-10 transform transition-transform group-hover:translate-y-[-2px]">Python – Best paired with a bold black tea</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-enchanted-purple/0 to-enchanted-purple/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      </span>
                      <span className="tea-pairing-card px-4 py-2 rounded-full bg-enchanted-green/10 text-enchanted-green flex items-center relative overflow-hidden group transform transition-all duration-300 hover:rotate-1 hover:scale-105 hover:shadow-glow-green">
                        <TeaCup size="sm" color="green" className="mr-2 tea-cup-rotate transform transition-transform group-hover:rotate-12" steamAnimation={false} />
                        <span className="relative z-10 transform transition-transform group-hover:translate-y-[-2px]">SQL – A soothing green tea experience</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-enchanted-green/0 to-enchanted-green/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      </span>
                      <span className="tea-pairing-card px-4 py-2 rounded-full bg-enchanted-pink/10 text-enchanted-pink flex items-center relative overflow-hidden group transform transition-all duration-300 hover:rotate-1 hover:scale-105 hover:shadow-glow-pink">
                        <TeaCup size="sm" color="pink" className="mr-2 tea-cup-rotate transform transition-transform group-hover:rotate-12" steamAnimation={false} />
                        <span className="relative z-10 transform transition-transform group-hover:translate-y-[-2px]">Web Development – A fragrant floral blend</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-enchanted-pink/0 to-enchanted-pink/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="#contact">
                <Button className="rounded-full bg-gradient-to-r from-enchanted-pink to-enchanted-purple hover:from-enchanted-purple hover:to-enchanted-pink text-white group relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow-pink perspective-3d hover:translate-z-10">
                  <span className="relative z-10 flex items-center gap-2">
                    <TeaCup size="sm" color="purple" className="opacity-90" />
                    Brew a Conversation
                    <span className="tea-steam-mini"></span>
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
              </a>
              
              <div className="absolute -left-20 bottom-20 opacity-30 transform rotate-45 pointer-events-none animate-float-slow">
                <TeaLeaf className="w-32 h-32" />
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <GlassmorphicCard 
                glowColor="pink"
                animated
                className="p-0 overflow-hidden aspect-square flex items-center justify-center transform perspective-card"
              >
                <div className="absolute inset-0 bg-gradient-dawn opacity-20" />
                <div className="relative z-10 p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:rotate-3 perspective-3d">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-glow-pink border-4 border-white/30 photo-container transform hover:rotate-y-12 transition-all duration-500">
                    <img 
                      src="/lovable-uploads/141cefa9-5c19-4b4f-8c1f-935a87cfdf34.png" 
                      alt="Potla Keerthana" 
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 transform transition-all duration-300 hover:translate-y-[-5px] hover:translate-z-10">Potla Keerthana</h3>
                  <p className="text-gray-700 italic transform transition-all duration-300 hover:translate-z-5">"Creating magic at the intersection of data science and code"</p>
                </div>
                <div className="photo-overlay"></div>
              </GlassmorphicCard>
              
              <FloatingElement delay={2} speed="slow" className="absolute -bottom-8 -right-8 z-20">
                <GlassmorphicCard 
                  glowColor="purple"
                  className="py-2 px-4 transform transition-all duration-300 hover:scale-105 hover:rotate-2 hover:translate-z-5"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-enchanted-purple mr-2 animate-pulse" />
                    <span className="text-sm">Web Developer</span>
                  </div>
                </GlassmorphicCard>
              </FloatingElement>
              
              <div className="absolute -right-8 -top-8 animate-float-slow opacity-80 z-20">
                <TeaPot size="sm" color="pink" className="transform rotate-[-15deg]" />
              </div>
              
              <div className="absolute top-[-10%] left-[10%] w-full h-full pointer-events-none">
                <div className="tea-particle-container">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`tea-particle tea-particle-${i + 1}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TeaBackground>
    </section>
  );
};

export default AboutSection;
