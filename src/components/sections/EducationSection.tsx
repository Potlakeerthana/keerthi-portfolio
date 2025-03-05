
import React from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-enchanted-green/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-enchanted-green-dark flex items-center justify-center">
              <GraduationCap className="w-4 h-4 mr-1" />
              Education
            </span>
          </div>
          
          <AnimatedHeading 
            level={2}
            glowColor="green"
            className="mb-4"
          >
            Academic Journey
          </AnimatedHeading>
        </div>
        
        <GlassmorphicCard
          glowColor="green"
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-2">Bachelor of Technology</h3>
              <p className="text-lg text-enchanted-green mb-1">Computer Science and Engineering (Data Science)</p>
              <p className="text-gray-600 mb-4">Sri Venkateswara College of Engineering and Technology</p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-enchanted-green/10 text-enchanted-green text-sm">2021-25</span>
                <span className="px-3 py-1 rounded-full bg-enchanted-green/10 text-enchanted-green text-sm">CGPA: 8.7</span>
              </div>
            </div>
          </div>
        </GlassmorphicCard>
        
        <GlassmorphicCard
          glowColor="purple"
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-2">Intermediate Education</h3>
              <p className="text-lg text-enchanted-purple mb-1">S.L.N Junior College for Girls</p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-enchanted-purple/10 text-enchanted-purple text-sm">2019-21</span>
                <span className="px-3 py-1 rounded-full bg-enchanted-purple/10 text-enchanted-purple text-sm">92.8%</span>
              </div>
            </div>
          </div>
        </GlassmorphicCard>
        
        <GlassmorphicCard
          glowColor="pink"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold mb-2">10th Grade</h3>
              <p className="text-lg text-enchanted-pink mb-1">A.P Model School</p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-enchanted-pink/10 text-enchanted-pink text-sm">2018-19</span>
                <span className="px-3 py-1 rounded-full bg-enchanted-pink/10 text-enchanted-pink text-sm">CGPA: 9.3</span>
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </section>
  );
};

export default EducationSection;
