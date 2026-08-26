import { profileData } from "@/data/profileData";
import { ArrowDown, CheckCircle2, ChevronRight } from "lucide-react";

export default function LeadershipSection() {
  const { leadershipImpact } = profileData;

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            02 / Leadership & Impact
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            Institutional Leadership & Academic Milestones
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base">
            Demonstrated track record of scaling academic institutions, enriching student cohorts, and establishing national and international benchmarks.
          </p>
        </div>

        {/* 4 Large Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16 border-b border-zinc-200">
          {leadershipImpact.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-50 border border-zinc-200 flex flex-col justify-between group hover:border-[#B91C1C] transition-colors"
            >
              <div className="font-sans text-4xl sm:text-5xl font-bold text-zinc-900 group-hover:text-[#B91C1C] transition-colors">
                {metric.value}
              </div>
              <div className="mt-4">
                <div className="font-serif text-base text-zinc-800 font-medium leading-snug">
                  {metric.label}
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  {metric.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Editorial Timeline Underneath */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl text-zinc-900 font-normal">
              Academic Leadership Progression
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Directorial & Advisory
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {leadershipImpact.timeline.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#FAFAFA] border border-zinc-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#B91C1C]">
                      STAGE 0{index + 1}
                    </span>
                    {index < leadershipImpact.timeline.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-zinc-400 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="font-sans text-base font-bold text-zinc-900">
                    {item.role}
                  </h4>
                  <div className="font-serif text-xs text-[#B91C1C] italic mt-0.5 mb-3 font-medium">
                    {item.organization}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B91C1C]" />
                  <span>Mandated Responsibility</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
