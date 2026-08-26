import React from "react";
import { CheckCircle2, BookOpen, Users, Globe, Award, Sparkles } from "lucide-react";

export default function AcademicLeadershipSection() {
  const leadershipHighlights = [
    {
      role: "Subject Expert, Board of Studies",
      scope: "MBA & B.Sc. Safety Programs - Bharathidasan University",
      description:
        "Shaping curriculum design, course outcome frameworks, and academic standards at the university level.",
      badge: "Curriculum Architect",
      icon: BookOpen,
    },
    {
      role: "Organizer of 5 International & 3 National Conferences",
      scope: "Cross-Disciplinary Academic Forums",
      description:
        "Bringing global academic and industry voices onto shared platforms for meaningful discourse and knowledge dissemination.",
      badge: "Scholarly Convener",
      icon: Globe,
    },
    {
      role: "25+ Seminars, Workshops & Faculty Development Programs",
      scope: "Institutional Capacity Building",
      description:
        "Continuously strengthening the pedagogical and technical teaching capability of faculty members across departments.",
      badge: "Faculty Empowerment",
      icon: Sparkles,
    },
    {
      role: "Chairperson at International Conferences",
      scope: "National & International Academic Symposia",
      description:
        "Guiding peer-reviewed research tracks and presiding over scholarly discussions held across premier institutions in India.",
      badge: "Session Chair",
      icon: Award,
    },
    {
      role: "Member of the Scrutiny Committee",
      scope: "International Academic Events & Publications",
      description:
        "Ensuring uncompromising quality, academic rigor, and ethical standards in academic event programming and research papers.",
      badge: "Academic Scrutiny",
      icon: CheckCircle2,
    },
    {
      role: "Resource Person for Career Guidance",
      scope: "5,000+ Students Mentored",
      description:
        "Personally delivered career development and industry transition masterclasses to 5,000+ students across multiple colleges and universities.",
      badge: "Career Mentorship",
      icon: Users,
    },
  ];

  return (
    <section id="academic-leadership" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
          04 / Academic & Administrative Leadership
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
          Leading From the Front -
          <br />
          <span className="font-normal text-zinc-900">In the Classroom, the Boardroom, and Beyond.</span>
        </h2>
      </div>

      {/* Leadership Narrative */}
      <div className="space-y-3.5 text-[13.5px] sm:text-[14.5px] text-zinc-700 leading-relaxed max-w-2xl mb-8">
        <p>
          As <strong className="font-semibold text-zinc-900">Principal of Aset College of Science and Technology</strong>, Prof. Santhosh Kumar oversees the academic and administrative direction of the institution, ensuring it operates to the standards expected under Alagappa University&apos;s approval - while pushing for the innovation that keeps students competitive beyond it.
        </p>
        <p className="text-xs sm:text-sm font-semibold text-zinc-900 uppercase tracking-wide pt-1">
          His leadership extends well past campus walls:
        </p>
      </div>

      {/* 6 Key Mandates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {leadershipHighlights.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div
              key={index}
              className="bg-white/90 rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] font-mono font-bold gradient-red-badge border px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <IconComp className="w-4 h-4 text-[#991B1B]" />
                </div>
                <h3 className="text-[15.5px] font-semibold text-zinc-900 mt-1 leading-snug">
                  {item.role}
                </h3>
                <div className="text-xs gradient-red-text font-medium mt-0.5 mb-2.5">
                  {item.scope}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
