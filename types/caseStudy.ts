export interface CaseStudy {
  id: string;
  name: string;
  client: string;
  category: string;
  type: string;
  year: string;
  duration: string;
  role: string;
  overview: string;
  tagline: string;
  heroImage: string;
  challenge: string;
  approach: string;
  colorPalette: {
    name: string;
    hex: string;
    rgb: string;
  }[];
  typography: {
    primary: string;
    secondary: string;
    weights: string[];
  };
  projectImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
  outcomes: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  nextProject: string;
} 