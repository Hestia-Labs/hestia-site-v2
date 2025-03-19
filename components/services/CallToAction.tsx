"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section id="contact" className="py-28 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-bellefair text-3xl md:text-5xl text-white uppercase mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          
          <p className="font-avenirNext text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Let's discuss how we can help you achieve your business goals with our tailored solutions.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact" className="inline-block">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-primary hover:bg-primary/90 text-white font-bellefair uppercase tracking-wider py-4 px-10 transition-colors duration-300 text-center"
              >
                Contact Us
              </motion.div>
            </Link>
            
            <Link href="/work" className="inline-block">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="border border-white/30 hover:border-white text-white font-bellefair uppercase tracking-wider py-4 px-10 transition-colors duration-300 text-center"
              >
                Explore Our Work
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 