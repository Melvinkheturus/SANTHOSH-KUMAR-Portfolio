import React from "react";
import { Globe, MapPin, Compass, Building } from "lucide-react";

export default function GlobalEngagementSection() {
  const seAsiaDestinations = [
    { city: "Singapore", country: "Singapore", flag: "🇸🇬", role: "Academic Visits & Institutional Exchange" },
    { city: "Kuala Lumpur", country: "Malaysia", flag: "🇲🇾", role: "International Conference & Safety Forums" },
    { city: "Bali", country: "Indonesia", flag: "🇮🇩", role: "Dwijendra University Best Educator Honor" },
  ];

  const uaeEmirates = [
    { city: "Dubai", flag: "🇦🇪", role: "Logistics & Corporate HSE Hub" },
    { city: "Abu Dhabi", flag: "🇦🇪", role: "Industrial Governance & Safety Standards" },
    { city: "Sharjah", flag: "🇦🇪", role: "Higher Education & Academic Exchange" },
    { city: "Ajman", flag: "🇦🇪", role: "Vocational & Skills Alignment" },
    { city: "Ras Al Khaimah", flag: "🇦🇪", role: "Industrial Safety Auditing" },
    { city: "Fujairah", flag: "🇦🇪", role: "Maritime & Logistics Operations" },
    { city: "Umm Al Quwain", flag: "🇦🇪", role: "Corporate Pedagogy Seminars" },
  ];

  return (
    <section id="global-engagement" className="relative bg-[#f3f2ee] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4">
        <span className="text-[11px] font-mono uppercase tracking-widest gradient-red-text font-semibold">
          06 / Global Engagement
        </span>
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-light leading-[1.16] tracking-tight text-zinc-900 mt-1">
          Learning Without Borders -
          <br />
          <span className="font-normal text-zinc-900">Bringing the World into the Classroom.</span>
        </h2>
      </div>

      <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-700 max-w-2xl mb-8">
        Prof. Santhosh Kumar&apos;s commitment to academic excellence extends far beyond a single campus or country. Through academic visits, faculty exchange programs, and international conferences, he has built collaborations and gathered insights across:
      </p>

      {/* Regions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
        {/* Southeast Asia */}
        <div className="bg-white/90 rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full gradient-red-bg shrink-0" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">
                  Southeast Asia
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">3 Major Hubs</span>
            </div>

            <div className="space-y-2.5">
              {seAsiaDestinations.map((d, i) => (
                <div
                  key={i}
                  className="p-3 bg-zinc-50 rounded-xl flex items-center justify-between text-xs hover:bg-red-50/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{d.flag}</span>
                    <div>
                      <div className="font-semibold text-zinc-900">{d.city}</div>
                      <div className="text-[11px] text-zinc-500">{d.country}</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-600 font-medium text-right max-w-[130px] leading-tight">
                    {d.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UAE Emirates */}
        <div className="bg-white/90 rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs flex flex-col justify-between hover:border-red-200 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full gradient-red-bg shrink-0" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">
                  Middle East (All 7 Emirates)
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">UAE Footprint</span>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {uaeEmirates.map((d, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-zinc-50 rounded-lg flex items-center justify-between text-xs hover:bg-red-50/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{d.flag}</span>
                    <span className="font-medium text-zinc-900">{d.city}</span>
                  </div>
                  <span className="text-[10.5px] text-zinc-500 font-mono">
                    {d.role.split("&")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Concluding Impact Callout */}
      <div className="bg-white rounded-[22px] p-5 sm:p-6 border border-black/5 shadow-xs">
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
          &ldquo;These engagements have done more than build a travel record - they&apos;ve directly shaped his approach to academic leadership, logistics education, and health & safety training, bringing global best practices back to every student he mentors.&rdquo;
        </p>
      </div>
    </section>
  );
}
