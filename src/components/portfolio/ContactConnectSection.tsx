"use client";

import React from "react";
import { profileData } from "@/data/profileData";
import { Mail, Calendar, ArrowUpRight, GraduationCap, Handshake, Mic, Globe } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

interface ContactConnectSectionProps {
  onOpenContact?: () => void;
}

export default function ContactConnectSection({ onOpenContact }: ContactConnectSectionProps = {}) {
  const channels = [
    {
      audience: "For Students & Parents",
      badge: "Admissions & Guidance",
      icon: GraduationCap,
      description:
        "Direct guidance on course selection, program suitability, career pathways, and academic requirements at ASET College.",
      actionText: "Admissions & Student Query",
      subject: "Admissions & Student Inquiry - Prof. Santhosh Kumar",
    },
    {
      audience: "For Institutional & Industry Collaboration",
      badge: "Partnerships & Advisory",
      icon: Handshake,
      description:
        "Open to partnerships in curriculum design, industry-academia programs, safety training initiatives, and institutional advisory work.",
      actionText: "Discuss Institutional Collaboration",
      subject: "Institutional & Industry Partnership Inquiry",
    },
    {
      audience: "For Speaking & Media Engagements",
      badge: "Keynotes & FDPs",
      icon: Mic,
      description:
        "Available for conferences, faculty development programs, and keynote sessions on academic leadership, HSE training, and industry readiness.",
      actionText: "Invite for Keynote / Conference",
      subject: "Speaking & Media Engagement Request",
    },
  ];

  return (
    <footer id="contact" className="w-full">
      {/* Unified Black Card Design */}
      <FadeIn yOffset={20} className="relative bg-zinc-950 text-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-xl border-t-2 border-[#DC2626] space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[36px] font-normal leading-tight tracking-tight text-white">
            <KineticTextReveal
              text="Let's Start a Meaningful Conversation"
              splitBy="words"
              direction="up"
              distance={18}
              stagger={0.06}
              segmentClassName="gradient-red-text"
            />
          </h2>
        </div>

        {/* Primary Calendly & Direct Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          {/* Calendly Schedule Button */}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-3 px-5 gradient-red-bg hover:opacity-95 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-red-950/40 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white shrink-0" />
            <span>Schedule a Meeting with Principal</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Direct Email Button */}
          <a
            href={`mailto:${profileData.email}?subject=${encodeURIComponent("Meeting Request with Principal - Prof. Santhosh Kumar")}`}
            className="w-full sm:w-auto py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors border border-zinc-800"
          >
            <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Direct Email</span>
          </a>
        </div>

        {/* 3 Audience Cards in Dark Card Design */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            const badgeClass =
              idx === 0
                ? "bg-blue-950/70 text-blue-300 border-blue-800/60"
                : idx === 1
                ? "bg-red-950/70 text-red-300 border-red-800/60"
                : "bg-amber-950/70 text-amber-300 border-amber-800/60";
            const borderHover =
              idx === 0
                ? "hover:border-blue-700/60"
                : idx === 1
                ? "hover:border-red-700/60"
                : "hover:border-amber-700/60";
            const iconBg =
              idx === 0
                ? "bg-blue-950/50 text-blue-400 group-hover:bg-blue-900/60"
                : idx === 1
                ? "bg-red-950/50 text-red-400 group-hover:bg-red-900/60"
                : "bg-amber-950/50 text-amber-400 group-hover:bg-amber-900/60";
            const btnClass =
              idx === 0
                ? "bg-zinc-800 hover:bg-blue-900 hover:text-white"
                : idx === 1
                ? "bg-zinc-800 hover:bg-red-900 hover:text-white"
                : "bg-zinc-800 hover:bg-amber-900 hover:text-white";

            return (
              <StaggerItem key={idx}>
                <div
                  className={`h-full bg-zinc-900/80 rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 border border-zinc-800/80 shadow-xs flex flex-col justify-between ${borderHover} transition-colors group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10.5px] font-mono uppercase tracking-wider border px-2.5 py-0.5 rounded-full font-semibold ${badgeClass}`}>
                        {ch.badge}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${iconBg}`}>
                        <IconComp className="w-3.5 h-3.5 transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-[15.5px] font-semibold text-white mb-2 leading-snug">
                      {ch.audience}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 text-justify tracking-wide">
                      {ch.description}
                    </p>
                  </div>

                  <a
                    href={`mailto:${profileData.email}?subject=${encodeURIComponent(ch.subject)}`}
                    className={`w-full py-2.5 px-3 ${btnClass} text-zinc-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors group`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{ch.actionText}</span>
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Connect Links Bar & Official Details */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-zinc-500 font-mono">Official Office:</span>
            <span className="font-mono text-zinc-200 font-medium">{profileData.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors border border-zinc-800"
            >
              <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors border border-zinc-800"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <span>ASET College Portal</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-2 border-t border-zinc-900/80 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {profileData.formalTitle} • {profileData.designation}, {profileData.institution}. All rights reserved.
        </div>
      </FadeIn>
    </footer>
  );
}
