"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Shield, CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  title: string;
  description: string;
  coverageAreas: string[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export default function ServiceOverview({
  title,
  description,
  coverageAreas,
  highlights,
}: ServiceOverviewProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bellefair text-black mb-6">{title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 mb-8 rounded-full" />
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coverage Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border-2 border-amber-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-2xl font-bellefair text-black">Service Coverage Area</h3>
              </div>
              <ul className="space-y-3">
                {coverageAreas.map((area, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-3" />
                    <span className="text-lg">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bellefair text-black mb-6">Highlights</h3>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="border-l-4 border-amber-400 pl-6 py-2 hover:bg-amber-50/50 rounded-r-lg transition-all"
                >
                  <h4 className="text-lg  text-gray-800 mb-1">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
