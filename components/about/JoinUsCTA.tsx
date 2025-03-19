"use client";

import React from "react";
import { motion } from "framer-motion";

export function JoinUsCTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="font-bellefair text-4xl md:text-5xl uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Join Our Journey
        </motion.h2>
        
        <motion.p 
          className="font-avenirNext text-lg md:text-xl max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you're looking to partner with us on a project or join our team, we'd love to hear from you.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="/contact" className="inline-block border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 py-3 px-8">
            <span className="font-bellefair uppercase text-xl tracking-wider">
              Contact Us
            </span>
          </a>
          <a href="/careers" className="inline-block bg-white text-black hover:bg-opacity-90 transition-colors duration-300 py-3 px-8">
            <span className="font-bellefair uppercase text-xl tracking-wider">
              Careers
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 