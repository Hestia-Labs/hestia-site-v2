"use client";

import React from "react";
import WorkCarousel from "@/components/Landing/Work";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

interface ProjectShowcaseProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ProjectShowcase({
  title = "Our Work",
  description = "Explore our portfolio of innovative digital solutions that have helped businesses transform and grow.",
  ctaText = "See All Work",
  ctaHref = "/work"
}: ProjectShowcaseProps) {
  return (
    <section id="work" className="w-full flex flex-col justify-center items-center bg-background/50 py-32 mt-24">
      <div className="w-full max-w-[1600px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="font-bellefair text-4xl md:text-5xl uppercase mb-4 text-center">{title}</h2>
          <p className="font-avenirNext text-lg text-gray-600 max-w-2xl mx-auto text-center">
            {description}
          </p>
        </motion.div>
        
        <div className="space-y-32 md:space-y-40">
          {/* Project 1 - Full-width layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <WorkCarousel 
              stopCarousel 
              variant="fullscreen" 
              projectIndex={0}
              animationDirection="left"
              animationDistance={40}
            />
          </motion.div>
          
          {/* Project 2 - Split layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <WorkCarousel 
              stopCarousel 
              variant="split" 
              projectIndex={1}
              animationDirection="right"
              animationDistance={50}
            />
          </motion.div>
          
          {/* Project 3 - Full-width layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <WorkCarousel 
              stopCarousel 
              variant="fullscreen" 
              projectIndex={2}
              animationDirection="left"
              animationDistance={30}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TransitionLink href={ctaHref} className="group">
            <div className="border-2 border-black hover:bg-black transition-colors duration-300 py-4 px-12 rounded-sm">
              <span className="font-bellefair uppercase text-xl md:text-2xl tracking-wider group-hover:text-white transition-colors duration-300">
                {ctaText}
              </span>
            </div>
          </TransitionLink>
        </motion.div>
      </div>
    </section>
  );
} 