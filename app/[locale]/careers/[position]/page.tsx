import React from "react";
import { notFound } from "next/navigation";
import { jobPositions } from "@/data/jobPositions";
import JobDetailHeader from "@/components/careers/JobDetailHeader";
import JobDetailContent from "@/components/careers/JobDetailContent";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import { PageProps } from "@/.next/types/app/[locale]/careers/[position]/page";

export const runtime = "edge";

export default async function JobPositionPage({ params }: PageProps) {
  const  position  = await params;
  const job = jobPositions.find((job) => job.id === position.position);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-16">
      <JobDetailHeader job={job} />
      <JobDetailContent job={job} />
      <JobApplicationForm />
    </div>
  );
}

