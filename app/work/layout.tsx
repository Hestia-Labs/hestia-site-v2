import React from 'react';
import { Navbar } from '@/components/Navbar';

const WorkLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <Navbar />
        {children}
  
    </div>
  );
};

export default WorkLayout;
