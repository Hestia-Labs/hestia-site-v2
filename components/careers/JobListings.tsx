"use client";

import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { jobPositions } from "@/data/jobPositions";
import { useTranslations } from "next-intl";

export function JobListings() {

  const commonT = useTranslations("Common");
  const t = useTranslations("CareersPage.JobListings");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-bellefair text-3xl uppercase mb-12 text-center">
          {t("title")}
        </h2>
        
        {jobPositions.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {jobPositions.map((job, index) => (
              <motion.div 
                key={job.id} 
                className="border border-gray-200 bg-white p-8 rounded-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Grid background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <defs>
                      <pattern id={`grid-${job.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${job.id})`} />
                  </svg>
                </div>
                  
                <div className="relative z-10">
                  <h3 className="font-bellefair text-2xl uppercase mb-2">{job.title}</h3>
                  <div className="flex items-center mb-4 font-avenirNext text-sm text-gray-600">
                    <span className="mr-4">{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="font-avenirNext text-gray-700 mb-6">{job.description}</p>
                  <div className="mt-auto">
                    <TransitionLink 
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center font-bellefair uppercase text-sm text-black border-b border-black pb-1 hover:text-gray-700 hover:border-gray-700 transition-colors"
                    >
                      {commonT("viewPosition")} 
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
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="max-w-3xl mx-auto text-center py-16 px-6 bg-white border border-gray-200 rounded-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Grid background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <defs>
                  <pattern id="empty-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#empty-grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-bellefair text-2xl uppercase mb-4">{t("noOpenPositions")}</h3>
              <p className="font-avenirNext text-gray-700 mb-8 max-w-xl mx-auto">
                {t("noOpenPositionsDescription")}
              </p>
              <TransitionLink 
                href="/contact"
                className="inline-flex items-center font-bellefair uppercase text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                {commonT("contactUs")}
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
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default JobListings; 