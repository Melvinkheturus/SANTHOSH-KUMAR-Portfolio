"use client";

import { useState } from "react";
import { X, Mail, Phone, MapPin, ExternalLink, Check, Copy, Building2 } from "lucide-react";
import { profileData } from "@/data/profileData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-none border border-zinc-200 shadow-2xl p-8 text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-zinc-200 pb-5 mb-6">
          <div className="inline-block text-[11px] font-semibold tracking-widest text-[#B91C1C] uppercase mb-1">
            Official Correspondence
          </div>
          <h3 className="font-serif text-2xl text-zinc-900 font-normal">
            Connect with Prof. Santhosh Kumar
          </h3>
          <p className="text-xs text-zinc-500 mt-1">
            Principal — {profileData.institution}
          </p>
        </div>

        {/* Details Grid */}
        <div className="space-y-4 text-sm">
          {/* Email */}
          <div className="flex items-start justify-between p-3.5 bg-zinc-50 border border-zinc-200">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#B91C1C] mt-0.5" />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  Official Email
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-xs text-zinc-900 hover:text-[#B91C1C] transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600 text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-zinc-500" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Institution */}
          <div className="flex items-start gap-3 p-3.5 bg-zinc-50 border border-zinc-200">
            <Building2 className="w-4 h-4 text-[#B91C1C] mt-0.5" />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                Institution
              </div>
              <div className="text-xs font-medium text-zinc-800">
                {profileData.institutionFull}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5">
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Academic Engagements Note */}
          <div className="p-3.5 bg-red-50/50 border border-red-100 text-xs text-zinc-600 leading-relaxed">
            <span className="font-semibold text-zinc-900">Academic Inquiries:</span> Available for keynote speaking, Board of Studies consultations, institutional accreditation advisory, and international faculty exchange programs.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
          <a
            href={profileData.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-[#B91C1C] transition-colors"
          >
            <span>Visit College Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={`mailto:${profileData.email}?subject=Academic%20Inquiry%20-%20Prof.%20Santhosh%20Kumar`}
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-[#B91C1C] hover:bg-[#991B1B] transition-colors"
          >
            Compose Email
          </a>
        </div>
      </div>
    </div>
  );
}
