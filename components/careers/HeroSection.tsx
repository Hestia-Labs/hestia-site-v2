import React from "react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("CareersPage.HeroSection");

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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-bellefair text-5xl md:text-6xl uppercase text-nowrap">
            {t("title")}
          </h1>
          <p className="font-avenirNext text-gray-600 max-w-2xl mx-auto mt-6">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 