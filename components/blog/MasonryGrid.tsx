"use client";

import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';

interface MasonryGridProps {
  posts: BlogPost[];
  filter?: string;
}

export default function MasonryGrid({ posts, filter = 'all' }: MasonryGridProps) {
  // Filter posts based on filter value
  const filteredPosts = React.useMemo(() => {
    if (filter === 'all') return posts;
    
    return posts.filter(post => {
      if (filter === 'ux-ui' && post.category === 'UX/UI') return true;
      
      if (filter === 'branding' && 
          (post.category === 'Branding' || post.category === 'Fashion')) 
        return true;
      
      if (filter === 'development' && 
          (post.category === 'Development' || 
           post.type === 'Web App' || 
           post.type === 'Platform')) 
        return true;
      
      return false;
    });
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
      <p className="font-avenirNext text-gray-500">No posts found for this category.</p>
    </div>
  );
} 