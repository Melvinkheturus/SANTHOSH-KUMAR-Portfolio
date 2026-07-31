"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-12 relative">
      <div className="mb-8">
        <SectionHeader title="Testimonials" />
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">
          Don&apos;t just take my word for it. <span className="text-purple-400">Hear from my clients & colleagues.</span>
        </h3>
        <p className="text-sm text-gray-400 max-w-xl">
          Real feedback from product founders, business leaders, and engineering partners.
        </p>
      </div>

      {/* Testimonials Cards Grid (Inspired by Reference Image 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl bg-[#0e0e12] relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

            <div>
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <Quote size={24} className="text-purple-500/40 mb-3" />

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                &quot;{item.quote}&quot;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                {item.initials}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{item.name}</h4>
                <p className="text-[11px] text-gray-400">
                  {item.position}, {item.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
