"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStep } from '@/types/service';
import { useTranslations } from 'next-intl';
interface ServiceProcessProps {
  processSteps: ProcessStep[];
}

export default function ServiceProcess({ processSteps }: ServiceProcessProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-bellefair text-3xl md:text-4xl uppercase mb-4 text-foreground">
            {commonT("ourProcess")}
          </h2>
          <p className="font-avenirNext text-lg text-foreground/80 max-w-2xl mx-auto">
            {commonT("methodicalApproach")}
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-foreground/10" />
          
          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Bullet Point */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                    <span className="font-bellefair  text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <h3 className="font-bellefair text-xl uppercase mb-2 text-foreground">
                    {step.name}
                  </h3>
                  <p className="font-avenirNext text-foreground/80">
                    {step.description}
                  </p>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 