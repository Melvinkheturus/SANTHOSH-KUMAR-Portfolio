import Image from "next/image";
import { profileData } from "@/data/profileData";
import { ArrowDown, Award, Globe, Users, Clock } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative bg-white border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Formal Executive Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Micro-tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B91C1C]" />
              <span className="font-mono text-xs tracking-widest text-[#B91C1C] uppercase font-semibold">
                Executive Profile
              </span>
            </div>

            {/* Name */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 uppercase">
              {profileData.formalTitle}
            </h1>

            {/* Title & Institution */}
            <div className="mt-3">
              <div className="font-serif text-2xl sm:text-3xl text-zinc-800 font-normal">
                {profileData.designation}
              </div>
              <div className="font-serif text-lg sm:text-xl text-zinc-500 italic mt-0.5">
                {profileData.institutionFull}
              </div>
            </div>

            {/* Positioning Statement */}
            <div className="mt-8 pl-4 border-l-2 border-[#B91C1C] bg-zinc-50/50 py-3 pr-4">
              <p className="text-sm sm:text-base font-medium text-zinc-700 leading-relaxed">
                {profileData.positioningStatement}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
              <div className="flex flex-col">
                <div className="font-sans text-2xl sm:text-3xl font-bold text-zinc-900">
                  15+
                </div>
                <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                  Years Experience
                </div>
              </div>
              <div className="flex flex-col border-l border-zinc-200 pl-4">
                <div className="font-sans text-2xl sm:text-3xl font-bold text-zinc-900">
                  5,000+
                </div>
                <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                  Students Guided
                </div>
              </div>
              <div className="flex flex-col border-l border-zinc-200 pl-4">
                <div className="font-sans text-2xl sm:text-3xl font-bold text-[#B91C1C]">
                  Global
                </div>
                <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                  Academic Exposure
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] transition-colors tracking-wider uppercase cursor-pointer"
              >
                Official Inquiry
              </button>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors tracking-wider uppercase"
              >
                <span>Read Profile</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Framed Executive Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle Red Vertical Frame Accent */}
              <div className="absolute -inset-2 border border-zinc-300 pointer-events-none -z-10" />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#B91C1C]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#B91C1C]" />
              <div className="absolute top-0 bottom-0 -right-2 w-1.5 bg-[#B91C1C] hidden sm:block" />

              {/* Portrait Container */}
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden border border-zinc-200 shadow-sm">
                <Image
                  src={profileData.portraitUrl}
                  alt={profileData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
                
                {/* Institutional Badge Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs border-t border-zinc-200 p-4">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#B91C1C] font-semibold">
                    Principal & Academic Head
                  </div>
                  <div className="text-xs text-zinc-700 font-medium">
                    ASET College of Science & Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Three Institutional Pillars */}
        <div className="mt-16 pt-8 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
              Institutional Mandate
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-serif text-zinc-800">
              <span>Academic Leadership</span>
              <span className="text-[#B91C1C] font-sans">•</span>
              <span>Institutional Development</span>
              <span className="text-[#B91C1C] font-sans">•</span>
              <span>Industry–Academia Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
