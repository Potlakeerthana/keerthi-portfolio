
import React, { useState } from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import FloatingElement from '@/components/FloatingElements';
import Butterfly from '@/components/Butterfly';
import { Button } from '@/components/ui/button';
import { TeaPot, TeaSaucer, TeaCup, TeaLeaf, TeaCupWithSaucer } from '@/components/TeaElements';
import { Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:keerthichowdary8247@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message}%0A%0AFrom: ${email}`);
  };
  
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-enchanted-purple/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-enchanted-purple-dark flex items-center justify-center">
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </span>
          </div>
          
          <AnimatedHeading 
            level={2}
            glowColor="purple"
            className="mb-4"
          >
            Let's Connect
          </AnimatedHeading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative transform perspective-3d">
            <div className="absolute -top-16 -left-12 z-0 opacity-80 animate-float-slow">
              <TeaPot size="md" color="purple" />
            </div>
            
            <GlassmorphicCard
              glowColor="purple"
              className="relative z-10 transform perspective-card transition-all duration-500 hover:rotate-y-10 hover:scale-105 mt-10"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-enchanted-purple/20 to-enchanted-pink/20"></div>
                <div className="tea-swirl-effect"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="tea-set-3d transform-gpu perspective-1000">
                    <div className="relative">
                      <TeaSaucer size="md" color="purple" className="relative z-10 transform-gpu" />
                      <div className="absolute left-1/2 -top-12 -translate-x-1/2">
                        <TeaCup size="md" color="purple" className="transform-gpu tea-cup-rotate" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold mb-6 text-center transform transition-all duration-300 hover:translate-z-10 hover:scale-110">Drop Me a Message</h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed transform transition-all duration-300 hover:translate-z-5 hover:scale-105">
                  I'm always open to discussing new projects, opportunities or partnerships. Feel free to reach out using the form or contact details below.
                </p>
                
                <div className="space-y-4 perspective-3d">
                  <a href="mailto:keerthichowdary8247@gmail.com" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-enchanted-purple/10 hover:bg-enchanted-purple/20 transition-colors group transform hover:translate-z-10 hover:scale-105">
                    <div className="w-10 h-10 rounded-full bg-enchanted-purple/20 flex items-center justify-center transform-gpu transition-transform group-hover:rotate-y-180">
                      <Mail className="w-5 h-5 text-enchanted-purple transform-gpu transition-transform group-hover:rotate-y-180" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium text-enchanted-purple group-hover:translate-x-1 transition-transform">keerthichowdary8247@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="tel:+918247223038" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-enchanted-purple/10 hover:bg-enchanted-purple/20 transition-colors group transform hover:translate-z-10 hover:scale-105">
                    <div className="w-10 h-10 rounded-full bg-enchanted-purple/20 flex items-center justify-center transform-gpu transition-transform group-hover:rotate-y-180">
                      <Phone className="w-5 h-5 text-enchanted-purple transform-gpu transition-transform group-hover:rotate-y-180" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-medium text-enchanted-purple group-hover:translate-x-1 transition-transform">+91-8247223038</div>
                    </div>
                  </a>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
          
          <div className="relative">
            <div className="absolute -bottom-10 -right-10 z-0 opacity-60 animate-float-slow float-delay-2">
              <TeaPot size="sm" color="pink" className="transform rotate-[15deg]" />
            </div>
            
            <div className="absolute top-1/4 -left-10 z-0 opacity-60 animate-float-slow float-delay-3">
              <TeaCupWithSaucer size="sm" color="green" />
            </div>
            
            <GlassmorphicCard
              glowColor="pink"
              className="relative z-10 transform transition-all duration-500 hover:translate-z-10 hover:scale-[1.02] hover:rotate-3 perspective-3d"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group-3d relative transform-gpu transition-all duration-300 hover:translate-z-8 perspective-3d">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 transform transition-all duration-300 group-hover:translate-y-[-2px]">Your Name</label>
                  <div className="relative perspective-card">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-enchanted-pink/30 focus:border-enchanted-pink focus:ring-2 focus:ring-enchanted-pink/20 transition-all shadow-sm transform hover:translate-z-5"
                      required
                    />
                    <div className="tea-input-effect absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-enchanted-pink to-enchanted-purple transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
                  </div>
                </div>
                
                <div className="form-group-3d relative transform-gpu transition-all duration-300 hover:translate-z-8 perspective-3d">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 transform transition-all duration-300 group-hover:translate-y-[-2px]">Your Email</label>
                  <div className="relative perspective-card">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-enchanted-pink/30 focus:border-enchanted-pink focus:ring-2 focus:ring-enchanted-pink/20 transition-all shadow-sm transform hover:translate-z-5"
                      required
                    />
                    <div className="tea-input-effect absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-enchanted-pink to-enchanted-purple transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
                  </div>
                </div>
                
                <div className="form-group-3d relative transform-gpu transition-all duration-300 hover:translate-z-8 perspective-3d">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 transform transition-all duration-300 group-hover:translate-y-[-2px]">Your Message</label>
                  <div className="relative perspective-card">
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-enchanted-pink/30 focus:border-enchanted-pink focus:ring-2 focus:ring-enchanted-pink/20 transition-all shadow-sm transform hover:translate-z-5"
                      required
                    ></textarea>
                    <div className="tea-input-effect absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-enchanted-pink to-enchanted-purple transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></div>
                  </div>
                </div>
                
                <div className="tea-button-3d-container perspective-3d transform transition-all duration-300 hover:rotate-y-5">
                  <Button 
                    type="submit" 
                    className="w-full py-6 rounded-lg bg-gradient-to-r from-enchanted-pink to-enchanted-purple hover:from-enchanted-purple hover:to-enchanted-pink text-white font-medium transform transition-all duration-500 hover:translate-z-8 hover:scale-[1.05] relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                    <div className="tea-pour absolute top-0 left-1/2 -translate-x-1/2 w-1 h-0 bg-white/30 group-hover:h-full transition-all duration-700"></div>
                    <div className="tea-splash absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 opacity-0 group-hover:w-full group-hover:h-12 group-hover:opacity-100 transition-all duration-500 delay-300 rounded-full bg-white/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-enchanted-purple/0 via-enchanted-purple/20 to-enchanted-purple/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-0"></div>
                  </Button>
                </div>
              </form>
            </GlassmorphicCard>
            
            <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
              <div className="tea-leaves-floating">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`absolute tea-leaf-float-${i + 1}`} style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`
                  }}>
                    <TeaLeaf className="w-8 h-8 opacity-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 pointer-events-none">
        <Butterfly
          color="purple"
          size="md"
          position={{ x: 90, y: 90 }}
        />
      </div>
    </section>
  );
};

export default ContactSection;
