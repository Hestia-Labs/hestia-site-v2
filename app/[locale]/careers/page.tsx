import React from "react";
import HeroSection from "@/components/careers/HeroSection";
import PhilosophySection from "@/components/careers/PhilosophySection";
import JobListings from "@/components/careers/JobListings";
import CTASection from "@/components/careers/CTASection";

export const runtime = "edge";

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-24">
      <HeroSection />
      <PhilosophySection />
      <JobListings />
      <CTASection />
    </div>
  );
}