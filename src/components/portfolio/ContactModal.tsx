"use client";

import React, { useState } from "react";
import { X, Mail, Copy, Check, ExternalLink, Building2 } from "lucide-react";
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-6 sm:p-7 text-zinc-900 border border-black/5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-6">
          <span className="text-[11px] font-mono font-semibold tracking-wider gradient-red-text uppercase">
            Official Inquiries
          </span>
          <h3 className="text-xl font-semibold text-zinc-900 mt-1">
            Get in Touch
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            {profileData.formalTitle} — {profileData.designation}
          </p>
        </div>

        {/* Info Rows */}
        <div className="space-y-3 text-xs mb-6">
          {/* Email card */}
          <div className="flex items-center justify-between p-3.5 bg-[#f4f3ef] rounded-2xl border border-black/5">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#991B1B]" />
              <div>
                <div className="text-[10.5px] uppercase tracking-wider text-zinc-500 font-medium">
                  Official Email
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-xs text-zinc-900 hover:text-[#991B1B] transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 text-[11px] font-medium text-zinc-700 bg-white rounded-lg shadow-xs hover:bg-zinc-50 transition-colors flex items-center gap-1 cursor-pointer border border-black/5"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#991B1B]" />
                  <span className="text-[#991B1B]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-zinc-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Institution card */}
          <div className="flex items-start gap-2.5 p-3.5 bg-[#f4f3ef] rounded-2xl border border-black/5">
            <Building2 className="w-4 h-4 text-[#991B1B] mt-0.5 shrink-0" />
            <div>
              <div className="text-[10.5px] uppercase tracking-wider text-zinc-500 font-medium">
                Institution
              </div>
              <div className="font-medium text-zinc-900 mt-0.5">
                {profileData.institutionFull}
              </div>
              <div className="text-zinc-500 text-[11px] mt-0.5">
                {profileData.location}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={profileData.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 text-center text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors flex items-center justify-center gap-1"
          >
            <span>College Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={`mailto:${profileData.email}?subject=Official%20Inquiry%20-%20Prof.%20Santhosh%20Kumar`}
            className="flex-1 py-2.5 text-center text-xs font-semibold text-white gradient-red-bg rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
