import { profileData } from "@/data/profileData";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function AboutSection() {
  const { about } = profileData;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            01 / Executive Profile
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Concise Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
              {about.heading}
            </h2>
            <div className="font-mono text-sm tracking-wide text-[#B91C1C] font-semibold uppercase">
              {about.tagline}
            </div>

            <p className="text-base sm:text-lg text-zinc-800 font-medium leading-relaxed">
              {about.lead}
            </p>

            <div className="space-y-4 text-sm text-zinc-600 leading-relaxed pt-2">
              {about.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Competency Tagline */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-700">
              <span className="px-3 py-1 bg-white border border-zinc-200">
                Statutory Governance
              </span>
              <span className="px-3 py-1 bg-white border border-zinc-200">
                Curriculum Design
              </span>
              <span className="px-3 py-1 bg-white border border-zinc-200">
                Grade IOSH Professional
              </span>
              <span className="px-3 py-1 bg-white border border-zinc-200">
                Outcome-Based Education
              </span>
            </div>
          </div>

          {/* Right Column: Experience Ratio Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-zinc-200 p-8 shadow-xs">
              <div className="border-b border-zinc-200 pb-6 mb-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                  Career Distribution
                </div>
                <div className="font-sans text-5xl font-bold text-zinc-900">
                  {about.experienceSplit.total}
                </div>
                <div className="font-mono text-xs font-semibold text-[#B91C1C] tracking-wider uppercase mt-1">
                  {about.experienceSplit.totalLabel}
                </div>
              </div>

              <div className="space-y-6">
                {/* Academia Breakdown */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-red-50 border border-red-100 flex items-center justify-center text-[#B91C1C] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-sans text-3xl font-bold text-zinc-900">
                      {about.experienceSplit.academia}
                    </div>
                    <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                      {about.experienceSplit.academiaLabel}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      Principalship, academic administration, Board of Studies leadership & pedagogy.
                    </p>
                  </div>
                </div>

                {/* Industry Breakdown */}
                <div className="flex items-start gap-4 pt-4 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-none bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-sans text-3xl font-bold text-zinc-900">
                      {about.experienceSplit.industry}
                    </div>
                    <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                      {about.experienceSplit.industryLabel}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      Industrial safety operations, corporate compliance, risk assessment & advisory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Institutional Note */}
              <div className="mt-8 pt-4 border-t border-zinc-200 text-xs text-zinc-500 italic">
                Bridging academic rigour with real-world industry demands.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
