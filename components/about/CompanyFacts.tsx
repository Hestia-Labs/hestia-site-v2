"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CompanyFacts() {
  const t = useTranslations("AboutPage.companyFacts");
  const facts = t.raw("facts") as Array<{
    metric: string;
    label: string;
    description: string;
  }>;

  // SVG definitions for the facts
  const factSvgs = [
    // Founding Brothers SVG
    <svg key="brothers" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-5 right-5 opacity-50">
      <circle cx="30" cy="40" r="15" stroke="currentColor" strokeWidth="1" />
      <circle cx="70" cy="40" r="15" stroke="currentColor" strokeWidth="1" />
      <line x1="45" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="55" x2="70" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="70" y1="55" x2="30" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="50" cy="80" r="10" stroke="currentColor" strokeWidth="1" />
    </svg>,
    
    // Client Satisfaction SVG
    <svg key="satisfaction" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-5 right-5 opacity-50">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      <path d="M35 50 L45 60 L65 40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 3" />
      <line x1="50" y1="90" x2="50" y2="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 3" />
      <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="70" cy="30" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="70" cy="70" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="30" cy="70" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>,
    
    // Coffee SVG
    <svg key="coffee" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-5 right-5 opacity-50">
      <path d="M30 60 C30 40, 70 40, 70 60" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="30" y1="60" x2="30" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="70" y1="60" x2="70" y2="80" stroke="currentColor" strokeWidth="1" />
      <path d="M30 80 C30 85, 70 85, 70 80" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M75 50 C85 50, 85 60, 75 60" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M40 30 C40 25, 50 15, 55 30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" fill="none" />
      <path d="M50 30 C50 20, 60 15, 65 30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" fill="none" />
      <circle cx="40" cy="45" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="60" cy="45" r="3" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-bellefair text-4xl md:text-5xl uppercase mb-16 text-center">{t("title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {facts.map((fact, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-8 rounded-sm shadow-sm flex flex-col items-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {factSvgs[index]}
              <div className="flex w-full flex-col items-start justify-start relative z-10">
                <div className="flex w-full flex-col items-start justify-start">
                  <h3 className="font-bellefair text-5xl md:text-6xl text-primary mb-2">{fact.metric}</h3>
                </div>
                <h4 className="font-bellefair text-xl uppercase mb-3">{fact.label}</h4>
                <p className="font-avenirNext text-sm text-gray-600">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 