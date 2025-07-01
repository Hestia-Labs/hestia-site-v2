import React from "react";
import TransitionLink from "@/components/TransitionLink";
import { Navbar } from "@/components/Navbar";
export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Navbar />
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <defs>
            <pattern id="not-found-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#not-found-grid)" />
        </svg>
      </div>
      
      <div className="container relative z-10 px-6 py-16 text-center max-w-3xl mt-20">
        <h1 className="font-bellefair text-7xl md:text-9xl uppercase mb-6">404</h1>
        
        <h2 className="font-bellefair text-3xl md:text-4xl uppercase mb-8">Page Not Found</h2>
        
        <p className="font-avenirNext text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        
        <TransitionLink 
          href="/" 
          className="inline-flex items-center font-bellefair uppercase text-sm border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors rounded-sm"
        >
          Return Home
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </TransitionLink>
      </div>
    </div>
  );
}
