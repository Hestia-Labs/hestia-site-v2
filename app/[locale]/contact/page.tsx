import React from 'react';
import { Separator } from "@/components/ui/separator";
import ContactForm from '@/components/contact/ContactForm';
import ContactOptions from '@/components/contact/ContactOptions';
import AnimatedWrapper from '@/components/contact/AnimatedWrapper';
import { getTranslations } from 'next-intl/server';
import { PageProps } from '@/.next/types/app/[locale]/contact/page';
export const runtime = "edge";


export async function generateMetadata({ params }: PageProps) {
  const locale = await params;
  const t = await getTranslations({ locale: locale.locale, namespace: 'ContactPage.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ContactPage() {
  const t = await getTranslations('ContactPage');
  
  // Get translated contact options from translation file
  const contactOptions = t.raw('contactOptions');
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <div className="w-full px-8 pt-20 relative">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <AnimatedWrapper>
          <div className="mx-auto max-w-7xl mt-20 relative z-10">
            <h1 className="font-bellefair mb-4 text-6xl lg:text-7xl uppercase">
              {t('heading')}
            </h1>
            <p className="font-avenirNext mb-12 text-2xl lg:text-3xl text-gray-700">
              {t('subheading')}
            </p>
            
            <ContactOptions options={contactOptions} />
            
            <Separator className="my-16" />
            
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <ContactForm />
            </div>
          </div>
        </AnimatedWrapper>
      </div>
      
      <div className="mt-24 py-12 bg-black text-white">
        <div className="mx-auto max-w-7xl px-8">
          <p className="font-bellefair text-xl text-center">
            {t('footer')}
          </p>
        </div>
      </div>
    </div>
  );
}

