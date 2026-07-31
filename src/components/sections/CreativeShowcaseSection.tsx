"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import TVGlitchShowcase from "@/components/ui/TVGlitchShowcase";

export default function CreativeShowcaseSection() {
  return (
    <section id="creative-showcase" className="py-12 relative">
      <div className="mb-8">
        <SectionHeader title="Creative Showcase" />
        <p className="text-sm text-gray-400 max-w-xl">
          AI product commercials, cinematic media, football sports graphics, and interactive scroll motion assets.
        </p>
      </div>

      <TVGlitchShowcase />
    </section>
  );
}
