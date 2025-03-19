"use client";

import React from "react";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <p className="font-avenirNext text-gray-700 leading-relaxed">
          We provide comprehensive digital solutions designed to elevate your business presence and operational efficiency. Our services are built on the foundation of technical excellence and strategic thinking, ensuring that every solution we deliver serves your specific business objectives.
        </p>
        
        <p className="font-avenirNext text-gray-700 leading-relaxed">
          Each project begins with a thorough understanding of your needs, followed by meticulous planning and execution. We maintain transparent communication throughout the process, allowing you to have complete visibility and input. Our commitment extends beyond project delivery—we offer ongoing support to ensure your continued success.
        </p>
        
        <div className="mt-8 p-4 border-l-2 border-primary">
          <h3 className="font-bellefair uppercase mb-2 text-primary">Our Approach</h3>
          <p className="font-avenirNext text-gray-600">
            We believe in a collaborative approach that puts your goals at the center of everything we do. By understanding your unique challenges, we can deliver tailored solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
} 