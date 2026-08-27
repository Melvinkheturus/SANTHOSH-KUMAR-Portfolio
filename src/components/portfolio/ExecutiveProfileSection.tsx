"use client";

import React from "react";
import { profileData } from "@/data/profileData";
import { GraduationCap, Briefcase } from "lucide-react";
import { FadeInText, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

export default function ExecutiveProfileSection() {
  const { about } = profileData;

  return (
    <section id="executive-profile" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-6 text-center">
        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          <KineticTextReveal
            text="15-Year Track Record in Higher Education & Leadership"
            splitBy="words"
            direction="up"
            distance={18}
            stagger={0.06}
            segmentClassName="gradient-red-text"
          />
        </h2>
      </div>

      {/* Narrative Paragraphs */}
      <FadeInText delay={0.1} className="space-y-3.5 text-[13.5px] sm:text-[14.5px] text-zinc-700 leading-relaxed w-full mb-8 text-justify tracking-[0.015em]">
        <p>
          Prof. Santhosh Kumar is a distinguished academic leader and industry professional with over 15 years of experience, including 10 years in academia and 5 years in the industrial sector. He currently serves as the Principal of Aset College of Science and Technology, Chennai, functioning under the approval of Alagappa University.
        </p>
        <p>
          He is recognized for academic excellence, institutional development, and successfully integrating industry requirements into higher education curricula. His leadership emphasizes producing industry-ready graduates equipped with professional competence, discipline, and global exposure.
        </p>
      </FadeInText>

      {/* Experience Breakdown Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
        {/* Total (Navy / Leadership) */}
        <StaggerItem>
          <div className="h-full bg-white rounded-[12px] sm:rounded-[14px] p-5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-blue-200 transition-colors">
            <div className="text-[11px] font-mono uppercase tracking-wider gradient-navy-text font-semibold">
              {about.experienceSplit.totalLabel}
            </div>
            <div className="text-3xl sm:text-4xl font-light text-zinc-900 my-2">
              {about.experienceSplit.total}
            </div>
            <p className="text-[11.5px] text-zinc-500 tracking-wide text-justify">
              Combined academic leadership and senior industrial operations.
            </p>
          </div>
        </StaggerItem>

        {/* Academia (Red / Academic Foundation) */}
        <StaggerItem>
          <div className="h-full bg-white rounded-[12px] sm:rounded-[14px] p-5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider gradient-red-text font-semibold">
              <span>{about.experienceSplit.academiaLabel}</span>
              <div className="w-6 h-6 rounded-full gradient-red-bg flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-light text-zinc-900 my-2">
              {about.experienceSplit.academia} Yrs
            </div>
            <p className="text-[11.5px] text-zinc-500 tracking-wide text-justify">
              Principalship, curriculum architecture & institutional governance.
            </p>
          </div>
        </StaggerItem>

        {/* Industry (Gold / Corporate Excellence) */}
        <StaggerItem>
          <div className="h-full bg-white rounded-[12px] sm:rounded-[14px] p-5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-amber-200 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider gradient-gold-text font-semibold">
              <span>{about.experienceSplit.industryLabel}</span>
              <div className="w-6 h-6 rounded-full gradient-gold-bg flex items-center justify-center text-white shadow-xs">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-light text-zinc-900 my-2">
              {about.experienceSplit.industry} Yrs
            </div>
            <p className="text-[11.5px] text-zinc-500 tracking-wide text-justify">
              Occupational safety, hazard risk control & compliance audits.
            </p>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
