"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function TeamSection() {
  const t = useTranslations("AboutPage.teamSection");
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-bellefair text-4xl md:text-5xl uppercase mb-16 text-center">{t("title")}</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-avenirNext text-lg">
            {t("description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team member cards */}
          {[1, 2, 3].map((_, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-sm shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="font-bellefair text-xl uppercase text-center">{t("teamMember")}</h3>
              <p className="text-center text-sm text-gray-600 font-avenirNext">{t("position")}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 