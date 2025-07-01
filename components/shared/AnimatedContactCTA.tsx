"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactCTA from "./ContactCTA";

interface AnimatedContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export default function AnimatedContactCTA(props: AnimatedContactCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ContactCTA {...props} />
    </motion.div>
  );
} 