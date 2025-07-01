"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

type CardType = {
  className: string;
  heightClass: string;
};

type ServiceCategoryType = {
  name: string;
  color: string;
};

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  type?: number;
  featured?: boolean;
  cardTypes?: CardType[];
  featuredTypes?: CardType[];
  serviceCategory?: ServiceCategoryType;
}

export default function BlogPostCard({ 
  post, 
  index, 
  type, 
  featured = false,
  cardTypes,
  featuredTypes,
  serviceCategory
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
      className={`relative overflow-hidden rounded-sm shadow-md ${cardType.className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={post.href} className="block h-full w-full">
        <div className={`group relative w-full h-full ${cardType.heightClass}`}>
          {/* Service category label - responsive text size */}
          {serviceCategory && (
            <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10">
              <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-sm text-[10px] xs:text-xs sm:text-sm font-bellefair ${serviceCategory.color}`}>
                {serviceCategory.name}
              </span>
            </div>
          )}
          
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={post.image}
              alt={post.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
              priority={featured && index === 0}
            />
          </div>
          
          {/* Overlay with text - responsive padding and typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-2 sm:p-3 md:p-4 w-full">
              <h2 className="font-bellefair text-base sm:text-lg md:text-xl text-white uppercase line-clamp-2">{post.name}</h2>
              <p className="font-avenirNext text-xs sm:text-sm text-gray-200 mt-0.5 sm:mt-1 line-clamp-2 hidden xs:block">{post.tagline}</p>
              
              <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                <span className="text-[10px] xs:text-xs text-white/80">{post.category}</span>
                <span className="text-white/40 text-[10px] xs:text-xs">•</span>
                <span className="text-[10px] xs:text-xs text-white/80">{post.type}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 