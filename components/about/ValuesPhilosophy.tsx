"use client";

import React from "react";
import { motion } from "framer-motion";

export function ValuesPhilosophy() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex w-3/4 flex-col items-start justify-start">
          <motion.h2 
            className="font-bellefair text-4xl md:text-5xl uppercase text-left w-10/12 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Fostering innovation while prioritizing balance.
          </motion.h2>
          
          <motion.p 
            className="font-avenirNext text-lg md:text-xl max-w-3xl mb-20 text-left w-9/12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Hestia Labs, we believe that our strength comes from a team that is inspired and balanced. 
            We share a passion for technology, creativity, and building a supportive work environment.
          </motion.p>
        </div>
        
        <div className="space-y-32">
          {/* Values items with optimized animations */}
          <ValuesItem 
            number="01"
            text="Our team members stay with us because they're empowered to grow and innovate without limits."
            svgComponent={<ValuesItemSVG1 />}
            alignment="left"
          />
          
          <ValuesItem 
            number="02"
            text="We trust our team to manage their time effectively, ensuring a healthy balance between productivity and life outside work."
            svgComponent={<ValuesItemSVG2 />}
            alignment="right"
          />
          
          <ValuesItem 
            number="03"
            text="We recognize that everyone has a life outside the office, and we're committed to providing a supportive environment for personal and professional growth."
            svgComponent={<ValuesItemSVG3 />}
            alignment="left"
          />
        </div>
      </div>
    </section>
  );
}

// Separate components for each value item for better performance
function ValuesItem({ 
  number, 
  text, 
  svgComponent, 
  alignment 
}: { 
  number: string; 
  text: string; 
  svgComponent: React.ReactNode;
  alignment: 'left' | 'right';
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      {alignment === 'right' ? (
        <>
          <motion.div 
            className="w-full md:w-2/5 flex justify-center mb-10 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {svgComponent}
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 md:pl-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-bellefair text-5xl text-primary mb-6">{number}</h3>
            <p className="font-bellefair text-4xl leading-none tracking-wider uppercase">
              {text}
            </p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div 
            className="w-full md:w-3/5 md:pr-16 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-bellefair text-5xl text-primary mb-6">{number}</h3>
            <p className="font-bellefair text-4xl leading-none tracking-wider uppercase">
              {text}
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 flex justify-center mb-10 md:mb-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {svgComponent}
          </motion.div>
        </>
      )}
    </div>
  );
}

// Separated SVG components to reduce re-renders
function ValuesItemSVG1() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="100" cy="100" r="70" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <motion.circle 
        cx="100" cy="100" r="50" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        strokeDasharray="2 4"
        fill="none"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
      <motion.path 
        d="M70 100 A30 30 0 0 1 130 100" 
        stroke="currentColor" 
        strokeWidth="0.75" 
        fill="none" 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <motion.path 
        d="M130 100 A30 30 0 0 1 70 100" 
        stroke="currentColor" 
        strokeWidth="0.75" 
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }} 
      />
    </svg>
  );
}

function ValuesItemSVG2() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="50" y="50" width="100" height="100"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.line
        x1="50" y1="100" x2="150" y2="100"
        stroke="currentColor"
        strokeWidth="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.line
        x1="100" y1="50" x2="100" y2="150"
        stroke="currentColor"
        strokeWidth="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx="100" cy="100" r="20"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 3"
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        viewport={{ once: true }}
      />
    </svg>
  );
}

function ValuesItemSVG3() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle 
        cx="100" cy="100" r="30" 
        stroke="currentColor" 
        strokeWidth="1"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.path 
        d="M100 70 L100 40" 
        stroke="currentColor" 
        strokeWidth="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.path 
        d="M100 130 L100 160" 
        stroke="currentColor" 
        strokeWidth="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.path 
        d="M70 100 L40 100" 
        stroke="currentColor" 
        strokeWidth="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.path 
        d="M130 100 L160 100" 
        stroke="currentColor" 
        strokeWidth="0.75"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <motion.circle 
        cx="100" cy="100" r="50" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        strokeDasharray="5 5"
        fill="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring" }}
        viewport={{ once: true }}
      />
    </svg>
  );
} 