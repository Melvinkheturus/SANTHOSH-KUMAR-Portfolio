"use client";

import React from "react";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import HeroSection from "@/components/sections/HeroSection";
import WhoAmISection from "@/components/sections/WhoAmISection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CreativeShowcaseSection from "@/components/sections/CreativeShowcaseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  const sections = [
    { id: "hero", label: "01. Hero" },
    { id: "selected-work", label: "02. Work" },
    { id: "experience", label: "03. Journey" },
    { id: "tech-stack", label: "04. Tech Stack" },
    { id: "creative-showcase", label: "05. Creative" },
    { id: "testimonials", label: "06. Proof" },
    { id: "contact", label: "07. Contact" },
  ];

  return (
    <main className="min-h-screen bg-[#000000] p-4 sm:p-6 md:p-10 text-white overflow-x-hidden" aria-label="Manikandan's Portfolio">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator sections={sections} />

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* 01. Hero */}
        <HeroSection />

        {/* Who Am I / Bio Section */}
        <WhoAmISection />

        {/* 02. Selected Work */}
        <SelectedWorkSection />

        {/* 03. Experience & Journey */}
        <ExperienceSection />

        {/* 04. Technologies & Tools */}
        <TechStackSection />

        {/* 05. Creative Showcase */}
        <CreativeShowcaseSection />

        {/* 06. Testimonials */}
        <TestimonialsSection />

        {/* 07. Let's Build Something Great */}
        <ContactCTASection />
      </div>
    </main>
  );
}