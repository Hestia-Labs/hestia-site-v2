import React from "react";
import Hero from "@/components/Landing/Hero";
import ProjectShowcase from "@/components/Landing/ProjectShowcase";
import Services from "@/components/Landing/Services";
import { Navbar } from "@/components/Navbar";
import { getTranslations } from "next-intl/server";
import AnimatedContactCTA from "@/components/shared/AnimatedContactCTA";

export const runtime = "edge";

export default async function Home() {
  const t = await getTranslations("Home");
  const commonT = await getTranslations("Common");

  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <Hero 
        title={t("heroTitle")}
        description={t("heroDescription")}
        ctaText={t("seeOurWork")}
      />
      
      {/* Project Showcase Section */}
      <ProjectShowcase 
        title={t("projectsTitle")}
        description={t("projectsDescription")}
        ctaText={commonT("seeAllWork")}
      />
      
      {/* Services Section */}
      <section id="services" className="w-full">
        <Services />
      </section>
      
      {/* Contact Section */}
      <AnimatedContactCTA
        title={t("contactTitle")}
        description={t("contactDescription")}
        buttonText={commonT("getInTouch")}
      />
    </div>
  );
}
