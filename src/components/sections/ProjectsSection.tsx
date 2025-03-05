
import React from 'react';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import Butterfly from '@/components/Butterfly';
import { Code } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-enchanted-pink/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-enchanted-pink-dark flex items-center justify-center">
              <Code className="w-4 h-4 mr-1" />
              Projects
            </span>
          </div>
          
          <AnimatedHeading 
            level={2}
            glowColor="pink"
            className="mb-4"
          >
            Personal Projects
          </AnimatedHeading>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <GlassmorphicCard
            glowColor="purple"
            animated
          >
            <h3 className="text-2xl font-display font-bold mb-4">Prediction of Agriculture Crop Production</h3>
            <p className="text-gray-700 mb-4">
              Based on Analysis of past data, machine learning algorithms and statistical models we can predict the crop production.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>This helps to overcome the suicides of farmers happening due to losses in agriculture.</li>
              <li>By using python libraries we can identify the suitable crop based on the climatic situations for getting good yields.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-enchanted-purple/10 text-enchanted-purple text-sm">Python</span>
              <span className="px-3 py-1 rounded-full bg-enchanted-purple/10 text-enchanted-purple text-sm">Machine Learning</span>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard
            glowColor="green"
            animated
          >
            <h3 className="text-2xl font-display font-bold mb-4">Design a Portfolio Website</h3>
            <p className="text-gray-700 mb-4">
              Displaying our personal projects to attract clients and secure employment.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>It is a unique platform that allows showcase of our work and tells others about ourselves.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-enchanted-green/10 text-enchanted-green text-sm">HTML</span>
              <span className="px-3 py-1 rounded-full bg-enchanted-green/10 text-enchanted-green text-sm">CSS</span>
              <span className="px-3 py-1 rounded-full bg-enchanted-green/10 text-enchanted-green text-sm">JavaScript</span>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
      
      <div className="absolute left-5 top-32">
        <Butterfly
          color="pink"
          size="sm"
          position={{ x: 5, y: 20 }}
        />
      </div>
      
      <div className="absolute right-10 bottom-20">
        <Butterfly
          color="gold"
          size="md"
          position={{ x: 90, y: 90 }}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
