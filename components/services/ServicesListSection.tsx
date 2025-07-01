"use client";

import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { useTranslations } from "next-intl";

interface Service {
  id: string;
  title: string;
  description: string;
  path: string;
}

export function ServicesListSection() {
  const t = useTranslations("ServicesPage.servicesList");
  
  // Define services data
  const services: Service[] = [
    {
      id: "software-development",
      title: t("softwareDevelopment.title"),
      description: t("softwareDevelopment.description"),
      path: "/services/software-development",
    },
    {
      id: "digital-marketing",
      title: t("digitalMarketing.title"),
      description: t("digitalMarketing.description"),
      path: "/services/digital-marketing",
    },
    {
      id: "ux-design",
      title: t("uxDesign.title"),
      description: t("uxDesign.description"),
      path: "/services/ux-design",
    }
  ];

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        {services.map((service, index) => (
          <ServiceItem 
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ServiceItem({ service, index }: { service: Service, index: number }) {
  return (
    <div className="border-t border-gray-200 pt-5">
      <TransitionLink 
        href={service.path} 
        className="group block"
      >
        <div className="flex items-start gap-5">
          <div className="mt-1 text-gray-400 group-hover:text-primary transition-colors duration-200">
            <ServiceIcon index={index} />
          </div>
          
          <div>
            <h3 className="font-bellefair text-lg uppercase mb-1 group-hover:text-primary transition-colors duration-200">{service.title}</h3>
            <p className="font-avenirNext text-gray-600">{service.description}</p>
          </div>
        </div>
      </TransitionLink>
    </div>
  );
}

// Custom SVG icons for each service with circles and lines - simplified
function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // Software Development
    <svg key="software" width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="30" cy="30" r="15" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
      />
      <path 
        d="M15 30 L45 30" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
      <path 
        d="M30 15 L30 45" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
    </svg>,
    
    // Digital Marketing
    <svg key="marketing" width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="30" cy="30" r="15" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
      />
      <path 
        d="M15 15 L45 45" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
      <path 
        d="M45 15 L15 45" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
    </svg>,
    
    // UX Design
    <svg key="ux" width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="30" cy="30" r="15" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
      />
      <path 
        d="M20 20 L40 40" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
      <path 
        d="M20 40 L40 20" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
    </svg>
  ];

  return icons[index];
}