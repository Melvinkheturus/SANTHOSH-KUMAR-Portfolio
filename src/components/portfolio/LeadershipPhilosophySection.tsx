"use client";

import React from "react";
import { Compass, HeartHandshake } from "lucide-react";
import { FadeInText, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

export default function LeadershipPhilosophySection() {
  const principles = [
    {
      number: "01",
      title: "Education should be a bridge, not a checkpoint.",
      description:
        "A degree means little if it doesn't prepare a student for what comes next. Every program, partnership, and policy decision I make starts with employability and real-world readiness in mind.",
    },
    {
      number: "02",
      title: "Discipline is the foundation of excellence.",
      description:
        "Institutions run well when standards are clear and consistently upheld - for faculty and students alike. I believe structure creates the space where genuine learning and growth happen.",
    },
    {
      number: "03",
      title: "Global exposure builds better leaders.",
      description:
        "Some of the most valuable lessons happen outside the classroom - through international collaboration, cross-cultural learning, and exposure to how the world works beyond one campus or one country.",
    },
  ];

  return (
    <section id="leadership-philosophy" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4 text-center">
        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          <KineticTextReveal
            text="Leadership Philosophy & Core Educational Principles"
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
          Three non-negotiable principles that guide every institutional decision, curriculum advancement, and student interaction.
        </p>
      </FadeInText>

      {/* 3 Principles Cards */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
        {principles.map((p, idx) => (
          <StaggerItem key={idx}>
            <div className="h-full bg-white/90 rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold gradient-red-text">
                    PRINCIPLE {p.number}
                  </span>
                  <Compass className="w-4 h-4 text-zinc-400" />
                </div>
                <h3 className="text-[15.5px] font-semibold text-zinc-900 mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed text-justify tracking-wide">
                  {p.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Warm Personal Note to Students & Parents */}
      <FadeIn delay={0.15} className="bg-white rounded-[14px] sm:rounded-[16px] p-6 sm:p-7 border border-black/5 shadow-xs relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full gradient-red-bg flex items-center justify-center text-white shrink-0 shadow-xs mt-0.5">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="text-[11px] font-mono uppercase tracking-wider gradient-red-text font-semibold">
              A Personal Commitment
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              To the Students & Parents Who Trust Us with This Journey
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic text-justify tracking-wide">
              &ldquo;Know that every decision made here, from curriculum to campus life, is made with your future in mind. My door is open, and your success is personal to me, not just professional.&rdquo;
            </p>
            <div className="pt-2 text-xs font-semibold text-zinc-900">
              - Prof. Santhosh Kumar, <span className="font-normal text-zinc-500">Principal</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
