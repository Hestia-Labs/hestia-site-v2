import React from 'react';
import { Navbar } from '@/components/Navbar';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <Navbar invert/>
        {children}
  
    </div>
  );
};

export default BlogLayout;
