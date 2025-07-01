import React from 'react';
import HeroSection from '@/components/blog/HeroSection';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import { blogPosts } from '@/data/blogPosts';
import FilteredBlogContent from '@/components/blog/FilteredBlogContent';
import { getTranslations } from 'next-intl/server';
import { PageProps } from '@/.next/types/app/[locale]/blog/page';

export const runtime = "edge";


export async function generateMetadata({ params }: PageProps) {
  const locale = await params;
  const t = await getTranslations({ locale: locale.locale, namespace: 'BlogPage.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogPage() {
  const t = await getTranslations('BlogPage');

  // Select 3 featured posts
  const featuredPosts = blogPosts.slice(0, 3);
  // Remaining posts for the grid
  const morePosts = blogPosts.slice(3);

  // Original category names mapped to their internal key values for filtering
  const filterIdMap = {
    'UX/UI': 'ux-ui',
    'Branding': 'branding',
    'Development': 'development'
  };

  // Map categories to their translated names
  const categoryMap = {
    'UX/UI': t('categories.uxui'),
    'Branding': t('categories.branding'),
    'Development': t('categories.development')
  };

  // Calculate the category counts for the filter tabs
  const categoryCounts = {
    [categoryMap['UX/UI']]: morePosts.filter(post => post.category === 'UX/UI').length,
    [categoryMap['Branding']]: morePosts.filter(post => 
      post.category === 'Branding' || 
      post.category === 'Fashion'
    ).length,
    [categoryMap['Development']]: morePosts.filter(post => 
      post.category === 'Development' || 
      post.type === 'Web App' || 
      post.type === 'Platform'
    ).length
  };

  // Console log for server-side debugging
  console.log('Category map:', categoryMap);
  console.log('Category counts:', categoryCounts);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Posts Section */}
      <section className="relative px-4 md:px-8 py-16 -mt-80">
        <div className="container mx-auto bg-white rounded-xl shadow-lg p-8 relative">
          <FeaturedPosts posts={featuredPosts} />
        </div>
      </section>
      
      {/* Filtered Posts Section */}
      {morePosts.length > 0 && (
        <section className="px-4 md:px-8 py-16">
          <div className="container mx-auto">
            <FilteredBlogContent 
              posts={morePosts} 
              categories={categoryCounts}
              filterIdMap={filterIdMap}
            />
          </div>
        </section>
      )}
    </div>
  );
}