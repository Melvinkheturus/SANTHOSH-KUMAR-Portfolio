"use client";

import React from "react";
import { Trophy, Award, Star } from "lucide-react";
import { FadeInText, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

export default function AwardsRecognitionSection() {
  const awards = [
    {
      year: "Academic Rank",
      title: "University First Rank - M.Tech.",
      institution: "Bharathidasan University",
      description:
        "Graduated at the top of his class with academic distinction in Industrial Safety and Engineering, demonstrating domain mastery from the very start of his academic journey.",
      icon: Trophy,
    },
    {
      year: "2018",
      title: "Best Teacher Award",
      institution: "DK International Research Foundation (DKIRF)",
      description:
        "Recognized for pedagogical excellence, student-centered curriculum delivery, and consistent commitment to high instructional standards.",
      icon: Award,
    },
    {
      year: "International",
      title: "International Distinguished Academic Award",
      institution: "Dwijendra University, Bali, Indonesia",
      description:
        "Conferred by Dwijendra University, Bali, Indonesia, acknowledging his contribution to global education and academic leadership on an international stage.",
      icon: Star,
    },
  ];

  return (
    <section id="awards" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-4">
        <div className="flex flex-col items-center">
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
            <KineticTextReveal
              text="Distinctions Earned Through Academic Excellence"
              splitBy="words"
              direction="up"
              distance={18}
              stagger={0.06}
              segmentClassName="gradient-red-text"
            />
          </h2>
        </div>

        {/* Distinction Badge */}
        <FadeIn delay={0.15} className="gradient-gold-badge px-3.5 py-1.5 rounded-full border text-xs font-semibold flex items-center gap-1.5 shadow-xs">
          <Trophy className="w-3.5 h-3.5 text-[#B45309]" />
          <span>3 Major Honors</span>
        </FadeIn>
      </div>

      {/* Description Paragraph */}
      <FadeInText delay={0.1} className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 max-w-2xl mx-auto text-center mb-8 tracking-wide">
        <p>
          Distinguished national and international accolades recognizing university first-rank scholarship, exemplary teaching leadership, and cross-border contributions to education.
        </p>
      </FadeInText>

      {/* Awards Cards Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        {awards.map((item, idx) => {
          const IconComp = item.icon;
          const badgeClass = idx === 0 ? "gradient-gold-badge" : idx === 1 ? "gradient-red-badge" : "gradient-navy-badge";
          const subTextClass = idx === 0 ? "gradient-gold-text" : idx === 1 ? "gradient-red-text" : "gradient-navy-text";
          const borderHover = idx === 0 ? "hover:border-amber-300" : idx === 1 ? "hover:border-red-300" : "hover:border-blue-300";
          const iconHover = idx === 0 ? "group-hover:text-[#B45309]" : idx === 1 ? "group-hover:text-[#991B1B]" : "group-hover:text-[#1E3A8A]";

          return (
            <StaggerItem key={idx}>
              <div className={`h-full bg-white rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between ${borderHover} transition-all group`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10.5px] font-mono font-bold uppercase tracking-wider ${badgeClass} px-2.5 py-0.5 rounded-full border`}>
                      {item.year}
                    </span>
                    <IconComp className={`w-4 h-4 text-zinc-400 ${iconHover} transition-colors`} />
                  </div>
                  <h3 className="text-[15.5px] font-semibold text-zinc-900 leading-snug group-hover:text-zinc-950">
                    {item.title}
                  </h3>
                  <div className={`text-xs ${subTextClass} font-medium mt-1`}>
                    {item.institution}
                  </div>
                </div>

                <p className="text-xs text-zinc-600 mt-3.5 leading-relaxed pt-3 border-t border-zinc-100 text-justify tracking-wide">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
