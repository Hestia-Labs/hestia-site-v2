"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export function ProcessSection() {
  const t = useTranslations("ServicesPage");
  
  // Process step data
  const processSteps = t.raw("process.steps") as ProcessStep[];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Simplified background decorative element */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="font-bellefair text-4xl md:text-5xl uppercase mb-4">{t("process.title")}</h2>
          <p className="text-gray-600 font-avenirNext">{t("process.subtitle")}</p>
        </div>
        
        {/* Desktop version - simplified vertical timeline */}
        <div className="hidden lg:block relative">
          <div className="max-w-5xl mx-auto relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2">
              <motion.div 
                className="w-full h-full bg-primary origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>
            
            {/* Process steps */}
            <div className="relative py-8">
              {/* Then render the process step content */}
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.number}
                  className={`flex items-center mb-24 last:mb-0 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Content box */}
                  <div className={`relative w-[calc(50%-3rem)] ${index % 2 === 0 ? "pr-12" : "pl-12 text-right"}`}>
                    <motion.div 
                      className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm relative overflow-hidden"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {/* Subtle grid background in content box */}
                      <div className="absolute inset-0 opacity-15">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                          <defs>
                            <pattern id={`grid-content-${index}`} width="16" height="16" patternUnits="userSpaceOnUse">
                              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.75" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#grid-content-${index})`} />
                        </svg>
                      </div>
                      
                      <span className={`font-bellefair text-5xl text-primary/30 absolute top-4 opacity-30 leading-none select-none ${
                        index % 2 === 0 ? "left-4" : "right-4"
                      }`}>{step.number}</span>
                      <div className="relative mt-6">
                        <h3 className="font-bellefair text-xl uppercase mb-3 text-primary">{step.title}</h3>
                        <p className="font-avenirNext text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                    
                    {/* Connector to timeline */}
                    <div className={`absolute top-1/2 h-px w-8 bg-gray-300 -translate-y-1/2 ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    }`} />
                  </div>
                  
                  {/* Center circle marker - redesigned to be more reliable */}
                  <div className="absolute mt-7 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* Reliable non-animated circle */}
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center z-30 relative">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Continuous improvement indicator - moved further down */}
            
          </div>
          <motion.div 
              className="mt-5 flex flex-col items-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              {/* Grid background for continuous improvement */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-3">
                <div className="absolute inset-0 opacity-25 rounded-full overflow-hidden">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <defs>
                      <pattern id="grid-continuous" width="8" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.75" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-continuous)" />
                  </svg>
                </div>
                {/* Animated rotating dashed circle */}
                <div className="absolute w-16 h-16 rounded-full">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-primary animate-spin" style={{ animationDuration: '15s' }}>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeDasharray="10,5" 
                    />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/>
                    <path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"/>
                  </svg>
                </div>
              </div>
              <span className=" font-avenirNext text-gray-500">{t("continuousImprovement")}</span>
            </motion.div>
        </div>
        
        {/* Mobile version - simplified vertical flow */}
        <div className="lg:hidden max-w-md mx-auto">
          {/* Render the process steps content */}
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {/* Number marker - directly part of the layout */}
                <div className="w-12 h-12 rounded-full bg-white border border-primary/30 flex items-center justify-center relative z-10">
                  <span className="font-bellefair text-xl text-primary">{step.number}</span>
                </div>
                
                {/* Step title */}
                <h3 className="font-bellefair text-lg uppercase ml-4 text-primary">{step.title}</h3>
              </div>
              
              {/* Step content */}
              <div className="ml-6 pl-6 border-l border-gray-200">
                <div className="bg-white p-5 border border-gray-100 shadow-sm rounded-sm relative overflow-hidden">
                  {/* Subtle grid background in content box */}
                  <div className="absolute inset-0 opacity-15">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <defs>
                        <pattern id={`grid-mobile-${index}`} width="16" height="16" patternUnits="userSpaceOnUse">
                          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.75" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-mobile-${index})`} />
                    </svg>
                  </div>
                  <p className="font-avenirNext text-gray-600 text-sm relative">{step.description}</p>
                </div>
                
                {/* Connector to next step */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="M12 5v14M12 19l6-6M12 19l-6-6" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Vertical connector line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-[100%] w-px h-16 bg-gray-200">
                  <div className="h-full w-full bg-primary"></div>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Continuous improvement indicator - moved further down */}
          <motion.div
            className="flex justify-center items-center mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Grid background for continuous improvement */}
            <div className="relative w-16 h-16 flex items-center justify-center mr-3">
              <div className="absolute inset-0 opacity-25 rounded-full overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <defs>
                    <pattern id="grid-continuous-mobile" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-continuous-mobile)" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70">
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/>
                  <path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"/>
                </svg>
              </div>
            </div>
            <span className="font-avenirNext text-gray-500">{t("continuousImprovementCycle")}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 