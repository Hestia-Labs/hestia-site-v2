export interface ProcessStep {
  name: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Service {
  id: string;
  title: string;
  heading: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  benefits: string[];
  processSteps: ProcessStep[];
  featuredCaseStudy: CaseStudy;
} 