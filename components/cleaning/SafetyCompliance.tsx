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
  } | null;
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
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
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
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-8 rounded-full" />
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full mb-4 group-hover:from-amber-400/30 group-hover:to-yellow-500/30 transition-all">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-lg  mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mini Case Highlight */}
          {caseHighlight && caseHighlight.title && caseHighlight.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-amber-400/15 to-yellow-500/15 border-2 border-amber-400/30 rounded-2xl p-8 hover:border-amber-400/50 transition-all shadow-xl shadow-amber-400/10"
            >
              <div className="flex items-start">
                <Award className="w-8 h-8 text-amber-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bellefair mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                    {caseHighlight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {caseHighlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
