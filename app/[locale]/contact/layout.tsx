import React from 'react';
import { Navbar } from '@/components/Navbar';

const ContactLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <Navbar  />
        {children}
  
    </div>
  );
};

export default ContactLayout;
