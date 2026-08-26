import React from "react";
import { TrendingUp, Users, Globe, BookOpen, Award, Layers, Compass } from "lucide-react";

export default function ImpactNumbersSection() {
  const stats = [
    {
      value: "15+ Years",
      label: "Combined Experience",
      sublabel: "10 in academia, 5 in corporate industry",
      icon: TrendingUp,
      featured: true,
    },
    {
      value: "5,000+",
      label: "Students Mentored",
      sublabel: "Personally guided through career masterclasses",
      icon: Users,
      featured: true,
    },
    {
      value: "5",
      label: "International Conferences",
      sublabel: "Convened & chaired across disciplines",
      icon: Globe,
      featured: false,
    },
    {
      value: "3",
      label: "National Conferences",
      sublabel: "Academic & industry symposia organized",
      icon: Layers,
      featured: false,
    },
    {
      value: "25+",
      label: "Seminars, Workshops & FDPs",
      sublabel: "Faculty development & capacity building programs",
      icon: BookOpen,
      featured: false,
    },
    {
      value: "9",
      label: "Countries Engaged",
      sublabel: "Cross-border academic collaborations & visits",
      icon: Compass,
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
    <section id="impact-numbers" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
          08 / Impact in Numbers
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
          The Scale of a Career Built on
          <br />
          <span className="font-normal text-zinc-900">Presence, Not Just Position.</span>
        </h2>
      </div>

      <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-700 max-w-2xl mb-8">
        A quantifiable record of academic stewardship, student empowerment, and international scholarly engagement.
      </p>

      {/* Top 2 Primary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-4">
        {stats.slice(0, 2).map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="bg-white/95 rounded-[24px] p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors group"
            >
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
                <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                  {item.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Remaining 5 Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-3">
        {stats.slice(2).map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="bg-white/90 rounded-[20px] p-4 sm:p-4.5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors group"
            >
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
                <div className="text-[11px] text-zinc-500 mt-0.5 leading-tight">
                  {item.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
