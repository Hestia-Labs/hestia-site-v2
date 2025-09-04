"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Leaf, FileCheck } from "lucide-react";

interface SafetyComplianceProps {
  title: string;
  description: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  caseHighlight: {
    title: string;
    description: string;
  };
}

export default function SafetyCompliance({
  title,
  description,
  features,
  caseHighlight,
}: SafetyComplianceProps) {
  const iconMap: { [key: string]: React.ElementType } = {
    shield: Shield,
    award: Award,
    leaf: Leaf,
    filecheck: FileCheck,
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bellefair mb-6">{title}</h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-8" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Shield;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mini Case Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg p-8"
          >
            <div className="flex items-start">
              <Award className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bellefair mb-3 text-yellow-500">
                  {caseHighlight.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {caseHighlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
