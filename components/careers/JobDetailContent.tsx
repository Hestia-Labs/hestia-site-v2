"use client";

import React from "react";
import { motion } from "framer-motion";
import { JobPosition } from "@/data/jobPositions";
import { useTranslations } from "next-intl";
interface JobDetailContentProps {
  job: JobPosition;
}

export function JobDetailContent({ job }: JobDetailContentProps) {
  const commonT = useTranslations("Common");
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bellefair text-2xl uppercase mb-6">{commonT("requirements")}</h2>
            <ul className="font-avenirNext text-gray-700 space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3"></span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-bellefair text-2xl uppercase mb-6">{commonT("responsibilities")}</h2>
            <ul className="font-avenirNext text-gray-700 space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3"></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-bellefair text-2xl uppercase mb-6">{commonT("benefits")}</h2>
            <ul className="font-avenirNext text-gray-700 space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default JobDetailContent; 