"use client";

import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "../TransitionLink";
import { useTranslations } from "next-intl";

export function JoinUsCTA() {
  const t = useTranslations("AboutPage.joinUsCTA");
  
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="font-bellefair text-4xl md:text-5xl uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h2>
        
        <motion.p 
          className="font-avenirNext text-lg md:text-xl max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("description")}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TransitionLink href="/contact" className="inline-block border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 py-3 px-8 rounded-sm">
            <span className="font-bellefair uppercase text-xl tracking-wider">
              {t("contactUs")}
            </span>
          </TransitionLink>
          <TransitionLink href="/careers" className="inline-block bg-white text-black hover:bg-opacity-90 transition-colors duration-300 py-3 px-8 rounded-sm">
            <span className="font-bellefair uppercase text-xl tracking-wider">
              {t("careers")}
            </span>
          </TransitionLink>
        </motion.div>
      </div>
    </section>
  );
} 