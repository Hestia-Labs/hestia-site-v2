import React from 'react';
import HeroSection from '@/components/work/HeroSection';
import ProjectsContainer from '@/components/work/ProjectsContainer';
import { projects } from '@/data/projects';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Showcase Section */}
      <ProjectsContainer projects={projects} />
    </div>
  );
}
