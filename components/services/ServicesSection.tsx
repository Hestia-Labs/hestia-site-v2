"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("ServicesPage.servicesSection");
  
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <p className="font-avenirNext text-gray-700 leading-relaxed">
          {t("paragraph1")}
        </p>
        
        <p className="font-avenirNext text-gray-700 leading-relaxed">
          {t("paragraph2")}
        </p>
        
        <div className="mt-8 p-4 border-l-2 border-primary">
          <h3 className="font-bellefair uppercase mb-2 text-primary">{t("approachTitle")}</h3>
          <p className="font-avenirNext text-gray-600">
            {t("approachDescription")}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 