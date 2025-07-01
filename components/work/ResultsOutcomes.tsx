import React from 'react';
import { CaseStudy } from '@/types/caseStudy';
import { useTranslations } from 'next-intl';
interface ResultsOutcomesProps {
  caseStudy: CaseStudy;
}

export function ResultsOutcomes({ caseStudy }: ResultsOutcomesProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="py-24 bg-gradient-to-b from-muted/5 to-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-bellefair text-3xl md:text-4xl mb-14 relative inline-block">
        {commonT("resultsOutcomes")}
          <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-foreground/10"></span>
          <span className="absolute -bottom-4 left-0 w-1/4 h-[2px] bg-primary"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {caseStudy.outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="p-8 bg-background rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex items-start group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <defs>
                    <pattern id="typography-grid-primary" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#typography-grid-primary)" />
                </svg>
              </div>
              <span className="font-bellefair text-primary/20 text-6xl absolute -top-1 -left-1 group-hover:text-primary/30 transition-colors duration-300">
                0{index + 1}
              </span>
              <p className="text-foreground/80 font-avenirNext text-left relative z-10 group-hover:text-foreground transition-colors duration-300">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 