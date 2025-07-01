"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ServiceHeroProps {
  title: string;
  heading: string;
  description: string;
  serviceId: string;
}

// Abstract SVG patterns for each service type
const ServiceSvgPattern = ({ serviceId }: { serviceId: string }) => {
  // Software Development pattern - code-like geometric pattern
  if (serviceId === 'software-development') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/20"
        >
          {/* Grid lines */}
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            x1="40" y1="20" x2="40" y2="180" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            x1="100" y1="20" x2="100" y2="180" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            x1="160" y1="20" x2="160" y2="180" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            x1="20" y1="40" x2="180" y2="40" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            x1="20" y1="100" x2="180" y2="100" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            x1="20" y1="160" x2="180" y2="160" 
          />
          
          {/* Code blocks */}
          <motion.rect 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            x="50" y="50" width="40" height="40" 
            className="text-primary/10" fill="currentColor"
          />
          <motion.rect 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            x="110" y="110" width="40" height="40" 
            className="text-primary/10" fill="currentColor"
          />
          <motion.rect 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            x="50" y="110" width="40" height="40" 
            className="text-primary/10" fill="currentColor"
          />
        </motion.g>
      </svg>
    );
  }
  
  // Digital Marketing pattern - network nodes
  if (serviceId === 'brand-creation') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary/20"
      >
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          cx="100" cy="100" r="70" 
        />
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          cx="100" cy="100" r="50" 
        />
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          cx="100" cy="100" r="30" 
        />
      </motion.g>
    </svg>
    );
  }
  
  // UX Design pattern - flowing circles and curved lines
  if (serviceId === 'ux-ui-design') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/20"
        >
          {/* Curved flow paths */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            d="M40,100 C40,60 80,60 100,40 C120,60 160,60 160,100 C160,140 120,140 100,160 C80,140 40,140 40,100"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            d="M60,100 C60,75 80,75 100,60 C120,75 140,75 140,100 C140,125 120,125 100,140 C80,125 60,125 60,100"
          />
          
          {/* Circles representing touchpoints */}
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            cx="100" cy="40" r="6" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            cx="160" cy="100" r="6" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            cx="100" cy="160" r="6" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            cx="40" cy="100" r="6" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            cx="100" cy="100" r="10" 
            className="text-primary/30" fill="currentColor"
          />
        </motion.g>
      </svg>
    );
  }
  
  // Default pattern with basic geometric shapes
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary/20"
        >
          {/* Connection lines */}
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            x1="60" y1="60" x2="140" y2="60" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            x1="140" y1="60" x2="140" y2="140" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            x1="140" y1="140" x2="60" y2="140" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            x1="60" y1="140" x2="60" y2="60" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            x1="60" y1="60" x2="140" y2="140" 
          />
          <motion.line 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            x1="60" y1="140" x2="140" y2="60" 
          />
          
          {/* Node circles */}
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            cx="60" cy="60" r="8" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            cx="140" cy="60" r="8" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            cx="140" cy="140" r="8" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            cx="60" cy="140" r="8" 
            className="text-primary/20" fill="currentColor"
          />
          <motion.circle 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            cx="100" cy="100" r="12" 
            className="text-primary/30" fill="currentColor"
          />
        </motion.g>
      </svg>
  );
};

export default function ServiceHero({ title, heading, description, serviceId }: ServiceHeroProps) {
  const commonT = useTranslations("Common");

  return (
    <section className="relative py-36 px-4 md:px-8 bg-background overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-avenirNext text-sm md:text-base text-primary uppercase tracking-widest mb-4">
              {title}
            </span>
            
            <h1 className="font-bellefair text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-tight tracking-wider text-foreground">
              {heading}
            </h1>
            
            <div className="max-w-lg">
              <p className="font-avenirNext text-lg md:text-xl text-foreground/80">
                {description}
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <a 
                href="#contact" 
                className="inline-block border border-primary text-primary font-bellefair uppercase tracking-wider py-3 px-8 transition-colors duration-300 hover:bg-primary hover:text-white rounded-sm"
              >
                {commonT("discussYourProject")}
              </a>
            </motion.div>
          </motion.div>
          
          {/* SVG Graphic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full min-h-[300px] relative flex justify-center items-center"
          >
            <div className="w-full max-w-md mx-auto">
              <ServiceSvgPattern serviceId={serviceId} />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground/5" />
    </section>
  );
} 