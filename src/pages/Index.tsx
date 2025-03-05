
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import MagicCursor from '@/components/MagicCursor';
import FallingPetals from '@/components/FallingPetals';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

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
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Education Section */}
      <EducationSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
