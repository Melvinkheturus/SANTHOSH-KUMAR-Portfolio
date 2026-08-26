import { profileData } from "@/data/profileData";
import { Network, Building2 } from "lucide-react";

export default function AffiliationsSection() {
  const { affiliations } = profileData;

  return (
    <section id="network" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            08 / Professional Network
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            Institutional & Industrial Affiliations
          </h2>
          <p className="text-zinc-600 mt-2 text-sm sm:text-base">
            Active professional memberships bridging industry bodies, statutory safety councils, and higher-education skill councils.
          </p>
        </div>

        {/* 6 Clean Editorial Grid Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAFAFA] border border-zinc-200 hover:border-[#B91C1C] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-base font-bold text-[#B91C1C] bg-white border border-red-100 px-3 py-1">
                    {item.acronym}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Member
                  </span>
                </div>
                <h3 className="font-sans text-base font-bold text-zinc-900 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-200 text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Active Institutional Standing</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
