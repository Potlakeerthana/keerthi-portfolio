
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export default function NavLink({ to, label, className }: NavLinkProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle scrolling for hash links
    if (to.startsWith('#')) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for the navbar
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <a
      href={to}
      className={cn(
        'relative font-medium tracking-wide text-lg transition-all duration-300',
        'hover:text-glow-pink cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={cn(
          'absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-enchanted-pink to-enchanted-purple w-0 transition-all duration-300',
          isHovering ? 'w-full' : 'w-0'
        )}
      />
    </a>
  );
}
