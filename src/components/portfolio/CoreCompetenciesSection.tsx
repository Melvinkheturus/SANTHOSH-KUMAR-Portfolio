import React from "react";
import { Building2, BarChart3, Handshake, ShieldAlert, Truck, GraduationCap } from "lucide-react";

export default function CoreCompetenciesSection() {
  const competencies = [
    {
      id: "01",
      title: "Academic Governance",
      domain: "Institutional Development & Academic Governance",
      icon: Building2,
      emoji: "🏛",
      description:
        "Building academic structures and policies that scale — from curriculum design to compliance frameworks that stand up to university and regulatory scrutiny.",
    },
    {
      id: "02",
      title: "Strategic Operations",
      domain: "Operations & Strategic Management",
      icon: BarChart3,
      emoji: "📊",
      description:
        "Running the day-to-day machinery of an institution while keeping sight of long-term academic and operational goals.",
    },
    {
      id: "03",
      title: "Corporate Synergy",
      domain: "Industry–Academia Collaboration",
      icon: Handshake,
      emoji: "🤝",
      description:
        "Translating real industry requirements into classroom learning — ensuring graduates aren't just qualified on paper, but genuinely employable.",
    },
    {
      id: "04",
      title: "Safety & Compliance",
      domain: "Health, Safety & Compliance Training",
      icon: ShieldAlert,
      emoji: "🦺",
      description:
        "Internationally certified expertise (IOSH, HABC, AOSH) in workplace safety — brought directly into academic training and industry consulting.",
    },
    {
      id: "05",
      title: "Skill Alignment",
      domain: "Logistics & Skill Development Integration",
      icon: Truck,
      emoji: "🚚",
      description:
        "Deep engagement with skill councils and industry bodies to align academic programs with evolving sector needs, particularly in logistics and safety.",
    },
    {
      id: "06",
      title: "Mentorship",
      domain: "Student Mentorship & Career Development",
      icon: GraduationCap,
      emoji: "🎓",
      description:
        "Hands-on guidance for thousands of students — helping them move from classroom theory to career-ready confidence.",
    },
  ];

  return (
    <section id="competencies" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
          03 / Core Competencies
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
          Where Expertise
          <br />
          <span className="font-normal text-zinc-900">Meets Execution.</span>
        </h2>
      </div>

      <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 max-w-2xl mb-8">
        Six foundational areas of excellence developed across 15+ years of institutional leadership, industry collaboration, and executive coaching.
      </p>

      {/* 6 Visual Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        {competencies.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white/90 rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold gradient-red-text">
                    {item.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-100/80 flex items-center justify-center text-sm shadow-2xs">
                    <span>{item.emoji}</span>
                  </div>
                </div>

                <div className="text-[10.5px] font-mono uppercase tracking-wider gradient-red-text font-semibold mb-1">
                  {item.title}
                </div>
                <h3 className="text-[15px] font-semibold text-zinc-900 mb-2 leading-snug">
                  {item.domain}
                </h3>
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
