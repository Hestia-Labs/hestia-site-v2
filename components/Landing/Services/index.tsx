"use client";

import React from "react";
import ServiceItem from "./ServiceItem";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  const commonT = useTranslations("Common");

  const servicesData = [
    {
      title: t("uxuiDesign"),
      content: t("uxuiDesignDesc"),
      href: "/services/ux-ui-design"
    },
    {
      title: t("softwareDevelopment"),
      content: t("softwareDevelopmentDesc"),
      href: "/services/software-development"
    },
    {
      title: t("brandIdentity"),
      content: t("brandIdentityDesc"),
      href: "/services/brand-creation"
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background grid pattern */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="font-bellefair text-4xl md:text-5xl uppercase mb-4">{t("title")}</h2>
          <p className="font-avenirNext text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services List */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              content={service.content}
              href={service.href}
              learnMoreText={commonT("learnMore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
