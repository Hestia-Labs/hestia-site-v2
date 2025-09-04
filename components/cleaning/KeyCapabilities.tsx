"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trash2, Wind, Sparkles, Eye, Layers, Filter, CheckSquare } from "lucide-react";

interface Capability {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface KeyCapabilitiesProps {
  title: string;
  subtitle: string;
  capabilities: {
    title: string;
    description: string;
  }[];
}

export default function KeyCapabilities({
  title,
  subtitle,
  capabilities,
}: KeyCapabilitiesProps) {
  const icons = [Trash2, Wind, Sparkles, Eye, Layers, Filter, CheckSquare];

  const capabilitiesWithIcons: Capability[] = capabilities.map((cap, index) => ({
    ...cap,
    icon: icons[index % icons.length],
  }));

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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bellefair mb-4">{title}</h2>
            <p className="text-xl text-gray-400">{subtitle}</p>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mt-6" />
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilitiesWithIcons.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                        <Icon className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Service Integration Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 text-center bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bellefair mb-4">COMPLETE SERVICE INTEGRATION</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              All cleaning services are integrated into a single turnkey package for maximum efficiency. 
              We coordinate directly with your project manager or superintendent to fit seamlessly into 
              your construction timeline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg mb-2">Integrated Teams</div>
                <div className="text-gray-400">All services managed in-house</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg mb-2">Quick Deployment</div>
                <div className="text-gray-400">Mobilization in as little as 48 hours</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg mb-2">Safety First</div>
                <div className="text-gray-400">Trained crews, PPE, and site compliance</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
