import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { Separator } from "@/components/ui/separator";
import { PageProps } from '@/.next/types/app/[locale]/blog/[blog]/page';
import { getTranslations } from 'next-intl/server';


export const runtime = "edge";

export default async function BlogPostPage({ params }: PageProps) {
  const blog = await params;
  const commonT = await getTranslations("Common");
  // Find the blog post by slug
  const post = blogPosts.find(
    (p) => (p.slug && p.slug === blog.blog) || p.href.split('/').pop() === blog.blog
  );

  if (!post) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Enhanced Minimal Hero Section */}
      <section className="w-full relative pt-36 pb-16 md:pb-24 px-4 bg-background">
        {/* Refined grid pattern with better opacity control */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Subtle accent line for visual structure */}
        <div className="absolute top-24 left-0 right-0 mx-auto w-16 h-[1px] bg-primary/30"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Category, Type, and ReadTime with improved spacing and visual hierarchy */}
          <div className="mb-10 flex items-center justify-center space-x-4 text-sm font-medium tracking-wide">
            <span className="text-primary">{post.category}</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-muted-foreground">{post.type}</span>
            {post.readTime && (
              <>
                <span className="text-muted-foreground/60">•</span>
                <span className="text-muted-foreground">{post.readTime}</span>
              </>
            )}
          </div>
          
          {/* Refined typography for title */}
          <h1 className="font-bellefair text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1]">
            {post.name}
          </h1>
          
          {/* Improved tagline presentation */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {post.tagline}
          </p>
          
          {/* Author and date with enhanced styling */}
          {post.author && post.publishedAt && (
            <div className="flex items-center justify-center text-sm mb-8">
              <span className="font-medium">{commonT("by")} {post.author}</span>
              <span className="mx-2 text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">{post.publishedAt}</span>
            </div>
          )}
        </div>
      </section>
      
      {/* Main Content */}
      <article className="w-full max-w-3xl mx-auto px-4 py-10 md:py-16">
        {/* Featured Image with subtle shadow and rounded corners */}
        <div className="w-full aspect-[16/9] relative rounded-md overflow-hidden mb-16 shadow-sm">
          <Image
            src={post.image}
            fill
            alt={post.name}
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content Excerpt with improved typography */}
        {post.content?.excerpt && (
          <div className="mb-16">
            <p className="text-xl md:text-2xl font-avenirNext font-light leading-relaxed text-primary/90">
              {post.content.excerpt}
            </p>
          </div>
        )}
        
        {/* Enhanced Tags presentation */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted/70 text-sm rounded-full hover:bg-muted transition-colors duration-200 border border-muted-foreground/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Separator className="my-12 opacity-30" />
        
        {/* Content Sections with improved typography and spacing */}
        {post.content?.sections && (
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-20">
                {section.title && (
                  <h2 className="font-bellefair text-2xl md:text-3xl mb-8 relative pb-3 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-16 before:bg-primary/30">
                    {section.title}
                  </h2>
                )}
                
                {section.content && (
                  <div className="font-avenirNext space-y-7">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="leading-relaxed text-foreground/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                
                {section.imageUrl && (
                  <div className="mt-10 mb-8 w-full aspect-[16/9] relative rounded-md overflow-hidden shadow-sm">
                    <Image
                      src={section.imageUrl}
                      fill
                      alt={section.title || `Image for ${post.name}`}
                      className="object-cover hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* Improved Back to Blog navigation */}
        <div className="mt-24 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {commonT("backToAllArticles")}
          </Link>
        </div>
      </article>
      
      {/* Related Posts Section - for future implementation */}
    </main>
  );
}