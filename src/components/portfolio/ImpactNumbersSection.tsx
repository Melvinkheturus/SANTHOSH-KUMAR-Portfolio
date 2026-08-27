"use client";

import React from "react";
import { TrendingUp, Users, Globe, BookOpen, Award, Layers, Compass } from "lucide-react";
import { FadeInText, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

export default function ImpactNumbersSection() {
  const stats = [
    {
      value: "15+ Years",
      label: "Combined Experience",
      sublabel: "10 years in academia, 5 years in industry",
      icon: TrendingUp,
      featured: true,
    },
    {
      value: "5,000+",
      label: "Students Mentored",
      sublabel: "Career guidance and industrial readiness",
      icon: Users,
      featured: true,
    },
    {
      value: "8",
      label: "Conferences Organized",
      sublabel: "5 international, 3 national academic conferences",
      icon: Globe,
      featured: false,
    },
    {
      value: "25+",
      label: "Seminars & FDPs",
      sublabel: "Faculty empowerment and capacity building",
      icon: BookOpen,
      featured: false,
    },
    {
      value: "10+",
      label: "International Academic Visits",
      sublabel: "Across Singapore, Malaysia, Indonesia, and UAE",
      icon: Compass,
      featured: false,
    },
    {
      value: "6+",
      label: "Industry & Professional Bodies",
      sublabel: "Grade IOSH, CII, NSC, ICC, IWPA, ISTD, LSSC",
      icon: Layers,
      featured: false,
    },
    {
      value: "3",
      label: "Major Awards & Honors",
      sublabel: "Including international recognition in Indonesia",
      icon: Award,
      featured: false,
    },
  ];

  return (
    <section id="impact-numbers" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4 text-center">
        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          <KineticTextReveal
            text="Quantifiable Milestones & Academic Leadership Impact"
            splitBy="words"
            direction="up"
            distance={18}
            stagger={0.06}
            segmentClassName="gradient-red-text"
          />
        </h2>
      </div>

      <FadeInText delay={0.1} className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-700 max-w-2xl mx-auto text-center mb-8 tracking-wide">
        <p>
          A quantifiable record of academic stewardship, student empowerment, and international scholarly engagement.
        </p>
      </FadeInText>

      {/* Top 2 Primary Stats */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-4">
        {stats.slice(0, 2).map((item, idx) => {
          const IconComp = item.icon;
          return (
            <StaggerItem key={idx}>
              <div className="h-full bg-white/95 rounded-[12px] sm:rounded-[14px] p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-light text-zinc-900 group-hover:text-[#991B1B] transition-colors">
                    {item.value}
                  </span>
                  <div className="w-8 h-8 rounded-full gradient-red-bg flex items-center justify-center text-white shadow-xs">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-sm sm:text-[15px] font-semibold text-zinc-900">
                    {item.label}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed tracking-wide">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Remaining 5 Stats Grid */}
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-3">
        {stats.slice(2).map((item, idx) => {
          const IconComp = item.icon;
          return (
            <StaggerItem key={idx}>
              <div className="h-full bg-white/90 rounded-[12px] sm:rounded-[14px] p-4 sm:p-4.5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-light text-zinc-900 group-hover:text-[#991B1B] transition-colors">
                    {item.value}
                  </span>
                  <IconComp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#991B1B] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-900 leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5 leading-tight tracking-wide">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
