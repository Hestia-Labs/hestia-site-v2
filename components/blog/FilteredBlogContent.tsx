"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/types/blog';
import MasonryGrid from './MasonryGrid';
import FilterTabs from './FilterTabs';
import { useTranslations } from 'next-intl';

interface FilteredBlogContentProps {
  posts: BlogPost[];
  categories: Record<string, number>;
  filterIdMap?: Record<string, string>;
}

export default function FilteredBlogContent({ posts, categories, filterIdMap }: FilteredBlogContentProps) {
  const t = useTranslations('BlogPage.filters');
  const [activeFilter, setActiveFilter] = useState('all');

  // Handle filter changes with a slight delay for animation
  const handleFilterChange = (filter: string) => {
    console.log('FilteredBlogContent - Setting active filter:', filter);
    setActiveFilter(filter);
  };

  return (
    <>
      <motion.h2 
        className="font-bellefair text-2xl md:text-3xl uppercase mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('title')}
      </motion.h2>
      
      <FilterTabs 
        activeFilter={activeFilter} 
        setActiveFilter={handleFilterChange} 
        totalCount={posts.length} 
        categories={categories} 
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <MasonryGrid 
            posts={posts} 
            filter={activeFilter} 
            filterIdMap={filterIdMap}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
} 