"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectDisplayProps {
  project: Project;
  index: number;
}

export default function ProjectDisplay({ project, index }: ProjectDisplayProps) {
  // Alternate layout based on index
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center"
    >
      {/* Image Section */}
      <div className={`md:col-span-7 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-sm shadow-md"
        >
          <Link href={project.href}>
            <div className="relative aspect-[16/9] group cursor-pointer">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
              />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-bellefair text-white text-xl uppercase">View Project</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
      
      {/* Content Section */}
      <div className={`md:col-span-5 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-primary text-sm font-avenirNext">{project.year}</span>
            <h2 className="font-bellefair text-3xl md:text-4xl uppercase">{project.name}</h2>
            <div className="flex items-center gap-2 text-sm text-foreground/70 font-avenirNext mt-2">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.type}</span>
            </div>
          </div>
          
          <p className="font-avenirNext text-foreground/80">
            {project.description}
          </p>
          
          <Link href={project.href} className="inline-block mt-4">
            <div className="border-b-2 border-primary pb-1 group transition-colors">
              <span className="font-bellefair uppercase tracking-wider text-lg group-hover:text-primary transition-colors">
                Case Study
              </span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 