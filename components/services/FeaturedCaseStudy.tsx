"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CaseStudy } from '@/types/service';

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

export default function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  return (
    <section className="py-24 px-4 md:px-8 bg-foreground/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-bellefair text-3xl md:text-4xl uppercase mb-4 text-foreground">
            Featured Work
          </h2>
          <p className="font-avenirNext text-lg text-foreground/80 max-w-2xl mx-auto">
            See how we've delivered results for our clients.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-sm shadow-md">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="aspect-[16/9] relative"
            >
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title} 
                className="w-full h-full object-cover transition-all duration-500 grayscale-[30%] hover:grayscale-0"
              />
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col space-y-6 md:pl-8">
            <h3 className="font-bellefair text-2xl md:text-3xl uppercase text-foreground">
              {caseStudy.title}
            </h3>
            
            <p className="font-avenirNext text-foreground/80">
              {caseStudy.description}
            </p>
            
            <div className="pt-4">
              <Link href={caseStudy.link} className="inline-block">
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="border-b-2 border-primary pb-1 group transition-colors"
                >
                  <span className="font-bellefair uppercase tracking-wider text-lg group-hover:text-primary transition-colors flex items-center">
                    View Case Study
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 text-primary" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 