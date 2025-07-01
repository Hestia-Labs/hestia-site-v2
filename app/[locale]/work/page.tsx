import React from 'react';
import HeroSection from '@/components/work/HeroSection';
import ProjectsContainer from '@/components/work/ProjectsContainer';
import { projects } from '@/data/projects';




export const runtime = "edge";

export default async function WorkPage() {


  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <HeroSection />
      <ProjectsContainer projects={projects} />
    </div>
  );
}
