"use client";

import React from "react";
import { motion } from "framer-motion";

interface Specification {
  feature: string;
  detail: string;
}

interface TechnicalSpecsProps {
  title: string;
  specifications: Specification[];
  applications: string[];
}

export default function TechnicalSpecs({
  title,
  specifications,
  applications,
}: TechnicalSpecsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bellefair text-black mb-12 text-center">{title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Specifications Table */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
                <h3 className="text-xl font-bellefair">Technical Specifications</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-0">
                        <td className="py-4 pr-4 font-medium text-gray-700">{spec.feature}</td>
                        <td className="py-4 text-gray-900 ">{spec.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Typical Applications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 p-4">
                <h3 className="text-xl font-bellefair ">Typical Applications</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {applications.map((app, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{app}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
