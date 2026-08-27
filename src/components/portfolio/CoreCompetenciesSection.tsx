"use client";

import React from "react";
import { Building2, BarChart3, Handshake, ShieldAlert, Truck, GraduationCap } from "lucide-react";
import { FadeInText, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

export default function CoreCompetenciesSection() {
  const competencies = [
    {
      id: "01",
      title: "Governance",
      domain: "Statutory & Academic Governance",
      icon: Building2,
      description:
        "End-to-end management of university approvals, regulatory compliance, statutory bodies, and university liaison for seamless operations.",
    },
    {
      id: "02",
      title: "Strategic Growth",
      domain: "Institutional Growth & Expansion",
      icon: BarChart3,
      description:
        "Building academic institutions from ground-level infrastructure into nationally recognized centers of learning and research.",
    },
    {
      id: "03",
      title: "Industry Tie-ups",
      domain: "Industry-Academia Partnerships",
      icon: Handshake,
      description:
        "Structuring active corporate collaborations, MOUs, and internship pipelines that give students genuine workplace exposure.",
    },
    {
      id: "04",
      title: "HSE Standards",
      domain: "Occupational Safety & Compliance",
      icon: ShieldAlert,
      description:
        "International-standard safety leadership - Grade IOSH (UK) and OSHA-certified, embedding safety culture into institutional DNA.",
    },
    {
      id: "05",
      title: "Supply Chain",
      domain: "Logistics & Supply Chain Pedagogy",
      icon: Truck,
      description:
        "Pioneering applied logistics curriculum aligned with real-world port, shipping, and supply chain demands across South India.",
    },
    {
      id: "06",
      title: "Mentorship",
      domain: "Student Mentorship & Career Development",
      icon: GraduationCap,
      description:
        "Hands-on guidance for thousands of students - helping them move from classroom theory to career-ready confidence.",
    },
  ];

  return (
    <section id="competencies" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4 text-center">
        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          <KineticTextReveal
            text="Where Strategic Expertise Meets Institutional Execution"
            splitBy="words"
            direction="up"
            distance={18}
            stagger={0.06}
            segmentClassName="gradient-red-text"
          />
        </h2>
      </div>

      <FadeInText delay={0.1} className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 max-w-2xl mx-auto text-center mb-8 tracking-wide">
        <p>
          Six foundational areas of excellence developed across 15+ years of institutional leadership, industry collaboration, and executive coaching.
        </p>
      </FadeInText>

      {/* 6 Visual Cards Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        {competencies.map((item) => {
          const IconComp = item.icon;
          return (
            <StaggerItem key={item.id}>
              <div className="h-full bg-white/90 rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold gradient-red-text">
                      {item.id}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-100/90 flex items-center justify-center shadow-2xs group-hover:bg-red-50 transition-colors">
                      <IconComp className="w-4 h-4 text-zinc-700 group-hover:text-[#991B1B] transition-colors" />
                    </div>
                  </div>

                  <div className="text-[10.5px] font-mono uppercase tracking-wider gradient-red-text font-semibold mb-1">
                    {item.title}
                  </div>
                  <h3 className="text-[15px] font-semibold text-zinc-900 mb-2 leading-snug">
                    {item.domain}
                  </h3>
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
