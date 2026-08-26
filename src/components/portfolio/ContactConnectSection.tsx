import React from "react";
import { profileData } from "@/data/profileData";
import { Mail, ArrowUpRight, GraduationCap, Handshake, Mic, ExternalLink, Globe } from "lucide-react";

interface ContactConnectSectionProps {
  onOpenContact: () => void;
}

export default function ContactConnectSection({ onOpenContact }: ContactConnectSectionProps) {
  const { closing } = profileData;

  const channels = [
    {
      audience: "For Students & Parents",
      badge: "Admissions & Guidance",
      icon: GraduationCap,
      emoji: "🎓",
      description:
        "Have questions about admissions, programs, or campus life? Reach out directly - every query gets a genuine response.",
      actionText: "Admissions & Student Query",
      subject: "Admissions & Student Inquiry - Prof. Santhosh Kumar",
    },
    {
      audience: "For Institutional & Industry Collaboration",
      badge: "Partnerships & Advisory",
      icon: Handshake,
      emoji: "🤝",
      description:
        "Open to partnerships in curriculum design, industry-academia programs, safety training initiatives, and institutional advisory work.",
      actionText: "Discuss Institutional Collaboration",
      subject: "Institutional & Industry Partnership Inquiry",
    },
    {
      audience: "For Speaking & Media Engagements",
      badge: "Keynotes & FDPs",
      icon: Mic,
      emoji: "🎤",
      description:
        "Available for conferences, faculty development programs, and keynote sessions on academic leadership, HSE training, and industry-readiness in education.",
      actionText: "Invite for Keynote / Conference",
      subject: "Speaking & Media Engagement Request",
    },
  ];

  return (
    <footer id="contact" className="space-y-3.5 sm:space-y-4">
      {/* 1. Audience-Segmented Inquiries Card */}
      <section className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
        {/* Top Header */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
            10 / Contact & Inquiries
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
            Let&apos;s Start a
            <br />
            <span className="font-normal text-zinc-900">Meaningful Conversation.</span>
          </h2>
        </div>

        <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-700 max-w-2xl mb-8">
          Whether you&apos;re a student exploring your future, a parent seeking clarity, or an institution looking to collaborate - Prof. Santhosh Kumar welcomes the conversation.
        </p>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider gradient-red-badge border px-2.5 py-0.5 rounded-full font-semibold">
                    {ch.badge}
                  </span>
                  <span className="text-base">{ch.emoji}</span>
                </div>
                <h3 className="text-[15.5px] font-semibold text-zinc-900 mb-2 leading-snug">
                  {ch.audience}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                  {ch.description}
                </p>
              </div>

              <a
                href={`mailto:${profileData.email}?subject=${encodeURIComponent(ch.subject)}`}
                className="w-full py-2.5 px-3 bg-zinc-100 hover:bg-[#991B1B] hover:text-white text-zinc-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors group"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{ch.actionText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Connect Links Bar */}
        <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-700 font-medium">
            <span className="text-zinc-500 font-mono">Official Channels:</span>
            <span className="font-mono text-zinc-900 font-semibold">{profileData.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium flex items-center gap-1.5 transition-colors"
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
              className="px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium flex items-center gap-1.5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-600" />
              <span>College Website</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Institutional Footer Card */}
      <div className="relative bg-zinc-950 text-white rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-lg border-t-2 border-[#DC2626]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Vision & Purpose */}
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
              Institutional Purpose
            </span>

            <div className="space-y-1 my-3">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-light leading-[1.14] tracking-tight text-white">
                {closing.tagline1}
              </h2>
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-light leading-[1.14] tracking-tight text-zinc-400">
                {closing.tagline2}
              </h2>
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-normal leading-[1.14] tracking-tight gradient-red-text">
                {closing.tagline3}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg pt-2">
              {closing.subText}
            </p>
          </div>

          {/* Right Column: Principal's Office Card */}
          <div className="lg:col-span-5 bg-zinc-900/90 rounded-[24px] p-6 border border-zinc-800 space-y-5">
            <div>
              <div className="text-[10.5px] font-mono uppercase tracking-wider gradient-red-text font-semibold">
                Official Office
              </div>
              <h3 className="text-lg font-semibold text-white mt-1">
                {profileData.formalTitle}
              </h3>
              <div className="text-xs text-zinc-400 mt-0.5">
                {profileData.designation} - {profileData.institutionFull}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                {profileData.location}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={onOpenContact}
                className="w-full py-3 px-4 gradient-red-bg text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open Correspondence Modal</span>
              </button>

              <a
                href={profileData.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-zinc-700"
              >
                <span>Visit ASET College Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Grade IOSH (UK)</span>
              <span>ASET Official Portal</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Links */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {profileData.formalTitle}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px]">
            <a href="#hero" className="hover:text-zinc-300 transition-colors">
              Overview
            </a>
            <a href="#executive-profile" className="hover:text-zinc-300 transition-colors">
              Profile
            </a>
            <a href="#leadership-philosophy" className="hover:text-zinc-300 transition-colors">
              Philosophy
            </a>
            <a href="#competencies" className="hover:text-zinc-300 transition-colors">
              Competencies
            </a>
            <a href="#awards" className="hover:text-zinc-300 transition-colors">
              Awards
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
