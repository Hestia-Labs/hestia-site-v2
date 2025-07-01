"use client";

import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';
import { useTranslations } from 'next-intl';

interface MasonryGridProps {
  posts: BlogPost[];
  filter?: string;
  filterIdMap?: Record<string, string>;
}

export default function MasonryGrid({ posts, filter = 'all' }: MasonryGridProps) {
  const t = useTranslations('BlogPage.filters');
  
  // Debug: log the filter value
  console.log('MasonryGrid - Current filter:', filter);
  console.log('MasonryGrid - Posts before filtering:', posts.length);
  
  // Filter posts based on filter value
  const filteredPosts = React.useMemo(() => {
    if (filter === 'all') return posts;
    
    const filtered = posts.filter(post => {
      // Filter based on standardized filter IDs
      
      if (filter === 'ux-ui') {
        return post.category === 'UX/UI';
      }
      
      if (filter === 'branding') {
        return post.category === 'Branding' || post.category === 'Fashion';
      }
      
      if (filter === 'development') {
        return post.category === 'Development' || 
               post.type === 'Web App' || 
               post.type === 'Platform';
      }
      
      return false;
    });
    
    // Debug the filtered posts
    console.log('MasonryGrid - Posts after filtering:', filtered.length);
    return filtered;
  }, [posts, filter]);

  // Create specific patterns to ensure a visually appealing masonry layout
  // This creates a repeating pattern of card sizes that fit together well
  const getCardType = (index: number): number => {
    // Pattern that repeats: normal, normal, wide, tall+normal
    const position = index % 6;
    
    if (position === 0) return 0; // normal card
    if (position === 1) return 1; // normal square card
    if (position === 2) return 2; // wide card (spans 2 columns)
    if (position === 3) return 3; // tall card (spans 2 rows)
    if (position === 4) return 4; // normal portrait card
    return 1; // Default to normal square
  };

  // Apply motion animation when filter changes
  return filteredPosts.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
      {filteredPosts.map((post, index) => (
        <BlogPostCard 
          key={post.id} 
          post={post} 
          index={index} 
          type={getCardType(index)}
        />
      ))}
    </div>
  ) : (
    <div className="text-center py-12">
      <p className="font-avenirNext text-gray-500">{t('noResults')}</p>
    </div>
  );
} 