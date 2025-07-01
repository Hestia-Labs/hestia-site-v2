"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { CaseStudy } from '@/types/caseStudy';

interface WorkHeroMinimalProps {
  caseStudy: CaseStudy;
}

// Abstract SVG pattern for different project types
const ProjectPatternSvg = ({ category }: { category: string }) => {
  // Pattern for Technology projects
  if (category === 'Technology') {
    return (
      <svg viewBox="0 0 300 150" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-primary/50"
        >
          {/* Grid dots */}
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 5 }).map((_, j) => (
              <motion.circle
                key={`${i}-${j}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * (i + j) }}
                cx={37.5 + i * 30}
                cy={30 + j * 22.5}
                r="1.5"
              />
            ))
          )}
          
          {/* Abstract lines */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            d="M30,30 L270,30"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            d="M30,75 L270,75"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M30,120 L270,120"
          />
        </motion.g>
      </svg>
    );
  }
  
  // Pattern for Art & Design projects
  if (category === 'Art & Design') {
    return (
      <svg viewBox="0 0 300 150" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-primary/50"
        >
          {/* Flowing curves */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            d="M45,75 C90,30 135,120 180,60 C225,0 270,90 285,45"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
            d="M15,105 C60,60 105,150 150,90 C195,30 240,120 255,75"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            d="M30,135 C75,90 120,180 165,120 C210,60 255,150 270,105"
          />
        </motion.g>
      </svg>
    );
  }
  
  // Pattern for Finance projects
  if (category === 'Finance') {
    return (
      <svg viewBox="0 0 300 150" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-primary/50"
        >
          {/* Graph-like elements */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            d="M30,120 L60,90 L90,105 L120,45 L150,75 L180,30 L210,60 L240,15 L270,45"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            d="M30,90 L60,105 L90,75 L120,90 L150,60 L180,75 L210,45 L240,75 L270,60"
            strokeDasharray="3,3"
          />
          
          {/* Horizontal axis */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            d="M30,135 L270,135"
          />
        </motion.g>
      </svg>
    );
  }
  
  // Pattern for Fashion projects
  if (category === 'Fashion') {
    return (
      <svg viewBox="0 0 300 150" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-primary/50"
        >
          {/* Elegant geometric elements */}
          <motion.rect
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            x="75" y="30" width="150" height="90"
          />
          <motion.rect
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            x="90" y="45" width="120" height="60"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            d="M45,75 L75,30 L225,30 L255,75 L225,120 L75,120 L45,75"
            strokeDasharray="6,3"
          />
        </motion.g>
      </svg>
    );
  }
  
  // Default pattern for Environment or any other category
  return (
    <svg viewBox="0 0 300 150" className="w-full h-full">
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="text-primary/50"
      >
        {/* Abstract organic shapes */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          d="M30,75 C60,30 90,120 150,45 C210,120 240,30 270,75"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          d="M30,105 C75,60 120,135 165,75 C210,15 255,90 270,45"
          strokeDasharray="4,4"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          cx="150" cy="75" r="45"
        />
      </motion.g>
    </svg>
  );
};

export default function WorkHeroMinimal({ caseStudy }: WorkHeroMinimalProps) {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-background overflow-hidden mt-20">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none ">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
          <defs>
            <pattern id="minimal-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#minimal-grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Content - takes up more space on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <span className="inline-block font-avenirNext text-sm md:text-base text-primary uppercase tracking-widest mb-6">
              {caseStudy.category} / {caseStudy.type}
            </span>
            
            <h1 className="font-bellefair text-5xl md:text-7xl uppercase mb-8 leading-tight tracking-wider text-foreground">
              {caseStudy.name}
            </h1>
            
            <div className="max-w-2xl">
              <p className="font-avenirNext text-lg md:text-xl text-foreground/80 mb-8">
                {caseStudy.tagline}
              </p>
              <p className="font-avenirNext text-foreground/70">
                {caseStudy.client} • {caseStudy.year}
              </p>
            </div>
          </motion.div>
          
          {/* Abstract SVG Pattern - smaller on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4 relative flex justify-center items-center"
          >
            <div className="w-full max-w-4xl mx-auto">
              <ProjectPatternSvg category={caseStudy.category} />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl mt-20">
        <Separator className="w-full h-[1px] bg-foreground/10" />
      </div>
    </section>
  );
} 