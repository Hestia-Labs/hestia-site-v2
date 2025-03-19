'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTransition } from './hooks/useTransition';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionLink({ 
  href, 
  children, 
  className,
  onClick
}: TransitionLinkProps) {
  const { startTransition } = useTransition();
  const pathname = usePathname();

  // Don't use transition when navigating to the home/landing page
  const isHomePage = href === '/' || href === '';
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    // Only use transition for internal links that aren't the home page
    if (href.startsWith('/')) {
      e.preventDefault();
      
      // Start transition animation
      startTransition();
      
      // Navigate after a fixed delay - enough time for the animation to be visible
      // but not waiting for complex callback chains
      setTimeout(() => {
        window.location.href = href;
      }, 1000); // Adjust timing based on your animation duration
    }
    // For external links or home page, normal navigation will happen
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </Link>
  );
} 