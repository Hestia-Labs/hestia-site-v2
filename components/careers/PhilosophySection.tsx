import React from "react";
import { useTranslations } from "next-intl";

export function PhilosophySection() {
  const t = useTranslations("CareersPage.PhilosophySection");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bellefair text-3xl uppercase mb-8 text-center">
            {t("title")}
          </h2>
          <p className="font-avenirNext text-lg text-gray-700 mb-6">
            {t("description")}
          </p>
          <p className="font-avenirNext text-lg text-gray-700 mb-6">
            {t("description2")} 
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection; 