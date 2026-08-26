"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profileData";
import { ConcaveFillet } from "@/components/ui/Cutout";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenMenu: () => void;
}

export default function HeroSection({ onOpenContact, onOpenMenu }: HeroSectionProps) {
  return (
    <section id="hero" className="relative w-full space-y-3.5 sm:space-y-4">
      {/* Top Navbar Row */}
      <header className="flex items-center justify-between px-2 sm:px-3 select-none">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-zinc-950 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <span className="text-[14.5px] font-semibold tracking-tight text-zinc-900">
            {profileData.name}
          </span>
        </div>

        {/* Center: Available Status Badge */}
        <button
          onClick={onOpenContact}
          className="group flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/90 hover:bg-zinc-200/80 transition-colors cursor-pointer border border-black/5"
          title="Click to view availability & contact"
        >
          <span className="w-1.5 h-1.5 rounded-full gradient-red-bg" />
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[12px] font-medium text-emerald-600 tracking-tight">
              Available
            </span>
          </div>
        </button>

        {/* Right: Menu Action */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu navigation"
          className="text-[13.5px] font-medium text-zinc-800 hover:text-zinc-950 transition-colors px-2.5 py-1 rounded-lg hover:bg-zinc-100/80 cursor-pointer"
        >
          Menu
        </button>
      </header>

      {/* 1. Hero Introduction Card */}
      <div className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
        {/* Profile Identity Row */}
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 shadow-xs border border-white/80 bg-zinc-200">
            <Image
              src={profileData.portraitUrl}
              alt={profileData.name}
              fill
              className="object-cover object-top"
              sizes="56px"
              priority
            />
          </div>
          <div>
            <h2 className="text-[15.5px] sm:text-[16.5px] font-semibold text-zinc-900 leading-tight tracking-tight">
              {profileData.formalTitle}
            </h2>
            <p className="text-[12.5px] sm:text-[13px] text-zinc-500 leading-tight mt-0.5">
              {profileData.designation} — {profileData.institution}
            </p>
          </div>
        </div>

        {/* Hero Heading */}
        <div className="mt-6 sm:mt-7 mb-4">
          <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-light leading-[1.18] tracking-tight text-zinc-900">
            Shaping industry-ready graduates through academic excellence, global exposure, and uncompromising standards of discipline.
          </h1>
        </div>

        {/* Sub-line */}
        <p className="text-[13.5px] sm:text-[14.5px] font-medium leading-relaxed gradient-red-text max-w-xl">
          15+ years bridging classrooms and industry — 10 in academia, 5 in the corporate sector.
        </p>

        {/* Core Pillar Tags */}
        <div className="mt-6 pt-5 border-t border-zinc-200/80 flex flex-wrap gap-2">
          {profileData.corePillars.map((pillar, idx) => (
            <span
              key={idx}
              className="bg-white text-zinc-800 text-[11.5px] sm:text-xs font-medium px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs flex items-center gap-1.5 hover:border-red-200 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full gradient-red-bg shrink-0" />
              <span>{pillar}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. Full-Width Portrait Photo Card with Inverted Cutout Notch */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] rounded-[28px] sm:rounded-[34px] overflow-hidden bg-white select-none shadow-xs border border-black/5">
        {/* Mobile Portrait */}
        <div className="block sm:hidden relative w-full h-full">
          <Image
            src={profileData.portraitUrl}
            alt={profileData.name}
            fill
            priority
            className="object-cover object-top hover:scale-[1.015] transition-transform duration-700 ease-out"
            sizes="100vw"
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
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        {/* Bottom-Right Inverted Rounded Cutout Notch */}
        <div className="absolute bottom-0 right-0 z-10">
          <ConcaveFillet
            position="top-right"
            size={20}
            color="#ffffff"
            className="absolute -top-5 right-0"
          />
          <ConcaveFillet
            position="bottom-left"
            size={20}
            color="#ffffff"
            className="absolute bottom-0 -left-5"
          />
          <div className="bg-white rounded-tl-[20px] pt-2.5 pl-4 pr-5 pb-3 sm:pt-3 sm:pl-5 sm:pr-6 sm:pb-3.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full gradient-red-bg shrink-0" />
            <span className="text-[13px] sm:text-[14px] font-semibold text-zinc-900 tracking-tight">
              {profileData.formalTitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
