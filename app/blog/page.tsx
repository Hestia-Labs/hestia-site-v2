import React from 'react';
import HeroSection from '@/components/blog/HeroSection';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import { blogPosts } from '@/data/blogPosts';
import FilteredBlogContent from '@/components/blog/FilteredBlogContent';

export default function BlogPage() {
  // Select 3 featured posts
  const featuredPosts = blogPosts.slice(0, 3);
  // Remaining posts for the grid
  const morePosts = blogPosts.slice(3);

  // Calculate the category counts for the filter tabs
  const categoryCounts = {
    'UX/UI': morePosts.filter(post => post.category === 'UX/UI').length,
    'Branding': morePosts.filter(post => 
      post.category === 'Branding' || 
      post.category === 'Fashion'
    ).length,
    'Development': morePosts.filter(post => 
      post.category === 'Development' || 
      post.type === 'Web App' || 
      post.type === 'Platform'
    ).length
  };

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
            />
          </div>
        </section>
      )}
    </div>
  );
}