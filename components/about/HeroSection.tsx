"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("AboutPage.heroSection");
  const textRef = useRef<HTMLDivElement>(null);

  // Text reveal animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const elements = textRef.current.querySelectorAll('.reveal-text');
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          if (isVisible) {
            el.classList.add('revealed');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on load
    setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-400 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gray-400 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Main heading with animated reveal */}
        <motion.h1 
          className="font-bellefair text-4xl md:text-6xl uppercase mb-12 leading-tight tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("mainTitlePrefix")} 
          <span className="block sm:inline-block">
            <motion.span
              className="relative inline-block mr-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.span
                className="absolute h-0.5 bg-white bottom-2 left-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <span className="relative z-10 px-1 text-3xl md:text-5xl"> {t("innovationWord")} </span>
            </motion.span>
            <span className="relative z-10 px-1 text-3xl md:text-5xl">{t("andWord")}</span> 
            <motion.span
              className="relative inline-block ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.span
                className="absolute h-0.5 bg-white bottom-2 left-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 1.7 }}
              />
              <span className="relative z-10 px-1 text-3xl md:text-5xl"> {t("partnershipWord")} </span>
            </motion.span>
          </span>
        </motion.h1>
        
        {/* Paragraph text with staggered reveal */}
        <div 
          ref={textRef}
          className="font-avenirNext text-lg md:text-xl space-y-8 max-w-3xl"
        >
          <motion.p
            className="reveal-text opacity-0 transform translate-y-8 transition duration-1000 ease-out "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t("paragraph1")}
          </motion.p>
          
          <motion.p
            className="reveal-text opacity-0 transform translate-y-8 transition duration-1000 ease-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {t("paragraph2")}
          </motion.p>
          
          <motion.p
            className="reveal-text opacity-0 transform translate-y-8 transition duration-1000 ease-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {t("paragraph3")}
          </motion.p>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 2
          }}
        >
          <div className="flex flex-col items-center">
            <span className="font-bellefair text-sm uppercase mb-2">{t("scrollDown")}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 