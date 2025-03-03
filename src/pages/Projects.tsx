
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import AnimatedHeading from '@/components/AnimatedHeading';
import GlassmorphicCard from '@/components/GlassmorphicCard';
import Crystal from '@/components/Crystal';
import WireframeTree from '@/components/WireframeTree';
import Firefly from '@/components/Firefly';
import MagicCursor from '@/components/MagicCursor';
import { ArrowRight, Sparkles } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'Ethereal E-commerce',
      description: 'A dreamy online shopping experience with animations and organic UI elements.',
      tags: ['UI/UX', 'React', 'Animation'],
      color: 'pink'
    },
    {
      id: 2,
      title: 'Forest Dashboard',
      description: 'Admin interface with nature-inspired data visualizations and biomorphic elements.',
      tags: ['Dashboard', 'Analytics', 'React'],
      color: 'green'
    },
    {
      id: 3,
      title: 'Crystal Portfolio',
      description: 'A personal showcase website with prismatic effects and interactive elements.',
      tags: ['Portfolio', 'Three.js', 'WebGL'],
      color: 'purple'
    },
    {
      id: 4,
      title: 'Enchanted Blog',
      description: 'Content-focused platform with magical transitions and thoughtful typography.',
      tags: ['CMS', 'Gatsby', 'Animations'],
      color: 'gold'
    }
  ];
  
  const crystalPositions = [
    { x: 20, y: 15 },
    { x: 75, y: 25 },
    { x: 30, y: 60 },
    { x: 70, y: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-enchanted-green-light via-white to-enchanted-purple-light overflow-hidden">
      <MagicCursor />
      <NavBar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-enchanted-green/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-enchanted-green-dark flex items-center">
              <Sparkles className="w-4 h-4 mr-1" />
              Featured Work
            </span>
          </div>
          
          <AnimatedHeading 
            glowColor="green"
            className="mb-4"
          >
            Magical Creations
          </AnimatedHeading>
          
          <p className="text-lg max-w-xl mx-auto text-gray-700">
            Explore my projects displayed as enchanted crystals on a digital wireframe tree
          </p>
        </div>
        
        <div className="relative">
          {/* Wireframe Tree */}
          <div className="absolute inset-0 z-0">
            <WireframeTree />
          </div>
          
          {/* Crystals representing projects */}
          <div className="relative z-10 min-h-[80vh]">
            {projects.map((project, index) => (
              <Crystal
                key={project.id}
                color={project.color as 'pink' | 'purple' | 'green' | 'gold'}
                size={selectedProject === project.id ? 'lg' : 'md'}
                position={crystalPositions[index]}
                className="absolute transform transition-all duration-500"
                onClick={() => setSelectedProject(project.id)}
              />
            ))}
            
            {/* Fireflies */}
            <Firefly count={20} targetSelector=".relative" />
          </div>
          
          {/* Project details */}
          {selectedProject && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <GlassmorphicCard
                glowColor={projects.find(p => p.id === selectedProject)?.color as 'pink' | 'purple' | 'green' | 'gold'}
                className="w-full max-w-md pointer-events-auto animate-scaleIn"
              >
                <button 
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                
                <h3 className="text-2xl font-display font-bold mb-3">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                
                <p className="text-gray-700 mb-4">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.find(p => p.id === selectedProject)?.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/50 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="group flex items-center text-sm font-medium text-enchanted-purple-dark hover:text-enchanted-purple transition-colors">
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </GlassmorphicCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
