"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { TECH_GROUPS } from "@/data/portfolioData";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-12 relative">
      <div className="mb-8">
        <SectionHeader title="Technologies & Tools" />
        <p className="text-sm text-gray-400 max-w-xl">
          Categorized stack powering production software, AI automation pipelines, and design interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_GROUPS.map((group, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl bg-[#0e0e12] relative overflow-hidden group transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-3 flex items-center justify-between">
              <span>{group.category}</span>
              <span className="text-xs text-purple-400 font-mono">[{group.tools.length}]</span>
            </h3>

            <div className="space-y-2.5">
              {group.tools.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 transition-colors"
                >
                  <span className="text-xs font-semibold text-gray-200">{tool.name}</span>
                  {tool.badge && (
                    <span className="px-2 py-0.5 text-[10px] bg-purple-500/15 text-purple-300 rounded-full border border-purple-500/20">
                      {tool.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
