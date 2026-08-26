import React from "react";
import { Trophy, Award, Star } from "lucide-react";

export default function AwardsRecognitionSection() {
  const awards = [
    {
      year: "Academic Rank",
      title: "University First Rank Holder — HSE Department",
      institution: "Alagappa University, Karaikudi",
      description:
        "Secured First Rank in the Health, Safety & Environment (HSE) Department at Alagappa University, Karaikudi — a distinction reflecting academic excellence from the very start of his career.",
      icon: Trophy,
    },
    {
      year: "2025 Honor",
      title: "Best Faculty Award — 2025",
      institution: "Amity Business School, Amity University",
      description:
        "Honored by Amity Business School, Amity University, on Teachers' Day 2025, in recognition of exemplary academic leadership and commitment to student development.",
      icon: Award,
    },
    {
      year: "Global Honor",
      title: "Best Educator Award — International Recognition",
      institution: "Dwijendra University, Bali, Indonesia",
      description:
        "Conferred by Dwijendra University, Bali, Indonesia, acknowledging his contribution to global education and academic leadership on an international stage.",
      icon: Star,
    },
  ];

  return (
    <section id="awards" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
            05 / Honors & Recognitions
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
            Recognition Earned Through
            <br />
            <span className="font-normal text-zinc-900">Consistency, Not Chance.</span>
          </h2>
        </div>

        {/* Distinction Badge */}
        <div className="gradient-red-badge px-3.5 py-1.5 rounded-full border text-xs font-semibold shrink-0 hidden sm:flex items-center gap-1.5 shadow-xs">
          <Trophy className="w-3.5 h-3.5 text-[#991B1B]" />
          <span>3 Major Honors</span>
        </div>
      </div>

      {/* Description Paragraph */}
      <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 max-w-2xl mb-8">
        Distinguished national and international accolades recognizing university first-rank scholarship, exemplary teaching leadership, and cross-border contributions to education.
      </p>

      {/* Awards Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        {awards.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="bg-white/90 rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 hover:bg-white transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider gradient-red-badge px-2.5 py-0.5 rounded-full border">
                    {item.year}
                  </span>
                  <IconComp className="w-4 h-4 text-zinc-400 group-hover:text-[#991B1B] transition-colors" />
                </div>
                <h3 className="text-[15.5px] font-semibold text-zinc-900 leading-snug group-hover:text-zinc-950">
                  {item.title}
                </h3>
                <div className="text-xs gradient-red-text font-medium mt-1">
                  {item.institution}
                </div>
              </div>

              <p className="text-xs text-zinc-600 mt-3.5 leading-relaxed pt-3 border-t border-zinc-100">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
