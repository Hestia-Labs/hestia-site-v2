"use client";

import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

interface ServiceItemProps {
  title: string;
  content: string;
  href: string;
  learnMoreText?: string;
}

export default function ServiceItem({ title, content, href, learnMoreText = "Learn More" }: ServiceItemProps) {
  // Return a different SVG icon based on the service title.
  function getServiceIcon(title: string) {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("ux/ui") || lowerTitle.includes("ux")) {
      return (
        <svg
          className="w-16 h-16 mb-4"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <rect x="10" y="20" width="80" height="50" rx="5" ry="5" />
          <line x1="10" y1="75" x2="90" y2="75" strokeDasharray="2,2" />
          <line x1="20" y1="30" x2="80" y2="30" strokeDasharray="2,2" />
          <line x1="20" y1="40" x2="80" y2="40" strokeDasharray="2,2" />
        </svg>
      );
    } else if (lowerTitle.includes("software")) {
      return (
        <svg
          className="w-16 h-16 mb-4"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <polyline points="20,20 40,50 20,80" fill="none" />
          <polyline points="80,20 60,50 80,80" fill="none" />
          <line x1="40" y1="20" x2="60" y2="20" />
          <line x1="40" y1="80" x2="60" y2="80" />
          <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2,2" />
          <rect x="42" y="42" width="16" height="16" fill="none" strokeDasharray="2,2" />
        </svg>
      );
    } else if (lowerTitle.includes("brand") || lowerTitle.includes("marca")) {
      return (
        <svg
          className="w-16 h-16 mb-4"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M20 50 Q40 10, 60 50 T90 50" strokeDasharray="4,2" />
          <line x1="20" y1="60" x2="90" y2="60" strokeDasharray="2,2" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <path d="M30 70 C40 60, 60 60, 70 70" strokeDasharray="3,2" />
        </svg>
      );
    }
    return null;
  }

  return (
    <TransitionLink href={href} className="block h-full">
      <motion.div 
        className="bg-white border border-gray-200 rounded-sm p-8 h-full flex flex-col relative overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <defs>
              <pattern id={`services-grid-${title.replace(/\s+/g, '-').toLowerCase()}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#services-grid-${title.replace(/\s+/g, '-').toLowerCase()})`} />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {getServiceIcon(title)}
          </div>
          <h3 className="font-bellefair text-2xl uppercase mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="font-avenirNext text-gray-600 mb-6 flex-grow">{content}</p>
          <div className="mt-auto">
            <span 
              className="inline-flex items-center font-bellefair uppercase text-sm text-black border-b border-black pb-1 group-hover:text-primary group-hover:border-primary transition-colors duration-300"
            >
              {learnMoreText}
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </TransitionLink>
  );
}
