"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations("WorkPage");
  return (
    <section className="pt-36 pb-20 px-4 md:px-8 relative">
      {/* Subtle background grid pattern */}
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
      
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="font-bellefair text-4xl md:text-6xl uppercase mb-6 leading-tight tracking-wider">
            {t("pageTitle")}
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="font-avenirNext text-gray-600 text-lg md:text-xl text-foreground/80">
              {t("pageSubtitle")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 