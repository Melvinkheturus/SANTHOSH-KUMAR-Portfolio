import { profileData } from "@/data/profileData";
import { BookOpen, Presentation, Users2 } from "lucide-react";

export default function ConferencesSection() {
  const { conferences } = profileData;

  const icons = [GlobeIcon, NationalIcon, FdpIcon];

  return (
    <section className="py-20 lg:py-24 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            07 / Scholarly Engagement
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            Conferences & Academic Forums
          </h2>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base">
            Active contribution to peer-reviewed discourse, symposium chairs, and faculty development programs.
          </p>
        </div>

        {/* Horizontal Metric Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {conferences.stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200 p-8 flex flex-col justify-between hover:border-[#B91C1C] transition-colors shadow-xs"
            >
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-[#B91C1C] mb-4">
                Category 0{idx + 1}
              </div>
              <div>
                <div className="font-sans text-5xl font-bold text-zinc-900 mb-2">
                  {item.value}
                </div>
                <div className="font-serif text-lg text-zinc-800 font-medium">
                  {item.label}
                </div>
                <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Framing Sentence */}
        <div className="p-6 bg-white border border-zinc-200 flex items-center justify-between flex-wrap gap-4">
          <div className="font-serif text-base sm:text-lg text-zinc-800 italic">
            "{conferences.statement}"
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Scholarly Mandate
          </span>
        </div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return null;
}
function NationalIcon() {
  return null;
}
function FdpIcon() {
  return null;
}
