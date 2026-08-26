import { profileData } from "@/data/profileData";
import { Check } from "lucide-react";

export default function ExpertiseSection() {
  const { expertise } = profileData;

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            03 / Areas of Expertise
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            Strategic Competencies & Domains of Impact
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base">
            Grounded in rigorous academic frameworks and practical industrial applications.
          </p>
        </div>

        {/* 5 Clean Editorial Blocks */}
        <div className="space-y-4">
          {expertise.map((block) => (
            <div
              key={block.id}
              className="bg-white border border-zinc-200 p-6 sm:p-8 hover:border-[#B91C1C] transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number & Domain Title */}
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-zinc-300 group-hover:text-[#B91C1C] transition-colors">
                    {block.id}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-zinc-900">
                      {block.title}
                    </h3>
                    <div className="font-serif text-xs text-[#B91C1C] font-medium italic mt-0.5">
                      {block.domain}
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="lg:col-span-5 text-sm text-zinc-600 leading-relaxed">
                  {block.description}
                </div>

                {/* Sub-competencies checklist */}
                <div className="lg:col-span-3 space-y-1.5 pt-2 lg:pt-0 lg:border-l lg:border-zinc-100 lg:pl-6">
                  {block.subCompetencies.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-zinc-700 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
