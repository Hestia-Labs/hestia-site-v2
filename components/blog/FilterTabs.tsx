"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface FilterTabsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  totalCount: number;
  categories: Record<string, number>;
}

export default function FilterTabs({ activeFilter, setActiveFilter, totalCount, categories }: FilterTabsProps) {
  const t = useTranslations('BlogPage.categories');
  
  // For debugging - log the categories
  console.log('FilterTabs - Categories:', categories);
  console.log('FilterTabs - Active filter:', activeFilter);
  
  // Define filter IDs for consistency
  const filterIds = {
    all: 'all',
    uxui: 'ux-ui',
    branding: 'branding',
    development: 'development'
  };
  
  // Get translated labels for consistent filter IDs
  const getFilterIdForTranslatedLabel = (label: string) => {
    if (label === t('uxui')) return filterIds.uxui;
    if (label === t('branding')) return filterIds.branding;
    if (label === t('development')) return filterIds.development;
    return 'unknown'; // fallback
  };
  
  // Create array of filter objects with translated labels
  const filters = [
    { id: filterIds.all, label: t('all'), count: totalCount },
    ...Object.entries(categories).map(([category, count]) => {
      // Get a consistent filter ID based on the translated label
      const filterId = getFilterIdForTranslatedLabel(category);
      return {
        id: filterId,
        label: category,
        count,
      };
    }),
  ];
  
  // For debugging - log the filters
  console.log('FilterTabs - Filters:', filters);

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => {
            console.log('Setting filter to:', filter.id);
            setActiveFilter(filter.id);
          }}
          className={`relative text-sm md:text-base font-dmserif transition-all duration-300 ${
            activeFilter === filter.id
              ? 'text-black'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          {filter.label} ({filter.count})
          {activeFilter === filter.id && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
              layoutId="activeFilterUnderline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
} 