import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudies';
import WorkHeroMinimal from '@/components/work/WorkHeroMinimal';
import { ProjectBrief } from '@/components/work/ProjectBrief';
import { ProjectGallery } from '@/components/work/ProjectGallery';
import { BrandIdentity } from '@/components/work/BrandIdentity';
import { ResultsOutcomes } from '@/components/work/ResultsOutcomes';
import { ProjectTestimonial } from '@/components/work/ProjectTestimonial';
import { NextProject } from '@/components/work/NextProject';
import { ScrollIndicator } from '@/components/work/ScrollIndicator';
import { PageProps } from '@/.next/types/app/[locale]/work/[work]/page';

export const runtime = "edge";

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const workId = await params;
  const caseStudy = caseStudies.find(cs => cs.id === workId.work);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Hestia Labs',
      description: 'The requested case study could not be found.',
    };
  }
  
  return {
    title: `${caseStudy.name} Case Study | Hestia Labs`,
    description: caseStudy.overview,
    openGraph: {
      title: `${caseStudy.name} Case Study | Hestia Labs`,
      description: caseStudy.overview,
      images: [caseStudy.heroImage],
    },
  };
}

type Props = PageProps;

export default async function CaseStudyPage({ params }: Props) {
  const workId = await params;
  const caseStudy = caseStudies.find(cs => cs.id === workId.work);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Minimalist Hero Section */}
      <WorkHeroMinimal caseStudy={caseStudy} />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Project Brief */}
      <ProjectBrief caseStudy={caseStudy} />

      {/* Project Images */}
      <ProjectGallery caseStudy={caseStudy} />

      {/* Brand Identity */}
      <BrandIdentity caseStudy={caseStudy} />

      {/* Results & Outcomes */}
      <ResultsOutcomes caseStudy={caseStudy} />

      {/* Testimonial */}
      <ProjectTestimonial caseStudy={caseStudy} />

      {/* Next Project */}
      <NextProject caseStudy={caseStudy} />
    </main>
  );
}
