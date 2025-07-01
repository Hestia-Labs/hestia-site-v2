import React from 'react';
import { Navbar } from '@/components/Navbar';

const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <Navbar invert/>
        {children}
    </div>
  );
};

export default AboutLayout;
