"use client";

import { useState } from "react";
import { profileData } from "@/data/profileData";
import { Globe, MapPin, Compass, Building, Plane } from "lucide-react";

export default function InternationalExposureSection() {
  const { internationalExposure } = profileData;
  const [selectedDest, setSelectedDest] = useState<string | null>(null);

  const uaeEmirates = internationalExposure.destinations.filter(
    (d) => d.country === "UAE"
  );
  const seAsiaDestinations = internationalExposure.destinations.filter(
    (d) => d.region === "Southeast Asia"
  );

  return (
    <section id="exposure" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#B91C1C] uppercase">
            06 / Global Presence
          </span>
          <div className="h-[1px] bg-zinc-300 flex-1 max-w-24" />
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-normal leading-tight">
            International Academic Exposure
          </h2>
          <p className="text-zinc-600 mt-3 text-sm sm:text-base">
            {internationalExposure.summary}
          </p>
        </div>

        {/* Visual Map / Graphic Area */}
        <div className="relative bg-[#FAFAFA] border border-zinc-200 p-8 sm:p-12 overflow-hidden mb-10">
          {/* Subtle Vector Background Pattern */}
          <div className="absolute inset-0 opacity-[0.035] pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full text-zinc-950 fill-current">
              <path d="M150,150 Q200,100 250,150 T350,150 T450,200 T550,220 T650,280 T750,300 T850,320" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="200" cy="180" r="80" />
              <circle cx="500" cy="220" r="120" />
              <circle cx="780" cy="300" r="100" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Summary */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 text-[11px] font-mono uppercase tracking-widest text-[#B91C1C]">
                <Globe className="w-3.5 h-3.5" />
                <span>Cross-Border Academic Footprint</span>
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 font-normal leading-snug">
                10 Key Global Centers of Collaboration
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Strategic engagements spanning official university delegations, faculty exchange initiatives, technical scrutiny panels, and keynote forums.
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
                  <span>Key Hubs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 border border-[#B91C1C] rounded-full" />
                  <span>Emirates</span>
                </div>
              </div>
            </div>

            {/* Right Map Canvas Visual */}
            <div className="lg:col-span-8 bg-white border border-zinc-200 p-6 shadow-xs relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100 text-xs font-mono text-zinc-500">
                <span>GEO-MAPPING OVERVIEW</span>
                <span>ASIA & MIDDLE EAST</span>
              </div>

              {/* Styled Minimalist Interactive Geography Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Southeast Asia Region */}
                <div className="p-4 bg-zinc-50/70 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-800">
                      Southeast Asia
                    </span>
                  </div>
                  <div className="space-y-2">
                    {seAsiaDestinations.map((d, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-white border border-zinc-200 hover:border-[#B91C1C] transition-colors flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                          <span className="font-semibold text-zinc-900">{d.city}</span>
                          <span className="text-zinc-400">({d.country})</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {d.type.split("&")[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* United Arab Emirates Region */}
                <div className="p-4 bg-zinc-50/70 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-800">
                      United Arab Emirates (All 7 Emirates)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {uaeEmirates.map((d, i) => (
                      <div
                        key={i}
                        className="px-2.5 py-1.5 bg-white border border-zinc-200 hover:border-[#B91C1C] transition-colors flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#B91C1C] rounded-full" />
                          <span className="font-medium text-zinc-800">{d.city}</span>
                        </div>
                        <span className="text-[10px] text-zinc-400 font-mono">
                          {d.type.split("&")[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Horizontal Pill Strip of All 10 Locations */}
        <div className="p-6 bg-[#FAFAFA] border border-zinc-200">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B91C1C] mb-3">
            Academic Engagements by Territory:
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-zinc-800">
            {internationalExposure.destinations.map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 shadow-xs hover:border-[#B91C1C] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
                <span>{d.city}</span>
                <span className="text-zinc-400 text-xs">({d.country})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
