import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/types/caseStudy';
import { caseStudies } from '@/data/caseStudies';
import { useTranslations } from 'next-intl';
interface NextProjectProps {
  caseStudy: CaseStudy;
}

export function NextProject({ caseStudy }: NextProjectProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="bg-foreground text-background py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-avenirNext uppercase tracking-widest mb-3 text-background/70">
                {commonT("nextProject")}
            </p>
            <h2 className="font-bellefair text-3xl md:text-5xl max-w-md">
              {caseStudies.find(cs => cs.id === caseStudy.nextProject)?.name || 'Explore More Work'}
            </h2>
          </div>
          <Link 
            href={`/work/${caseStudy.nextProject}`}
            className="mt-8 md:mt-0 group flex items-center space-x-3 font-avenirNext bg-transparent hover:bg-background/10 border border-background/40 hover:border-background px-8 py-4 transition-all duration-300 rounded-sm"
          >
            <span className="font-bellefair uppercase  tracking-wider group-hover:text-white transition-colors duration-300">{commonT("viewProject")}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
} 