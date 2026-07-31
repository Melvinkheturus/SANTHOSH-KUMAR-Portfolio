"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURED_PROJECTS } from "@/data/portfolioData";

const INITIAL_COUNT = 4;

export default function SelectedWorkSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.slice(0, INITIAL_COUNT);

  const hasMore = FEATURED_PROJECTS.length > INITIAL_COUNT;

  return (
    <section id="selected-work" className="py-12 relative">
      <SectionHeader title="Featured Projects" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
        <AnimatePresence>
          {visibleProjects.map((project, idx) => {
            const projectUrl = project.link || project.caseStudy?.links?.[0]?.url || "#";

            return (
              <motion.a
                key={project.id}
                href={projectUrl}
                target={projectUrl !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: idx < INITIAL_COUNT ? idx * 0.08 : 0 }}
                className="group block cursor-pointer rounded-2xl bg-[#0e0e12] p-4 sm:p-5 transition-colors hover:bg-[#13131a]"
              >
                {/* Text header inside outer card */}
                <div className="px-1 pt-1 pb-4">
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-1 leading-snug tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-400 font-normal leading-snug tracking-wide">
                    {project.impactBadge}
                  </p>
                </div>

                {/* Inner nested media card */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-black">
                  {project.isVideo ? (
                    <video
                      src={project.thumbnail}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll(prev => !prev)}
            className="px-6 py-3 rounded-md bg-white hover:bg-gray-100 text-black font-semibold text-sm transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {showAll ? "Show Less" : "Load More Projects"}
          </motion.button>
        </div>
      )}
    </section>
  );
}
