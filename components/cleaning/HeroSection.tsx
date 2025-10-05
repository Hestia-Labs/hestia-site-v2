"use client";

import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "../TransitionLink";
import { Button } from "../ui/button";
import { Clock, Shield, CheckCircle, FileText } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  mobilizationTime: string;
  safetyCompliant: string;
  inspectionReady: string;
  ctaText: string;
  downloadText: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  mobilizationTime,
  safetyCompliant,
  inspectionReady,
  ctaText,
  downloadText,
}: HeroSectionProps) {
  const stats = [
    { icon: Clock, label: "mobilization", value: mobilizationTime, suffix: "" },
    { icon: Shield, label: "safety", value: safetyCompliant, suffix: "" },
    { icon: CheckCircle, label: "inspection", value: inspectionReady, suffix: "" },
  ];

  return (
    <section className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-gray-900" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bellefair text-white mb-4 tracking-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
          >
            {subtitle}
          </motion.p>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 border border-amber-400/30 backdrop-blur-sm rounded-xl p-6 hover:border-amber-400/50 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20"
                >
                  <Icon className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
                  <div className="text-3xl  text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.suffix}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <TransitionLink href="/cleaning-contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900  px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                {ctaText}
              </Button>
            </TransitionLink>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-amber-400 text-amber-400 hover:from-amber-400 hover:to-yellow-500 hover:text-gray-900 hover:border-amber-500 font-medium px-8 py-6 text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FileText className="w-5 h-5 mr-2" />
              {downloadText}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
