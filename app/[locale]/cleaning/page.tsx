import React from "react";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/cleaning/HeroSection";
import ServiceOverview from "@/components/cleaning/ServiceOverview";
import KeyCapabilities from "@/components/cleaning/KeyCapabilities";
import TechnicalSpecs from "@/components/cleaning/TechnicalSpecs";
import ProcessApproach from "@/components/cleaning/ProcessApproach";
import SafetyCompliance from "@/components/cleaning/SafetyCompliance";
import TransitionLink from "@/components/TransitionLink";
import { Button } from "@/components/ui/button";

export const runtime = "edge";

export default async function CleaningServices() {
  const t = await getTranslations("CleaningServices");
  
  return (
    <div className="relative min-h-screen">
      <Navbar invert />
      
      <HeroSection
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        mobilizationTime={t("hero.stats.mobilization")}
        safetyCompliant={t("hero.stats.safety")}
        inspectionReady={t("hero.stats.inspection")}
        ctaText={t("hero.ctaText")}
        downloadText={t("hero.downloadText")}
      />

      <div id="services">
        <ServiceOverview
        title={t("overview.title")}
        description={t("overview.description")}
        coverageAreas={[
          t("overview.coverage.area1"),
          t("overview.coverage.area2"),
          t("overview.coverage.area3"),
        ]}
        highlights={[
          {
            title: t("overview.highlights.h1.title"),
            description: t("overview.highlights.h1.description"),
          },
          {
            title: t("overview.highlights.h2.title"),
            description: t("overview.highlights.h2.description"),
          },
          {
            title: t("overview.highlights.h3.title"),
            description: t("overview.highlights.h3.description"),
          },
          {
            title: t("overview.highlights.h4.title"),
            description: t("overview.highlights.h4.description"),
          },
        ]}
        />
      </div>

      <KeyCapabilities
        title={t("capabilities.title")}
        subtitle={t("capabilities.subtitle")}
        capabilities={[
          {
            title: t("capabilities.c1.title"),
            description: t("capabilities.c1.description"),
          },
          {
            title: t("capabilities.c2.title"),
            description: t("capabilities.c2.description"),
          },
          {
            title: t("capabilities.c3.title"),
            description: t("capabilities.c3.description"),
          },
          {
            title: t("capabilities.c4.title"),
            description: t("capabilities.c4.description"),
          },
          {
            title: t("capabilities.c5.title"),
            description: t("capabilities.c5.description"),
          },
          {
            title: t("capabilities.c6.title"),
            description: t("capabilities.c6.description"),
          },
          {
            title: t("capabilities.c7.title"),
            description: t("capabilities.c7.description"),
          },
        ]}
      />

      <TechnicalSpecs
        title={t("technical.title")}
        specifications={[
          {
            feature: t("technical.specs.mobilization.feature"),
            detail: t("technical.specs.mobilization.detail"),
          },
          {
            feature: t("technical.specs.crew.feature"),
            detail: t("technical.specs.crew.detail"),
          },
          {
            feature: t("technical.specs.equipment.feature"),
            detail: t("technical.specs.equipment.detail"),
          },
          {
            feature: t("technical.specs.safety.feature"),
            detail: t("technical.specs.safety.detail"),
          },
          {
            feature: t("technical.specs.quality.feature"),
            detail: t("technical.specs.quality.detail"),
          },
        ]}
        applications={[
          t("technical.applications.app1"),
          t("technical.applications.app2"),
          t("technical.applications.app3"),
          t("technical.applications.app4"),
          t("technical.applications.app5"),
        ]}
      />

      <div id="process">
        <ProcessApproach
        title={t("process.title")}
        steps={[
          {
            title: t("process.step1.title"),
            description: t("process.step1.description"),
          },
          {
            title: t("process.step2.title"),
            description: t("process.step2.description"),
          },
          {
            title: t("process.step3.title"),
            description: t("process.step3.description"),
          },
          {
            title: t("process.step4.title"),
            description: t("process.step4.description"),
          },
          {
            title: t("process.step5.title"),
            description: t("process.step5.description"),
          },
          {
            title: t("process.step6.title"),
            description: t("process.step6.description"),
          },
        ]}
        />
      </div>

      <div id="safety">
        <SafetyCompliance
        title={t("safety.title")}
        description={t("safety.description")}
        features={[
          {
            icon: "shield",
            title: t("safety.features.f1.title"),
            description: t("safety.features.f1.description"),
          },
          {
            icon: "award",
            title: t("safety.features.f2.title"),
            description: t("safety.features.f2.description"),
          },
          {
            icon: "leaf",
            title: t("safety.features.f3.title"),
            description: t("safety.features.f3.description"),
          },
          {
            icon: "filecheck",
            title: t("safety.features.f4.title"),
            description: t("safety.features.f4.description"),
          },
        ]}
        caseHighlight={{
          title: t("safety.caseHighlight.title"),
          description: t("safety.caseHighlight.description"),
        }}
        />
      </div>

      {/* Final CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bellefair text-black mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <TransitionLink href="/cleaning-contact">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg">
              {t("cta.buttonText")}
            </Button>
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}
