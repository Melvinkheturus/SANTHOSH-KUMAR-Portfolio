import React from "react";
import { ShieldCheck, Award, Building2, CheckCircle2, BadgeCheck } from "lucide-react";

export default function MembershipsCertificationsSection() {
  const trainerCredentials = [
    {
      title: "Grade IOSH (UK) Certified",
      org: "Institution of Occupational Safety and Health (UK)",
      badge: "Grade IOSH UK",
      description: "Internationally recognized premier standard in occupational safety, risk prevention, and health governance.",
      highlight: true,
    },
    {
      title: "Approved International Trainer - IOSH",
      org: "Institution of Occupational Safety and Health",
      badge: "IOSH UK Approved",
      description: "Authorized to deliver certified international IOSH safety curriculums and corporate compliance programs.",
      highlight: false,
    },
    {
      title: "Approved International Trainer - HABC",
      org: "Highfield Awarding Body for Compliance (UK)",
      badge: "HABC UK Approved",
      description: "Accredited trainer for global compliance, industrial hygiene, and auditing qualifications.",
      highlight: false,
    },
    {
      title: "Approved International Trainer - AOSH",
      org: "American Society of Occupational Safety (USA)",
      badge: "AOSH USA Approved",
      description: "Certified to deliver specialized American standard occupational health and safety curriculums.",
      highlight: false,
    },
  ];

  const industryBodies = [
    {
      acronym: "CII",
      name: "Confederation of Indian Industry",
      description: "Active engagement in national industry-academia panels and manufacturing advisory.",
    },
    {
      acronym: "NSC",
      name: "National Safety Council",
      description: "Advancing national safety codes, workplace protection standards, and institutional safety audits.",
    },
    {
      acronym: "ICC",
      name: "Indian Chemical Council",
      description: "Specialized hazardous material management and process safety frameworks.",
    },
    {
      acronym: "IWPA",
      name: "Indian Wind Power Association",
      description: "Renewable energy infrastructure safety and technical workforce training.",
    },
    {
      acronym: "SEA",
      name: "Safety Engineers Association",
      description: "Professional network of practicing safety directors, auditors, and educators.",
    },
    {
      acronym: "LSSC",
      name: "Logistics Sector Skill Council",
      description: "Associated with national skill councils aligning supply chain curriculum with industry needs.",
    },
  ];

  return (
    <section id="memberships-certifications" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
          07 / Professional Memberships & Certifications
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
          Credentials That Carry Weight
          <br />
          <span className="font-normal text-zinc-900">Across Industries.</span>
        </h2>
      </div>

      <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-700 max-w-2xl mb-8">
        These affiliations reflect a career built on staying connected to the industries his students will one day enter - not just teaching safety and compliance, but practicing it at an internationally certified standard.
      </p>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-6">
        {/* Column 1: Certified Trainer Credentials */}
        <div className="space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 pb-1">
            <ShieldCheck className="w-4 h-4 text-[#991B1B]" />
            <span>Certified Trainer Credentials</span>
          </div>

          {trainerCredentials.map((cred, idx) => (
            <div
              key={idx}
              className={`rounded-[22px] p-5 border shadow-xs transition-colors flex flex-col justify-between ${cred.highlight
                  ? "bg-zinc-900 text-white border-t-2 border-[#DC2626]"
                  : "bg-white/90 border-black/5 hover:border-red-200 text-zinc-900"
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10.5px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${cred.highlight
                        ? "text-red-400 border-red-900/50 bg-red-950/40"
                        : "gradient-red-badge"
                      }`}
                  >
                    {cred.badge}
                  </span>
                  {cred.highlight ? (
                    <Award className="w-5 h-5 text-red-400 shrink-0" />
                  ) : (
                    <BadgeCheck className="w-4 h-4 text-[#991B1B] shrink-0" />
                  )}
                </div>
                <h3 className="text-[15px] font-semibold leading-snug">
                  {cred.title}
                </h3>
                <div
                  className={`text-xs mt-0.5 mb-2 ${cred.highlight ? "text-zinc-400" : "text-zinc-500"
                    }`}
                >
                  {cred.org}
                </div>
                <p
                  className={`text-xs leading-relaxed ${cred.highlight ? "text-zinc-300" : "text-zinc-600"
                    }`}
                >
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Industry Body Memberships */}
        <div className="space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 pb-1">
            <Building2 className="w-4 h-4 text-[#991B1B]" />
            <span>Industry Body Memberships</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {industryBodies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 rounded-[20px] p-4 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold gradient-red-badge border px-2.5 py-0.5 rounded-md">
                      {item.acronym}
                    </span>
                    <div className="flex items-center gap-1 text-[10.5px] text-zinc-500 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full gradient-red-bg" />
                      <span>Member</span>
                    </div>
                  </div>
                  <h3 className="text-[13.5px] font-semibold text-zinc-900 leading-snug group-hover:text-zinc-950">
                    {item.name}
                  </h3>
                  <p className="text-[11.5px] text-zinc-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
