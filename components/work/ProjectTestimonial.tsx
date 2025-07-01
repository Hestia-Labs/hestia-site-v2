import React from 'react';
import { CaseStudy } from '@/types/caseStudy';

interface ProjectTestimonialProps {
  caseStudy: CaseStudy;
}

export function ProjectTestimonial({ caseStudy }: ProjectTestimonialProps) {
  return (
    <section className="py-24 bg-gradient-to-r from-muted/10 via-background to-muted/10">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <svg
          className="w-12 h-12 text-primary/30 mx-auto mb-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.22-1.49 2.067-2.03V5.99c-1.852.37-3.39 1.39-4.621 3.03-1.23 1.65-1.84 3.36-1.84 5.14 0 1.65.44 3.09 1.32 4.29.88 1.21 1.98 1.81 3.3 1.81 1.02 0 1.87-.41 2.54-1.22.66-.82 1-1.79 1-2.94zm10.5 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.22-1.49 2.067-2.03V5.99c-1.852.37-3.39 1.39-4.621 3.03-1.23 1.65-1.84 3.36-1.84 5.14 0 1.65.44 3.09 1.32 4.29.88 1.21 1.98 1.81 3.3 1.81 1.02 0 1.87-.41 2.54-1.22.66-.82 1-1.79 1-2.94z" />
        </svg>
        <blockquote className="font-avenirNext text-xl md:text-2xl italic text-foreground/80 mb-10 leading-relaxed relative">
          <span className="absolute -left-4 top-0 text-6xl text-primary/10">&ldquo;</span>
          {caseStudy.testimonial.quote}
          <span className="absolute -right-4 bottom-0 text-6xl text-primary/10">&rdquo;</span>
        </blockquote>
        <div className="relative mt-12 inline-block before:content-[''] before:absolute before:w-16 before:h-[1px] before:bg-primary/40 before:-top-6 before:left-1/2 before:-translate-x-1/2">
          <p className="font-bellefair text-lg mb-1">{caseStudy.testimonial.author}</p>
          <p className="font-avenirNext text-foreground/60 text-sm">{caseStudy.testimonial.position}</p>
        </div>
      </div>
    </section>
  );
} 