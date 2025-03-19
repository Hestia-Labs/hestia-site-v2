"use client";

import React from "react";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white py-32 overflow-hidden">
      {/* Abstract geometric elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-white blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-white blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="font-bellefair text-6xl md:text-7xl uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Process
          </motion.h1>
          
          <motion.div
            className="h-1 w-24 bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="font-avenirNext text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting digital experiences with precision and creativity
          </motion.p>
        </motion.div>
      </div>
      
      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
    </section>
  );
} 