"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 h-[85vh] bg-black text-white">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="font-bellefair text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-tight tracking-wider">
            The Journal
          </h1>
          
          <div className="max-w-2xl">
            <p className="font-avenirNext text-lg md:text-xl text-white/80">
              Insights and stories from our journey in the digital world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 