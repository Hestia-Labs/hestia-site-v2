'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
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
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    

    if (href.startsWith('/') && href !== '/' && href !== '') {
      e.preventDefault();
      
      startTransition();

      setTimeout(() => {
        window.location.href = href;
      }, 1000); 
    }

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