
import { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'py-3 glass shadow-lg' : 'py-5 bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-dawn">
          Enchanted<span className="text-enchanted-lavender">Portfolio</span>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/skills" label="Skills" />
          <NavLink to="/garden" label="Secret Garden" />
          <NavLink to="/contact" label="Contact" />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden glass-dark absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          <NavLink to="/" label="Home" className="py-2" />
          <NavLink to="/projects" label="Projects" className="py-2" />
          <NavLink to="/skills" label="Skills" className="py-2" />
          <NavLink to="/garden" label="Secret Garden" className="py-2" />
          <NavLink to="/contact" label="Contact" className="py-2" />
        </div>
      </div>
    </nav>
  );
}
