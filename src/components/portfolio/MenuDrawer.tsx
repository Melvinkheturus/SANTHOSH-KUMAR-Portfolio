"use client";

import React from "react";
import { X, ArrowRight, Mail } from "lucide-react";
import { profileData } from "@/data/profileData";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function MenuDrawer({ isOpen, onClose, onOpenContact }: MenuDrawerProps) {
  if (!isOpen) return null;

  const links = [
    { label: "01. Hero & Overview", href: "#hero" },
    { label: "02. Executive Profile", href: "#executive-profile" },
    { label: "03. Leadership Philosophy", href: "#leadership-philosophy" },
    { label: "04. Core Competencies", href: "#competencies" },
    { label: "05. Academic Leadership", href: "#academic-leadership" },
    { label: "06. Awards & Honors", href: "#awards" },
    { label: "07. Global Engagement", href: "#global-engagement" },
    { label: "08. Memberships & Certifications", href: "#memberships-certifications" },
    { label: "09. Impact in Numbers", href: "#impact-numbers" },
    { label: "10. Contact & Inquiries", href: "#contact" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 bg-black/30 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white rounded-[32px] p-6 sm:p-7 shadow-2xl border border-black/5 animate-in slide-in-from-right-4 duration-300 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
            <div>
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider gradient-red-text">
                Section Navigation
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mt-0.5">
                {profileData.formalTitle}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links List */}
          <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-700 hover:text-[#991B1B] hover:bg-[#f3f2ee] transition-all"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#991B1B] group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </nav>
        </div>

        {/* Action Bottom */}
        <div className="mt-6 pt-4 border-t border-zinc-100">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full py-3 px-4 gradient-red-bg text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect / Official Inquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
