"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profileData";
import { FadeIn } from "@/components/ui/Motion";
import { DiaText } from "@/components/ui/dia-text";

interface HeroSectionProps {
  onOpenContact?: () => void;
  onOpenMenu?: () => void;
}

export default function HeroSection({ onOpenContact, onOpenMenu }: HeroSectionProps = {}) {
  return (
    <section id="hero" className="relative w-full space-y-3.5 sm:space-y-4">
      {/* 1. Hero Introduction Card */}
      <FadeIn duration={0.6} yOffset={12} className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300 text-center">
        {/* Hero Heading (Top Light Navy to Bottom Dark Navy-Black Gradient) */}
        <div className="mb-4">
          <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-normal leading-[1.2] tracking-tight gradient-navy-charcoal-text max-w-3xl mx-auto">
            Shaping industry-ready graduates through academic excellence, global exposure, and uncompromising standards of discipline.
          </h1>
        </div>

        {/* Sub-line (Top Light Navy to Bottom Dark Navy-Black Gradient) */}
        <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-2xl mx-auto tracking-wide font-semibold gradient-navy-charcoal-text">
          15+ years bridging classrooms and industry &mdash; 10 in academia, 5 in the corporate sector.
        </p>
      </FadeIn>

      {/* 2. Full-Width Portrait Photo Card with Top-Left Big Name & DiaText Animation (No BG Card) */}
      <FadeIn delay={0.1} duration={0.65} yOffset={16} className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-white select-none shadow-xs border border-black/5">
        {/* Mobile Portrait */}
        <div className="block sm:hidden relative w-full h-full">
          <Image
            src={profileData.portraitUrl}
            alt={profileData.name}
            fill
            priority
            className="object-cover object-top hover:scale-[1.015] transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>

        {/* Desktop Studio Portrait */}
        <div className="hidden sm:block relative w-full h-full bg-[#f8f7f5]">
          <Image
            src={profileData.portraitDesktopUrl}
            alt={profileData.name}
            fill
            priority
            className="object-cover object-center hover:scale-[1.015] transition-transform duration-700 ease-out"
            sizes="(max-width: 1060px) 100vw, 1060px"
          />
        </div>

        {/* Top-Left 2-Line Header (Directly on Image, No BG Card) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10 max-w-xs sm:max-w-sm md:max-w-md pointer-events-none">
          {/* Line 1: Name */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 leading-tight">
            {profileData.formalTitle}
          </h2>

          {/* Line 2: Principal & College with DiaText (Navy, Red, Gold) */}
          <p className="mt-1 text-xs sm:text-sm md:text-[14.5px] font-medium text-zinc-700 tracking-tight">
            <DiaText
              colors={["#1E3A8A", "#DC2626", "#D97706", "#0F172A", "#B91C1C"]}
              textColor="#374151"
              text="Principal - ASET College of Science & Technology"
              duration={1.8}
            />
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
