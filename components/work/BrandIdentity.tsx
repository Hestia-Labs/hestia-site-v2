import React from 'react';
import { CaseStudy } from '@/types/caseStudy';
import { useTranslations } from 'next-intl';
interface BrandIdentityProps {
  caseStudy: CaseStudy;
}

export function BrandIdentity({ caseStudy }: BrandIdentityProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="py-24 bg-muted/5">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="font-bellefair text-3xl md:text-4xl mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-[2px] after:bg-primary/40 after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
        {commonT("brandIdentity")}
        </h2>
        
        {/* Color Palette */}
        <div className="mb-20">
          <h3 className="font-bellefair text-2xl mb-10 text-center">
            <span className="border-b-2 border-foreground/10 pb-2 px-4">{commonT("colorPalette")}</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {caseStudy.colorPalette.map((color) => (
              <div key={color.name} className="flex flex-col items-center group relative">
                <div 
                  className="w-20 h-20 rounded-sm shadow-md mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className="font-avenirNext font-medium text-sm transition-colors duration-300 group-hover:text-primary">{color.name}</p>
                <p className="font-avenirNext text-xs text-foreground/60 mb-1">{color.hex}</p>
                <p className="font-avenirNext text-xs text-foreground/60">RGB: {color.rgb}</p>
                <span className="absolute -top-1 right-0 w-5 h-5 bg-background border border-foreground/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="sr-only">Color details</span>
                  <span className="block w-1 h-1 rounded-full bg-foreground"></span>
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Typography */}
        <div>
          <h3 className="font-bellefair text-2xl mb-10 text-center">
            <span className="border-b-2 border-foreground/10 pb-2 px-4">{commonT("typography")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-sm shadow-sm transform transition-transform duration-500 hover:-translate-y-1 hover:shadow-md">
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
              <h4 className="font-bellefair text-xl mb-6 relative after:content-[''] after:absolute after:w-16 after:h-[1px] after:bg-primary/60 after:bottom-0 after:left-0 after:-mb-3">{commonT("primaryFont")}</h4>
              <p className="text-4xl mb-4 tracking-wide" style={{ fontFamily: caseStudy.typography.primary }}>
                {caseStudy.typography.primary}
              </p>
              <p className="text-foreground/60 font-avenirNext text-sm mt-4 border-l-2 border-foreground/10 pl-3">
                Weights: {caseStudy.typography.weights.join(', ')}
              </p>
            </div>
            <div className="bg-background p-8 rounded-sm shadow-sm transform transition-transform duration-500 hover:-translate-y-1 hover:shadow-md">
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
              <h4 className="font-bellefair text-xl mb-6 relative after:content-[''] after:absolute after:w-16 after:h-[1px] after:bg-primary/60 after:bottom-0 after:left-0 after:-mb-3">{commonT("secondaryFont")}</h4>
              <p className="text-4xl mb-4 tracking-wide" style={{ fontFamily: caseStudy.typography.secondary }}>
                {caseStudy.typography.secondary}
              </p>
              <p className="text-foreground/60 font-avenirNext text-sm mt-4 border-l-2 border-foreground/10 pl-3">
                Weights: {caseStudy.typography.weights.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 