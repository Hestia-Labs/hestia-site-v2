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
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
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
                          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-6 rounded-full" />
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
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-amber-400/20 rounded-xl p-6 hover:border-amber-400/40 hover:bg-white/15 transition-all duration-300 h-full hover:shadow-lg hover:shadow-amber-400/10 hover:scale-105">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-lg group-hover:from-amber-400/30 group-hover:to-yellow-500/30 transition-all">
                        <Icon className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    <h3 className="text-xl  mb-3">{capability.title}</h3>
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
            className="mt-16 text-center bg-gradient-to-r from-amber-400/15 to-yellow-500/15 border-2 border-amber-400/30 rounded-2xl p-8 hover:border-amber-400/50 transition-all shadow-xl shadow-amber-400/10"
          >
            <h3 className="text-2xl font-bellefair mb-4">COMPLETE SERVICE INTEGRATION</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              All cleaning services are integrated into a single turnkey package for maximum efficiency. 
              We coordinate directly with your project manager or superintendent to fit seamlessly into 
              your construction timeline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500  text-lg mb-2">Integrated Teams</div>
                <div className="text-gray-400">All services managed in-house</div>
              </div>
              <div className="text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500  text-lg mb-2">Quick Deployment</div>
                <div className="text-gray-400">Mobilization in as little as 48 hours</div>
              </div>
              <div className="text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500  text-lg mb-2">Safety First</div>
                <div className="text-gray-400">Trained crews, PPE, and site compliance</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
