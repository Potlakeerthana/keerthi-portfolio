
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
import { TeaCup, TeaLeaf, TeaBackground, TeaPot, TeaSaucer, TeaCupWithSaucer } from '@/components/TeaElements';
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
      
      {/* Contact Section */}
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
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-enchanted-purple/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2024 Potla Keerthana. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Potlakeerthana/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-enchanted-purple transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-enchanted-purple transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
