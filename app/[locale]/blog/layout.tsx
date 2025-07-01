'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isSingleBlogPost = pathname?.includes('/blog/') && pathname !== '/blog';
  
  return (
    <div>
        <Navbar invert={!isSingleBlogPost} />
        {children}
    </div>
  );
};

export default BlogLayout;
