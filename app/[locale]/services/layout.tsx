import React from 'react';
import { Navbar } from '@/components/Navbar';

const ServicesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <Navbar  />
        {children}
  
    </div>
  );
};

export default ServicesLayout;
