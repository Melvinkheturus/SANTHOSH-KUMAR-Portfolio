import React from "react";
import { profileData } from "@/data/profileData";
import { GraduationCap, Briefcase } from "lucide-react";

export default function ExecutiveProfileSection() {
  const { about } = profileData;

  return (
    <section id="executive-profile" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
          01 / Executive Profile
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
          15-Year Track Record in
          <br />
          <span className="font-normal text-zinc-900">Higher Education & Leadership</span>
        </h2>
      </div>

      {/* Narrative Paragraphs */}
      <div className="space-y-4 text-[13.5px] sm:text-[14.5px] text-zinc-700 leading-relaxed max-w-2xl mb-8">
        <p>
          Prof. Santhosh Kumar brings over 15 years of combined academic and industry experience to his role as Principal of Aset College of Science and Technology, Chennai — an institution functioning under the approval of Alagappa University.
        </p>
        <p>
          His career spans two worlds by design: a decade shaping curricula and leading institutions from within academia, and five years understanding what industry actually demands from the graduates who walk through its doors. That dual perspective defines his leadership — every academic decision is filtered through one question: <em className="text-zinc-900 font-medium not-italic">&ldquo;will this make our students genuinely ready for the world they&apos;re entering?&rdquo;</em>
        </p>
        <p>
          Under his leadership, Aset College has strengthened its focus on producing graduates who carry not just degrees, but professional competence, discipline, and international exposure — qualities built through structured mentorship, industry collaboration, and a personal commitment to every student&apos;s growth.
        </p>
      </div>

      {/* Experience Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
        {/* Total */}
        <div className="bg-white/90 rounded-[22px] p-5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
          <div className="text-[11px] font-mono uppercase tracking-wider gradient-red-text font-semibold">
            {about.experienceSplit.totalLabel}
          </div>
          <div className="text-3xl sm:text-4xl font-light text-zinc-900 my-2">
            {about.experienceSplit.total}
          </div>
          <p className="text-[11.5px] text-zinc-500">
            Combined academic leadership and senior industrial operations.
          </p>
        </div>

        {/* Academia */}
        <div className="bg-white/90 rounded-[22px] p-5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            <span>{about.experienceSplit.academiaLabel}</span>
            <div className="w-6 h-6 rounded-full gradient-red-bg flex items-center justify-center text-white shadow-xs">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-light text-zinc-900 my-2">
            {about.experienceSplit.academia} Yrs
          </div>
          <p className="text-[11.5px] text-zinc-500">
            Principalship, curriculum architecture & institutional governance.
          </p>
        </div>

        {/* Industry */}
        <div className="bg-white/90 rounded-[22px] p-5 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            <span>{about.experienceSplit.industryLabel}</span>
            <div className="w-6 h-6 rounded-full gradient-red-bg flex items-center justify-center text-white shadow-xs">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-light text-zinc-900 my-2">
            {about.experienceSplit.industry} Yrs
          </div>
          <p className="text-[11.5px] text-zinc-500">
            Occupational safety, hazard risk control & compliance audits.
          </p>
        </div>
      </div>

      {/* Core Competency Tags */}
      <div className="pt-4 border-t border-zinc-200/80 flex flex-wrap gap-2 text-xs">
        <span className="bg-white px-3 py-1 rounded-full border border-black/5 font-medium text-zinc-800">
          Statutory Governance
        </span>
        <span className="bg-white px-3 py-1 rounded-full border border-black/5 font-medium text-zinc-800">
          Curriculum Architecture
        </span>
        <span className="bg-white px-3 py-1 rounded-full border border-black/5 font-medium text-zinc-800">
          Grade IOSH (UK) Standards
        </span>
        <span className="bg-white px-3 py-1 rounded-full border border-black/5 font-medium text-zinc-800">
          Outcome-Based Pedagogy
        </span>
      </div>
    </section>
  );
}
