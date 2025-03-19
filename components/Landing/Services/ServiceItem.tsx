"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "@/components/Icons/Arrow";

interface ServiceItemProps {
  title: string;
  content: string;
}

export default function ServiceItem({ title, content }: ServiceItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Return a different SVG icon based on the service title.
  function getServiceIcon(title: string) {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("ux/ui")) {
      // UX/UI Design: A screen with a header and content lines.
      return (
        <svg
          className="w-full h-32 mb-2"
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
      // Software Development: Abstract angled shapes with a central box.
      return (
        <svg
          className="w-full h-32 mb-2"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {/* Left angled shape */}
          <polyline points="20,20 40,50 20,80" fill="none" />
          {/* Right angled shape */}
          <polyline points="80,20 60,50 80,80" fill="none" />
          {/* Top and bottom lines */}
          <line x1="40" y1="20" x2="60" y2="20" />
          <line x1="40" y1="80" x2="60" y2="80" />
          {/* Central dashed divider */}
          <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2,2" />
          {/* Additional detail: a central square */}
          <rect x="42" y="42" width="16" height="16" fill="none" strokeDasharray="2,2" />
        </svg>
      );
    } else if (lowerTitle.includes("brand")) {
      // Brand Creation: An artistic curve with extra details.
      return (
        <svg
          className="w-full h-32 mb-2"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {/* Main curvy path */}
          <path d="M20 50 Q40 10, 60 50 T90 50" strokeDasharray="4,2" />
          {/* Additional underline detail */}
          <line x1="20" y1="60" x2="90" y2="60" strokeDasharray="2,2" />
          {/* A small accent circle */}
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          {/* Extra curved line for flair */}
          <path d="M30 70 C40 60, 60 60, 70 70" strokeDasharray="3,2" />
        </svg>
      );
    }
    return null;
  }

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border border-black p-8 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bellefair">{title}</h3>
        <Arrow
          className="w-6 h-6"
          color="black"
          strokeWidth={1}
          direction={isOpen ? "up" : "down"}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden font-avenirNext"
          >
            {getServiceIcon(title)}
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
