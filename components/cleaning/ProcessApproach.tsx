"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSearch, FileCheck, Truck, Sparkles, Search, FileText } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ProcessApproachProps {
  title: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export default function ProcessApproach({ title, steps }: ProcessApproachProps) {
  const icons = [FileSearch, FileCheck, Truck, Sparkles, Search, FileText];
  
  const processSteps: ProcessStep[] = steps.map((step, index) => ({
    number: (index + 1).toString(),
    title: step.title,
    description: step.description,
    icon: icons[index % icons.length],
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bellefair text-black mb-12 text-center">{title}</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-16" />

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-black">{step.number}</span>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-300" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <Icon className="w-6 h-6 text-yellow-600 mr-3" />
                        <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
