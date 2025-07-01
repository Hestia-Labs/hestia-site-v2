"use client";

import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';
import { useTranslations } from 'next-intl';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

// Featured posts types for an asymmetric single-line layout
const featuredPostTypes = [
  { 
    className: "col-span-1 flex-[1.5] mb-8", // First post: pushed down
    heightClass: "aspect-[16/9] h-full" // Taller
  },
  { 
    className: "col-span-1 flex-1 mt-16", // Middle post: pulled up (margin bottom)
    heightClass: "aspect-[4/5] h-full" // Wider
  },
  { 
    className: "col-span-1 flex-1 mt-5", // Last post: pushed down more
    heightClass: "aspect-square h-full" // Square
  },
];

// Service categories for posts
const serviceCategories = {
  branding: {
    name: "BRAND CREATION",
    color: "bg-black text-white border border-white"
  },
  software: {
    name: "SOFTWARE DEVELOPMENT",
    color: "bg-black text-white border border-white"
  },
  uxui: {
    name: "UX/UI DESIGN",
    color: "bg-black text-white border border-white"
  }
};

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const t = useTranslations('BlogPage.featured');
  
  // For demo purposes, assign categories to posts if they don't have them
  const postsWithCategories = posts.map((post, index) => {
    if (!post.serviceCategory) {
      // Rotate through categories for demo
      const categories = Object.keys(serviceCategories);
      const category = categories[index % categories.length];
      return { ...post, serviceCategory: category };
    }
    return post;
  });

  return (
    <div className="relative">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="font-bellefair text-2xl md:text-3xl uppercase mb-3">{t('title')}</h2>
        <p className="font-avenirNext text-base text-gray-600 mb-8 max-w-xl">
          {t('subtitle')}
        </p>
      </div>
      
      {/* Desktop layout - staggered heights */}
      <div className="hidden md:flex flex-row gap-8 w-full min-h-[400px] items-start relative z-10 pt-8">
        {postsWithCategories.map((post, index) => (
          <BlogPostCard 
            key={post.id} 
            post={post} 
            index={index} 
            featured={true}
            featuredTypes={featuredPostTypes}
            serviceCategory={
              post.serviceCategory ? 
                serviceCategories[post.serviceCategory as keyof typeof serviceCategories] : 
                undefined
            }
          />
        ))}
      </div>
      
      {/* Mobile layout - single column */}
      <div className="grid grid-cols-2 gap-8 md:hidden relative z-10">
        {postsWithCategories.map((post, index) => (
          <BlogPostCard 
            key={post.id} 
            post={post} 
            index={index}
            serviceCategory={
              post.serviceCategory ? 
                serviceCategories[post.serviceCategory as keyof typeof serviceCategories] : 
                undefined
            }
          />
        ))}
      </div>
    </div>
  );
} 