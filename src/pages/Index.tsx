<lov-code>
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
      <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center px-6">
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
      
      {/* Introduction Section */}
      <section className="relative min-h-screen py-20 px-6 glass">
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
                Summary
              </AnimatedHeading>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                To obtain a challenging and responsible position in a dynamic company. Utilizing my professional qualifications for the progress and the success of the organization and to update myself with the latest technologies, thus progressing in my career.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Currently pursuing Bachelor of Technology in Computer Science and Engineering (Data Science) at Sri Venkateswara College of Engineering and Technology with a CGPA of 8.7.
              </p>
              
              <Link to="/contact">
                <Button className="rounded-full bg-gradient-to-r from-enchanted-pink to-enchanted-purple hover:from-enchanted-purple hover:to-enchanted-pink text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <GlassmorphicCard 
                glowColor="pink"
                animated
                className="p-0 overflow-hidden aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-dawn opacity-20" />
                <div className="relative z-10 p-8 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-enchanted-pink-light to-enchanted-pink mb-4 shadow-glow-pink">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">PK</div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">Potla Keerthana</h3>
                  <p className="text-gray-700 italic">"Creating magic at the intersection of data science and code"</p>
                </div>
              </GlassmorphicCard>
              
              <FloatingElement delay={2} speed="slow" className="absolute -bottom-8 -right-8 z-20">
                <GlassmorphicCard 
                  glowColor="purple"
                  className="py-2 px-4"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-enchanted-purple mr-2 animate-pulse" />
                    <span className="text-sm">Data Scientist</span>
                  </div>
                </GlassmorphicCard>
              </FloatingElement>
              
              <FloatingElement delay={1} className="absolute -top-8 -left-8 z-20">
                <GlassmorphicCard 
                  glowColor="green"
                  className="py-2 px-4"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-enchanted-green mr-2 animate-pulse" />
                    <span className="text-sm">Web Developer</span>
                  </div>
                </GlassmorphicCard>
              </FloatingElement>
            </div>
          </div>
        </div>
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
            className="mb-12"
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
              <h3 className="text-xl font-display font-bold mb-4">
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
          <Butterfly color="pink" position={{ x: 65, y: 40 }} size="md" />
          <Butterfly color="green" position={{ x: 45, y: 85 }} size="sm" />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-enchanted-purple/20 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-enchanted-purple-dark flex items-center justify-center">
                <Mail className="w-4 h-4 mr-1" />
                Get in Touch
              </span>
            </div>
            
            <AnimatedHeading 
              level={2}
              glowColor="purple"
              className="mb-4"
            >
              Contact Me
            </AnimatedHeading>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <GlassmorphicCard
                glowColor="purple"
                className="h-full"
              >
                <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items
