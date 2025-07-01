"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CaseStudy } from '@/types/caseStudy';
import { useTranslations } from 'next-intl';

interface ProjectBriefProps {
  caseStudy: CaseStudy;
}

export function ProjectBrief({ caseStudy }: ProjectBriefProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <h2 className="font-bellefair text-3xl md:text-4xl mb-10 relative after:content-[''] after:absolute after:w-16 after:h-[2px] after:bg-primary after:bottom-0 after:left-0 after:-mb-4">
            {commonT("projectOverview")}
          </h2>
          <p className="text-foreground/80 font-avenirNext text-lg leading-relaxed mb-12 max-w-prose">
            {caseStudy.overview}
          </p>
          <Separator className="my-14 bg-foreground/10 w-full" />
          <div className="space-y-16">
            <div className="group">
              <h3 className="font-bellefair text-2xl mb-6 flex items-center relative">
                <span className="relative">
                  {commonT("theChallenge")}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </h3>
              <p className="text-foreground/80 font-avenirNext leading-relaxed max-w-prose">
                {caseStudy.challenge}
              </p>
            </div>
            <div className="group">
              <h3 className="font-bellefair text-2xl mb-6 flex items-center relative">
                <span className="relative">
                  {commonT("ourApproach")}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </span>
              </h3>
              <p className="text-foreground/80 font-avenirNext leading-relaxed max-w-prose">
                {caseStudy.approach}
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 space-y-12 md:sticky md:top-24 md:self-start md:h-fit bg-muted/10 p-8 rounded-sm backdrop-blur-sm">
          <div className="group">
            <h4 className="font-bellefair text-xl mb-3 relative after:content-[''] after:absolute after:w-6 after:h-[1px] after:bg-primary/70 after:bottom-0 after:left-0 after:-mb-1">{commonT("client")}</h4>
            <p className="text-foreground/80 font-avenirNext group-hover:text-foreground transition-colors">{caseStudy.client}</p>
          </div>
          <div className="group">
            <h4 className="font-bellefair text-xl mb-3 relative after:content-[''] after:absolute after:w-6 after:h-[1px] after:bg-primary/70 after:bottom-0 after:left-0 after:-mb-1">{commonT("year")}</h4>
            <p className="text-foreground/80 font-avenirNext group-hover:text-foreground transition-colors">{caseStudy.year}</p>
          </div>
          <div className="group">
            <h4 className="font-bellefair text-xl mb-3 relative after:content-[''] after:absolute after:w-6 after:h-[1px] after:bg-primary/70 after:bottom-0 after:left-0 after:-mb-1">{commonT("duration")}</h4>
            <p className="text-foreground/80 font-avenirNext group-hover:text-foreground transition-colors">{caseStudy.duration}</p>
          </div>
          <div className="group">
            <h4 className="font-bellefair text-xl mb-3 relative after:content-[''] after:absolute after:w-6 after:h-[1px] after:bg-primary/70 after:bottom-0 after:left-0 after:-mb-1">{commonT("ourRole")}</h4>
            <p className="text-foreground/80 font-avenirNext group-hover:text-foreground transition-colors">{caseStudy.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 