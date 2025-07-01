import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import FeaturedCaseStudy from '@/components/services/FeaturedCaseStudy';
import CallToAction from '@/components/services/CallToAction';
import { PageProps } from '@/.next/types/app/[locale]/services/[service]/page';
import { Metadata } from 'next';

export const runtime = "edge";

type Props = PageProps;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!params) {
    return {
      title: 'Service Not Found | Hestia Labs',
      description: 'The requested service could not be found.',
    };
  }

  const serviceId = await params;

  const service = services.find(s => s.id === serviceId.service);
  
  if (!service) {
    return {
      title: 'Service Not Found | Hestia Labs',
      description: 'The requested service could not be found.',
    };
  }
  
  return {
    title: `${service.title} | Hestia Labs`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  if (!params) {
    notFound();
  }

  const serviceId = await params;
  
  const service = services.find(s => s.id === serviceId.service);
  
  if (!service) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero 
        title={service.title}
        heading={service.heading}
        description={service.description}
        serviceId={service.id}
      />
      
      {/* Overview Section */}
      <ServiceOverview 
        fullDescription={service.fullDescription}
        technologies={service.technologies}
      />
      
      {/* Benefits Section */}
      <ServiceBenefits benefits={service.benefits} />
      
      {/* Process Section */}
      <ServiceProcess processSteps={service.processSteps} />
      
      {/* Featured Case Study */}
      <FeaturedCaseStudy caseStudy={service.featuredCaseStudy} />
      
      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
