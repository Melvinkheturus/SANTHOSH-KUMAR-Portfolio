import { profileData } from "@/data/profileData";
import { ArrowUpRight, Mail, ExternalLink, Shield } from "lucide-react";

interface FooterCTASectionProps {
  onOpenContact: () => void;
}

export default function FooterCTASection({ onOpenContact }: FooterCTASectionProps) {
  const { closing } = profileData;

  return (
    <footer className="bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Top Subtle Crimson Border */}
      <div className="h-1 bg-[#B91C1C]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authoritative Closing Taglines */}
          <div className="lg:col-span-7 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#B91C1C] font-semibold mb-4">
              Vision & Institutional Purpose
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              {closing.tagline1}
            </h2>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-300 leading-tight">
              {closing.tagline2}
            </h2>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#B91C1C] leading-tight">
              {closing.tagline3}
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl pt-4 leading-relaxed">
              {closing.subText}
            </p>
          </div>

          {/* Right Column: Institutional Identity Card & Actions */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-8 shadow-2xl">
            <div className="border-b border-zinc-800 pb-6 mb-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#B91C1C] font-semibold">
                Official Office
              </div>
              <h3 className="font-sans text-2xl font-bold text-white mt-1 uppercase">
                {profileData.formalTitle}
              </h3>
              <div className="font-serif text-sm text-zinc-300 italic mt-0.5">
                {profileData.designation} — {profileData.institutionFull}
              </div>
              <div className="text-xs text-zinc-500 mt-2">
                Chennai, Tamil Nadu, India
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={onOpenContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Connect with Principal</span>
              </button>

              <a
                href={profileData.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold uppercase tracking-wider transition-colors border border-zinc-700"
              >
                <span>College Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Grade IOSH (UK) Certified</span>
              <span>ASET Institutional Portal</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {profileData.formalTitle}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#about" className="hover:text-zinc-300 transition-colors">
              Profile
            </a>
            <a href="#leadership" className="hover:text-zinc-300 transition-colors">
              Leadership
            </a>
            <a href="#qualifications" className="hover:text-zinc-300 transition-colors">
              Credentials
            </a>
            <button
              onClick={onOpenContact}
              className="text-[#B91C1C] hover:underline cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
