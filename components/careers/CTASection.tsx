import React from "react";
import TransitionLink  from "@/components/TransitionLink";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("CareersPage.CTASection");

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-bellefair text-3xl uppercase mb-6">
          {t("title")}
        </h2>
        <p className="font-avenirNext text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <TransitionLink
          href="/contact" 
          className=" bg-primary hover:bg-primary/80 text-white font-bellefair uppercase py-3 px-8 rounded-sm transition-colors duration-300  inline-flex items-center"
        >
          {t("buttonText")}
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
    </section>
  );
}

export default CTASection; 