
import React from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-enchanted-pink-light/20 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-enchanted-gold/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-amber-700 flex items-center justify-center">
              <Award className="w-4 h-4 mr-1" />
              Certifications
            </span>
          </div>
          
          <AnimatedHeading 
            level={2}
            glowColor="gold"
            className="mb-4"
          >
            My Achievements
          </AnimatedHeading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassmorphicCard glowColor="gold" className="backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:translate-z-5 perspective-3d">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">Smart India Hackathon 2023</h3>
              </div>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard glowColor="gold" className="backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:translate-z-5 perspective-3d">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">UI/UX Web Development</h3>
                <p className="text-sm text-gray-600">LARSEN AND TOUBRO</p>
              </div>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard glowColor="gold" className="backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:translate-z-5 perspective-3d">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">SQL Certification</h3>
              </div>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard glowColor="gold" className="backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:translate-z-5 perspective-3d">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">AWS Cloud Practitioner Essentials</h3>
                <p className="text-sm text-gray-600">Provided by EDX</p>
              </div>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard glowColor="gold" className="backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:translate-z-5 perspective-3d">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">HTML Certification</h3>
                <p className="text-sm text-gray-600">Great Learning</p>
              </div>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard glowColor="gold" className="backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:translate-z-5 perspective-3d">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">Data Analysis With Python</h3>
                <p className="text-sm text-gray-600">IBM</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
