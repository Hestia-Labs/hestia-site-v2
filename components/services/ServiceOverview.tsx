"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
interface ServiceOverviewProps {
  fullDescription: string;
  technologies: string[];
}

export default function ServiceOverview({ fullDescription, technologies }: ServiceOverviewProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          {/* Description */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-bellefair text-3xl md:text-4xl uppercase mb-8 text-foreground">
              {commonT("overview")}
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              {fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="font-avenirNext mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
          
          {/* Technologies */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-foreground/5 p-8 rounded-sm">
              <h3 className="font-bellefair text-2xl uppercase mb-6 text-foreground">
                {commonT("technologies")} & {commonT("expertise")}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="inline-block px-4 py-2 bg-primary/10 text-primary font-avenirNext text-sm rounded-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 