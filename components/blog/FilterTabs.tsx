"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FilterTabsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  totalCount: number;
  categories: {
    [key: string]: number;
  };
}

export default function FilterTabs({ 
  activeFilter, 
  setActiveFilter, 
  totalCount,
  categories 
}: FilterTabsProps) {
  
  const filters = [
    { id: 'all', label: 'ALL POSTS', count: totalCount },
    { id: 'ux-ui', label: 'UX/UI', count: categories['UX/UI'] || 0 },
    { id: 'branding', label: 'BRANDING', count: categories['Branding'] || 0 },
    { id: 'development', label: 'DEVELOPMENT', count: categories['Development'] || 0 },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`relative group px-2 py-2 font-bellefair text-sm md:text-base  transition-colors duration-300 ${
            activeFilter === filter.id
              ? 'text-primary'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <span className="relative z-10">{filter.label}</span>
          
          {/* Count indicator */}
          <span className={`ml-2 text-xs ${
            activeFilter === filter.id ? 'text-primary/70' : 'text-gray-400'
          }`}>
            ({filter.count})
          </span>
          
          {/* Animated underline */}
          {activeFilter === filter.id ? (
            <motion.div 
              layoutId="activeFilterUnderline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-gray-200 transition-colors duration-300" />
          )}
        </button>
      ))}
    </div>
  );
} 