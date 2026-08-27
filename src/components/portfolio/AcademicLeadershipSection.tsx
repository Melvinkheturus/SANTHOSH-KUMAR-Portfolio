"use client";

import React from "react";
import { CheckCircle2, BookOpen, Users, Globe, Award, Sparkles } from "lucide-react";
import { FadeInText, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

export default function AcademicLeadershipSection() {
  const leadershipHighlights = [
    {
      role: "Subject Expert, Board of Studies",
      scope: "MBA & B.Sc. Safety Programs - Bharathidasan University",
      description:
        "Shaping curriculum design, course outcome frameworks, and academic standards at the university level.",
      badge: "Curriculum Architect",
      icon: BookOpen,
    },
    {
      role: "Ph.D. Doctoral Committee Member",
      scope: "Doctoral Research Guidance - AMET University",
      description:
        "Guiding research scholars, evaluating doctoral progress, and upholding rigorous academic inquiry standards.",
      badge: "Research Stewardship",
      icon: Sparkles,
    },
    {
      role: "Organizing Secretary - International Conference (ICAMS-2023)",
      scope: "Global Academic Forum",
      description:
        "Convened researchers, academicians, and industry experts worldwide on advanced manufacturing and safety systems.",
      badge: "Global Convening",
      icon: Globe,
    },
    {
      role: "External Academic Audit Expert",
      scope: "Institutional Quality Assurance",
      description:
        "Evaluated academic processes, faculty performance benchmarks, and institutional quality metrics.",
      badge: "Quality Governance",
      icon: Award,
    },
    {
      role: "Chairman - Inspection Committee",
      scope: "Alagappa University Collaborative Programs",
      description:
        "Led evaluation teams ensuring collaborating institutions meet the rigorous operational standards of Alagappa University.",
      badge: "University Liaison",
      icon: CheckCircle2,
    },
    {
      role: "Resource Person for Career Guidance",
      scope: "5,000+ Students Mentored",
      description:
        "Personally delivered career development and industry transition masterclasses to 5,000+ students across multiple colleges and universities.",
      badge: "Career Mentorship",
      icon: Users,
    },
  ];

  return (
    <section id="academic-leadership" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4 text-center">
        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          <KineticTextReveal
            text="Academic Governance & Institutional Leadership"
            splitBy="words"
            direction="up"
            distance={18}
            stagger={0.06}
            segmentClassName="gradient-red-text"
          />
        </h2>
      </div>

      {/* Leadership Narrative */}
      <FadeInText delay={0.1} className="space-y-3.5 text-[13.5px] sm:text-[14.5px] text-zinc-700 leading-relaxed w-full mb-8 text-justify tracking-[0.015em]">
        <p>
          As <strong className="font-semibold text-zinc-900">Principal of Aset College of Science and Technology</strong>, Prof. Santhosh Kumar oversees the academic and administrative direction of the institution, ensuring it operates to the standards expected under Alagappa University&apos;s approval - while pushing for the innovation that keeps students competitive beyond it.
        </p>
        <p className="text-xs sm:text-sm font-semibold text-zinc-900 uppercase tracking-wide pt-1 text-center">
          His leadership extends well past campus walls:
        </p>
      </FadeInText>

      {/* 6 Key Mandates Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {leadershipHighlights.map((item, index) => {
          const IconComp = item.icon;
          return (
            <StaggerItem key={index}>
              <div className="h-full bg-white/90 rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-mono font-bold gradient-red-badge border px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <IconComp className="w-4 h-4 text-[#991B1B]" />
                  </div>
                  <h3 className="text-[15.5px] font-semibold text-zinc-900 mt-1 leading-snug">
                    {item.role}
                  </h3>
                  <div className="text-xs gradient-red-text font-medium mt-0.5 mb-2.5">
                    {item.scope}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed text-justify tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
