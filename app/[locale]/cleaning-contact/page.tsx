import React from "react";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import ContactForm from "@/components/cleaning/ContactForm";

export const runtime = "edge";

export default async function CleaningContactPage() {
  const t = await getTranslations("CleaningContact");
  
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-gray-900" />
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #fbbf2410 1px, transparent 1px),
                             linear-gradient(to bottom, #fbbf2410 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bellefair mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">{t("hero.title")}</h1>
            <p className="text-xl text-gray-200">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title={t("form.title")}
        subtitle={t("form.subtitle")}
        formLabels={{
          fullName: t("form.labels.fullName"),
          email: t("form.labels.email"),
          phone: t("form.labels.phone"),
          company: t("form.labels.company"),
          projectType: t("form.labels.projectType"),
          location: t("form.labels.location"),
          timeline: t("form.labels.timeline"),
          squareFootage: t("form.labels.squareFootage"),
          details: t("form.labels.details"),
          submitButton: t("form.labels.submitButton"),
          submitting: t("form.labels.submitting"),
        }}
        projectTypes={[
          t("form.projectTypes.commercial"),
          t("form.projectTypes.residential"),
          t("form.projectTypes.renovation"),
          t("form.projectTypes.industrial"),
        ]}
        timelines={[
          t("form.timelines.immediate"),
          t("form.timelines.week"),
          t("form.timelines.month"),
          t("form.timelines.planning"),
        ]}
      />
    </div>
  );
}
