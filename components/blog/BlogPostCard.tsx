"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

type CardType = {
  className: string;
  heightClass: string;
};

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  type?: number;
  featured?: boolean;
  cardTypes?: CardType[];
  featuredTypes?: CardType[];
}

export default function BlogPostCard({ 
  post, 
  index, 
  type, 
  featured = false,
  cardTypes,
  featuredTypes
}: BlogPostCardProps) {
  
  // Default card types if not provided
  const defaultCardTypes = [
    { className: "col-span-1", heightClass: "aspect-[4/3] h-full" },
    { className: "col-span-1", heightClass: "aspect-square h-full" },
    { className: "col-span-2", heightClass: "aspect-[16/9] h-full" },
    { className: "col-span-1 row-span-2", heightClass: "aspect-[2/3] h-full" },
    { className: "col-span-1", heightClass: "aspect-[3/4] h-full" },
  ];

  const defaultFeaturedTypes = [
    { className: "col-span-1 flex-[1.5] mb-8", heightClass: "aspect-[16/9] h-full" },
    { className: "col-span-1 flex-1 mt-16", heightClass: "aspect-[4/5] h-full" },
    { className: "col-span-1 flex-1 mt-5", heightClass: "aspect-square h-full" },
  ];

  // Use provided types or defaults
  const masonryCardTypes = cardTypes || defaultCardTypes;
  const featuredPostTypes = featuredTypes || defaultFeaturedTypes;

  // Use specified type or determine from index
  const cardType = featured 
    ? featuredPostTypes[index % featuredPostTypes.length]
    : type !== undefined 
      ? masonryCardTypes[type % masonryCardTypes.length]
      : masonryCardTypes[index % masonryCardTypes.length];
  
  return (
    <motion.div
      className={`relative overflow-hidden rounded-md shadow-md ${cardType.className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={post.href} className="block h-full w-full">
        <div className={`group relative w-full h-full ${cardType.heightClass}`}>
          {/* Use next/image in production for better image optimization */}
          <img
            src={post.image}
            alt={post.name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
            loading="lazy" 
          />
          
          {/* Overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 w-full">
              <h2 className="font-bellefair text-xl text-white uppercase">{post.name}</h2>
              <p className="font-avenirNext text-sm text-gray-200 mt-1 line-clamp-2">{post.tagline}</p>
              
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-white/80">{post.category}</span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-white/80">{post.type}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 