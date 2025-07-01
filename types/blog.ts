export type BlogPost = {
  id: number;
  name: string;
  category: string;
  type: string;
  tagline: string;
  image: string;
  href: string;
  slug?: string;
  author?: string;
  publishedAt?: string;
  content?: {
    excerpt?: string;
    fullText?: string;
    sections?: {
      title?: string;
      content: string;
      imageUrl?: string;
    }[];
  };
  readTime?: string;
  tags?: string[];
  serviceCategory?: string; // "branding", "software", "uxui" 
}; 