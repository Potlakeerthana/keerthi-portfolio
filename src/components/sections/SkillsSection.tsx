
import React from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import Butterfly from '@/components/Butterfly';
import { Code, Database, FileText, Sparkles } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-enchanted-pink-light/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-enchanted-purple/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-enchanted-purple-dark flex items-center justify-center">
              <Code className="w-4 h-4 mr-1" />
              Skills
            </span>
          </div>
          
          <AnimatedHeading 
            level={2}
            glowColor="purple"
            className="mb-4"
          >
            My Expertise
          </AnimatedHeading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <GlassmorphicCard
            glowColor="purple"
            className="h-full"
          >
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-enchanted-purple" />
              Programming
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-enchanted-purple/10 text-enchanted-purple">Python</span>
              <span className="px-4 py-2 rounded-full bg-enchanted-purple/10 text-enchanted-purple">Java (Basics)</span>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard
            glowColor="pink"
            className="h-full"
          >
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-enchanted-pink" />
              Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-enchanted-pink/10 text-enchanted-pink">SQL</span>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard
            glowColor="gold"
            className="h-full"
          >
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-amber-500" />
              Data Visualization
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-600">Power BI</span>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard
            glowColor="green"
            className="h-full"
          >
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-enchanted-green" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-enchanted-green/10 text-enchanted-green">HTML</span>
              <span className="px-4 py-2 rounded-full bg-enchanted-green/10 text-enchanted-green">CSS</span>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard
            glowColor="pink"
            className="h-full md:col-span-2"
          >
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-enchanted-pink" />
              Interpersonal Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-enchanted-pink/10 text-enchanted-pink">Quick Learner</span>
              <span className="px-4 py-2 rounded-full bg-enchanted-pink/10 text-enchanted-pink">Leadership</span>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
      <div className="absolute right-5 bottom-10">
        <Butterfly
          color="purple"
          size="md"
          position={{ x: 90, y: 80 }}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
