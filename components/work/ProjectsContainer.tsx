"use client";

import React from 'react';
import { Project } from '@/types/project';
import ProjectDisplay from './ProjectDisplay';

interface ProjectsContainerProps {
  projects: Project[];
}

export default function ProjectsContainer({ projects }: ProjectsContainerProps) {
  return (
    <section className="px-4 md:px-8 pb-24">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectDisplay 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 