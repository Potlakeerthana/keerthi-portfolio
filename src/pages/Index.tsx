
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
import Butterfly from '@/components/Butterfly';
import { TeaCup, TeaLeaf, TeaBackground } from '@/components/TeaElements';
import { ArrowDown, ArrowRight, Sparkles, Mail, Phone, ExternalLink, FileText, Code, Database, Briefcase, Award, GraduationCap, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`mailto:keerthichowdary8247@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message}%0A%0AFrom: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-enchanted-purple-light via-enchanted-pink-light to-white overflow-hidden">
      <MagicCursor />
      <FallingPetals />
      
      <NavBar />
      
      {/* Hero Section */}
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
      
      {/* Introduction Section - Tea Themed About */}
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
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Just like a perfectly brewed cup of tea, my work is a blend of creativity, passion, and attention to detail. I carefully select each ingredient in my projects, steeping them in innovation until they reach their full potential.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Computer Science and Engineering (Data Science) at Sri Venkateswara College of Engineering and Technology with a CGPA of 8.7, brewing excellence with each semester.
                </p>
                
                <div className="mb-6 space-y-3 perspective-3d">
                  <h3 className="text-lg font-semibold text-enchanted-purple transform hover:translate-z-10 transition-transform">Tech Tea Pairings:</h3>
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
                
                <a href="#contact">
                  <Button className="rounded-full bg-gradient-to-r from-enchanted-pink to-enchanted-purple hover:from-enchanted-purple hover:to-enchanted-pink text-white group relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow-pink">
                    <span className="relative z-10 flex items-center gap-2">
                      <TeaCup size="xs" color="purple" className="opacity-90" />
                      Brew a Conversation
                      <span className="tea-steam-mini"></span>
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Button>
                </a>
                
                <div className="absolute -left-20 bottom-20 opacity-30 transform rotate-45 pointer-events-none">
                  <TeaLeaf className="w-32 h-32 animate-float-slow" />
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <GlassmorphicCard 
                  glowColor="pink"
                  animated
                  className="p-0 overflow-hidden aspect-square flex items-center justify-center transform perspective-card"
                >
                  <div className="absolute inset-0 bg-gradient-dawn opacity-20" />
                  <div className="relative z-10 p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-glow-pink border-4 border-white/30 photo-container transform hover:rotate-y-12 transition-all duration-500">
                      <img 
                        src="/lovable-uploads/141cefa9-5c19-4b4f-8c1f-935a87cfdf34.png" 
                        alt="Potla Keerthana" 
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 transform transition-all duration-300 hover:translate-y-[-5px]">Potla Keerthana</h3>
                    <p className="text-gray-700 italic">"Creating magic at the intersection of data science and code"</p>
                  </div>
                  <div className="photo-overlay"></div>
                </GlassmorphicCard>
                
                <FloatingElement delay={2} speed="slow" className="absolute -bottom-8 -right-8 z-20">
                  <GlassmorphicCard 
                    glowColor="purple"
                    className="py-2 px-4 transform transition-all duration-300 hover:scale-105 hover:rotate-2"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-enchanted-purple mr-2 animate-pulse" />
                      <span className="text-sm">Web Developer</span>
                    </div>
                  </GlassmorphicCard>
                </FloatingElement>
                
                <div className="absolute top-[-10%] left-[10%] w-full h-full pointer-events-none">
                  <div className="tea-particle-container">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`tea-particle tea-particle-${i + 1}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TeaBackground>
      </section>
      
      {/* Education Section */}
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
      
      {/* Skills Section */}
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
      
      {/* Projects Section */}
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
      
      {/* Certifications Section */}
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
            <GlassmorphicCard glowColor="gold" className="backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Smart India Hackathon 2023</h3>
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard glowColor="gold" className="backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">UI/UX Web Development</h3>
                  <p className="text-sm text-gray-600">LARSEN AND TOUBRO</p>
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard glowColor="gold" className="backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">SQL Certification</h3>
                  <p className="text-sm text-gray-600">SimpliLearn</p>
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard glowColor="gold" className="backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">AWS Cloud Practitioner Essentials</h3>
                  <p className="text-sm text-gray-600">EDX</p>
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard glowColor="gold" className="backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">HTML Certification</h3>
                  <p className="text-sm text-gray-600">Great Learning</p>
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard glowColor="gold" className="backdrop-blur-md">
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
      
      {/* Internships Section */}
      <section className="py-20 px-6 bg-white relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-enchanted-purple/20 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-enchanted-purple-dark flex items-center justify-center">
                <Briefcase className="w-4 h-4 mr-1" />
                Experience
              </span>
            </div>
            
            <AnimatedHeading 
              level={2}
              glowColor="purple"
              className="mb-4"
            >
              Internships
            </AnimatedHeading>
          </div>
          
          <div className="space-y-8">
            <GlassmorphicCard glowColor="purple">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold mb-2">Data Science and Machine Learning</h3>
                  <p className="text-lg text-enchanted-purple mb-1">UPSKILL CAMPUS</p>
                  <p className="text-gray-600 mb-4">July 15 - August 30, 2023 | Online</p>
                  <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                    <li>In-depth understanding of Data Collection, Data Cleaning, Data analysis, Feature Engineering, Model Selection, Model Evaluation, Model Deployment and Model Maintenance.</li>
                    <li>In Data Science we used programming languages like Python, SQL and tools like Excel.</li>
                    <li>Machine learning is a branch of artificial intelligence (AI) where computers learn to act and adapt to new data without being programmed to do so. The computer is able to act independently of human interaction.</li>
                  </ul>
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard glowColor="pink">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold mb-2">Full Stack Web Development</h3>
                  <p className="text-lg text-enchanted-pink mb-1">APSCHE-SLASH MARK</p>
                  <p className="text-gray-600 mb-4">May 13 - July 06, 2023 | Online</p>
                  <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                    <li>Web Development is mostly about developing websites for the internet. But it's not just developing websites, it is also about designing them and curating them with your creativity.</li>
                    <li>Learned basics of both frontend, backend and database.</li>
                  </ul>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
        
        <div className="absolute left-10 bottom-20">
          <Butterfly
            color="pink"
            size="sm"
            position={{ x: 10, y: 90 }}
          />
        </div>
      </section>
      
      {/* Secret Garden Section */}
      <section id="garden" className="py-20 px-6 bg-gradient-to-b from-white to-enchanted-green-light/30 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-enchanted-green/20 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-enchanted-green-dark flex items-center justify-center">
                <Sparkles className="w-4 h-4 mr-1" />
                Secret Garden
              </span>
            </div>
            
            <AnimatedHeading 
              level={2}
              glowColor="green"
              className="mb-4"
            >
              A Magical Retreat
            </AnimatedHeading>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Welcome to my secret garden, a place of creativity and inspiration. Here I share thoughts, inspirations, and the little things that bring magic to my life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphicCard
              glowColor="green"
              animated
              className="h-full"
            >
              <h3 className="text-xl font-display font-bold mb-4">Inspiration Corner</h3>
              <p className="text-gray-700 mb-4">
                "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
              </p>
              <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-gradient-forest opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-enchanted-green" />
                </div>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard
              glowColor="pink"
              animated
              className="h-full"
            >
              <h3 className="text-xl font-display font-bold mb-4">Creative Musings</h3>
              <p className="text-gray-700 mb-4">
                Creativity is the greatest rebellion in existence. It's about finding your own path and expressing yourself in unique ways.
              </p>
              <div className="relative h-40 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-dream opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FloatingElement speed="slow">
                    <Butterfly color="pink" position={{ x: 50, y: 50 }} size="md" />
                  </FloatingElement>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="absolute inset-0 pointer-events-none">
          <Butterfly color="green" position={{ x: 10, y: 30 }} size="lg" />
          <Butterfly color="gold" position={{ x: 80, y: 60 }} size="md" />
          <Butterfly color="purple" position={{ x: 30, y: 70 }} size="sm" />
          <Butterfly color="pink" position={{ x: 60, y: 20 }} size="md" />
        </div>
      </section>
      
      {/* Contact Section - Tea Parlor */}
      <section id="contact" className="relative py-20 px-6 bg-white overflow-hidden">
        <TeaBackground density="medium" animate={true}>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-enchanted-pink/20 backdrop-blur-sm mb-4">
                <span className="text-sm font-medium text-enchanted-pink-dark flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact
                </span>
              </div>
              
              <AnimatedHeading 
                level={2}
                glowColor="pink"
                className="mb-4"
              >
                <span className="relative">
                  The Tea Parlor
                  <FloatingElement className="absolute -top-10 -right-10 opacity-80 transform-gpu animate-float">
                    <div className="teacup-3d transform-gpu transition-transform duration-500 hover:rotate-y-30 hover:rotate-z-15">
                      <TeaCup size="sm" color="pink" className="relative z-10 tea-cup-gloss" />
                      <div className="teacup-saucer"></div>
                      <div className="teacup-reflection"></div>
                    </div>
                  </FloatingElement>
                </span>
              </AnimatedHeading>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Ready to steep a conversation? Pour your thoughts below and let's create a perfect blend of ideas.
              </p>
            </div>
            
            <GlassmorphicCard
              glowColor="purple"
              className="relative overflow-hidden tea-parlor-card transform perspective-1000"
            >
              <div className="tea-leaves-bg animate-float-slow"></div>
              <div className="tea-swirl-effect"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-6 bg-gradient-to-br from-enchanted-purple/20 via-enchanted-pink/20 to-enchanted-purple/10 relative transform transition-all duration-500 hover:translate-x-2">
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center transform transition-transform hover:translate-y-[-3px]">
                    <TeaCup size="sm" color="purple" className="mr-3 tea-cup-rotate" />
                    Tea Time Hours
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="transform transition-all duration-300 hover:translate-x-2 hover:translate-y-[-2px]">
                      <h4 className="text-sm font-semibold uppercase text-enchanted-purple mb-2">Email</h4>
                      <a href="mailto:keerthichowdary8247@gmail.com" className="text-gray-700 hover:text-enchanted-purple transition-colors">
                        keerthichowdary8247@gmail.com
                      </a>
                    </div>
                    
                    <div className="transform transition-all duration-300 hover:translate-x-2 hover:translate-y-[-2px]">
                      <h4 className="text-sm font-semibold uppercase text-enchanted-purple mb-2">Phone</h4>
                      <a href="tel:+918247223038" className="text-gray-700 hover:text-enchanted-purple transition-colors">
                        +91-8247223038
                      </a>
                    </div>
                    
                    <div className="transform transition-all duration-300 hover:translate-x-2 hover:translate-y-[-2px]">
                      <h4 className="text-sm font-semibold uppercase text-enchanted-purple mb-2">Find Me On</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://github.com/Potlakeerthana/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-enchanted-purple transition-colors">
                          GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-enchanted-purple transition-colors">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6">
                    <FloatingElement speed="slow" delay={2} type="tealeaf">
                      <TeaLeaf className="w-12 h-12 opacity-50 tea-leaf-gloss" />
                    </FloatingElement>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6 relative">
                  <div className="tea-form-container transform transition-all duration-500 hover:translate-y-[-5px]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="tea-form-field group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 transform transition-transform group-hover:translate-y-[-2px]">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enchanted-pink focus:border-transparent transition-all duration-300"
                          placeholder="Enter your name"
                          required
                        />
                        <div className="tea-field-drip"></div>
                        <div className="tea-field-ripple"></div>
                      </div>
                      
                      <div className="tea-form-field group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 transform transition-transform group-hover:translate-y-[-2px]">
                          <span className="flex items-center gap-1">
                            <TeaCup size="xs" color="pink" className="opacity-70" />
                            Steep Your Email
                          </span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enchanted-pink focus:border-transparent transition-all duration-300"
                          placeholder="Where can I send my response?"
                          required
                        />
                        <div className="tea-field-drip"></div>
                        <div className="tea-field-ripple"></div>
                      </div>
                      
                      <div className="tea-form-field group">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 transform transition-transform group-hover:translate-y-[-2px]">
                          <span className="flex items-center gap-1">
                            <TeaLeaf className="w-4 h-4 opacity-70 rotate-45" />
                            Brew Your Message
                          </span>
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enchanted-pink focus:border-transparent transition-all duration-300"
                          placeholder="Pour your thoughts here..."
                          required
                        />
                        <div className="tea-field-drip tea-field-drip-large"></div>
                        <div className="tea-field-ripple tea-field-ripple-large"></div>
                      </div>
                      
                      <Button type="submit" className="tea-submit-button w-full relative overflow-hidden bg-gradient-to-r from-enchanted-purple to-enchanted-pink hover:from-enchanted-pink hover:to-enchanted-pink text-white rounded-md py-2 group transform transition-all duration-300 hover:scale-105 hover:shadow-glow-pink">
                        <span className="relative z-10 flex items-center justify-center">
                          <TeaCup size="sm" color="purple" steamAnimation={false} className="mr-2 opacity-80 tea-cup-tilt" />
                          Serve My Message
                          <span className="tea-submit-splash"></span>
                        </span>
                        <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-all duration-500 origin-bottom rounded-full"></span>
                        <div className="tea-submit-pour"></div>
                      </Button>
                    </form>
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 opacity-30 pointer-events-none">
                    <TeaLeaf className="w-28 h-28 animate-float rotate-180" />
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </TeaBackground>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-enchanted-purple/5 border-t border-enchanted-purple/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Potla Keerthana. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Brewed with 💜 and magic.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
