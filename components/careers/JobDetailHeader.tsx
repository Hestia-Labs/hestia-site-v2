import React from "react";
import TransitionLink from "@/components/TransitionLink";
import { JobPosition } from "@/data/jobPositions";
import { useTranslations } from "next-intl";
interface JobDetailHeaderProps {
  job: JobPosition;
}

export function JobDetailHeader({ job }: JobDetailHeaderProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="relative pt-24 pb-12 bg-white">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <TransitionLink 
            href="/careers" 
            className="inline-flex items-center font-bellefair text-sm uppercase mb-6 hover:text-gray-600 transition-colors"
          >
            <svg 
              className="mr-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {commonT("backToCareers")}
          </TransitionLink>
          
          <h1 className="font-bellefair text-4xl md:text-5xl uppercase">{job.title}</h1>
          <div className="flex items-center my-4 font-avenirNext text-sm text-gray-600">
            <span className="mr-6">{job.location}</span>
            <span>{job.type}</span>
          </div>
          <p className="font-avenirNext text-xl text-gray-700 mt-6">
            {job.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default JobDetailHeader; 