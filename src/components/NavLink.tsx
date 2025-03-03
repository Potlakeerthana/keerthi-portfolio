
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export default function NavLink({ to, label, className }: NavLinkProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      to={to}
      className={cn(
        'relative font-medium tracking-wide text-lg transition-all duration-300',
        'hover:text-glow-pink',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={cn(
          'absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-enchanted-pink to-enchanted-purple w-0 transition-all duration-300',
          isHovering ? 'w-full' : 'w-0'
        )}
      />
    </Link>
  );
}
