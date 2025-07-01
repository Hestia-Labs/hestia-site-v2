'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { CaseStudy } from '@/types/caseStudy';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
interface ProjectGalleryProps {
  caseStudy: CaseStudy;
}

export function ProjectGallery({ caseStudy }: ProjectGalleryProps) {
  const commonT = useTranslations("Common");
  // Function to close the lightbox by clearing the URL hash without page reload
  const closeGallery = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // Store current scroll position
    const scrollPosition = window.scrollY;
    
    // First change hash to empty to close the lightbox via CSS target selector
    window.location.hash = '';
    
    // Then clean up URL and restore scroll position
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
      window.scrollTo(0, scrollPosition);
    }, 10);
  }, []);
  
  // Function to navigate to next image in lightbox
  const navigateToNext = useCallback((currentIndex: number) => {
    const nextIndex = currentIndex === caseStudy.projectImages.length - 1 ? 0 : currentIndex + 1;
    window.location.hash = `lightbox-${nextIndex}`;
  }, [caseStudy.projectImages.length]);
  
  // Function to navigate to previous image in lightbox
  const navigateToPrevious = useCallback((currentIndex: number) => {
    const prevIndex = currentIndex === 0 ? caseStudy.projectImages.length - 1 : currentIndex - 1;
    window.location.hash = `lightbox-${prevIndex}`;
  }, [caseStudy.projectImages.length]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if a lightbox is currently open by checking URL hash
      if (!window.location.hash.startsWith('#lightbox-')) return;
      
      const currentIndex = parseInt(window.location.hash.replace('#lightbox-', ''), 10);
      
      switch (e.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowRight':
          navigateToNext(currentIndex);
          break;
        case 'ArrowLeft':
          navigateToPrevious(currentIndex);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeGallery, navigateToNext, navigateToPrevious]);
  
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="font-bellefair text-3xl md:text-4xl mb-14 text-center relative inline-block mx-auto after:content-[''] after:absolute after:w-1/3 after:h-[2px] after:bg-primary/40 after:-bottom-4 after:left-1/3">
        {commonT("projectGallery")}
        </h2>
        
        {/* True Masonry Gallery with Mirrored 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6 mx-auto">
          {/* Slice to only use the first 4 images */}
          {caseStudy.projectImages.slice(0, 4).map((image, index) => {
            // Define positions for perfect mirrored layout
            let gridClasses = "";
            let aspectRatio = "";
            
            // Top left - Large horizontal
            if (index === 0) {
              gridClasses = "md:col-span-8";
              aspectRatio = "aspect-[16/9]";
            } 
            // Top right - Small square
            else if (index === 1) {
              gridClasses = "md:col-span-4";
              aspectRatio = "aspect-square";
            }
            // Bottom left - Small square (mirroring top row)
            else if (index === 2) {
              gridClasses = "md:col-span-4";
              aspectRatio = "aspect-square";
            }
            // Bottom right - Large horizontal (mirroring top row)
            else if (index === 3) {
              gridClasses = "md:col-span-8";
              aspectRatio = "aspect-[16/9]";
            }
            
            return (
              <div 
                key={`masonry-${index}`} 
                className={`group relative overflow-hidden rounded-sm shadow-md ${gridClasses} hover:shadow-lg transition-all duration-500 cursor-pointer`}
              >
                <div className={`${aspectRatio} w-full h-full relative overflow-hidden`}>
                  <Image
                    src={image.src || `/images/placeholder-${index + 1}.jpg`}
                    fill
                    alt={image.alt || `Project image ${index + 1}`}
                    className="object-cover !w-full !h-full absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={index === 0 || index === 3 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    quality={90}
                    priority={index < 2}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-10">
                    <p className="text-white text-sm md:text-base font-avenirNext transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.caption || `Project detail ${index + 1}`}
                    </p>
                  </div>
                  
                  {/* Open fullscreen indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </span>
                  </div>
                  
                  {/* Click handler for fullscreen view */}
                  <a 
                    href={`#lightbox-${index}`}
                    className="absolute inset-0 z-20"
                    aria-label={`View ${image.alt || `Project image ${index + 1}`} in full screen`}
                  ></a>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Lightbox/Modal for fullscreen images */}
        {caseStudy.projectImages.map((image, index) => (
          <div key={`lightbox-${index}`} id={`lightbox-${index}`} className="fixed inset-0 bg-black/95 z-50 hidden target:flex flex-col items-center justify-center p-4 md:p-10">
            {/* Backdrop click to close - this is positioned at the bottom of the stacking context */}
            <div 
              onClick={closeGallery}
              className="absolute inset-0 z-0 cursor-pointer" 
              aria-label="Close lightbox"
            ></div>
            
            <div className="relative w-full max-w-7xl h-full max-h-[80vh] flex flex-col items-center justify-center z-10">
              {/* Main Image */}
              <div className="relative w-full h-full flex-1 overflow-hidden">
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  className="object-contain animate-fadeIn"
                  sizes="100vw"
                  quality={100}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm md:text-base font-avenirNext">{image.caption}</p>
                </div>
                
                {/* Image counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-avenirNext">
                  {index + 1} / {caseStudy.projectImages.length}
                </div>
                
                {/* Large arrow navigation buttons for the main image area */}
                <button 
                  onClick={() => navigateToPrevious(index)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                
                <button 
                  onClick={() => navigateToNext(index)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
              
              {/* Thumbnail Navigation Bar */}
              <div className="w-full mt-4 overflow-auto py-2 px-4 flex justify-center items-center gap-2 bg-black/50 backdrop-blur-sm rounded-sm">
                <div className="flex flex-nowrap items-center justify-center gap-2 max-w-full">
                  {caseStudy.projectImages.map((thumbImage, thumbIndex) => (
                    <a 
                      key={`thumb-${thumbIndex}`} 
                      href={`#lightbox-${thumbIndex}`}
                      className={`relative rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        thumbIndex === index 
                          ? "w-16 h-16 md:w-20 md:h-20 border-2 border-primary" 
                          : "w-12 h-12 md:w-16 md:h-16 border border-white/20 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`View image ${thumbIndex + 1}`}
                    >
                      <Image
                        src={thumbImage.src}
                        fill
                        alt={thumbImage.alt}
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 64px"
                        quality={60}
                      />
                      <div className={`absolute inset-0 ${thumbIndex === index ? "bg-transparent" : "bg-black/40 hover:bg-transparent"} transition-colors duration-300`}></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation header */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 z-20 flex justify-end">
              <button 
                onClick={closeGallery}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 