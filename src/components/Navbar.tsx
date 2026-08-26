"use client";

import { useState } from "react";
import { profileData } from "@/data/profileData";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Leadership", href: "#leadership" },
    { label: "Expertise", href: "#expertise" },
    { label: "Qualifications", href: "#qualifications" },
    { label: "Recognition", href: "#recognition" },
    { label: "Exposure", href: "#exposure" },
    { label: "Network", href: "#network" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-18 flex items-center justify-between">
        {/* Left Wordmark */}
        <a href="#" className="flex flex-col group">
          <span className="font-sans font-bold tracking-wider text-sm sm:text-base text-zinc-900 group-hover:text-[#B91C1C] transition-colors uppercase">
            {profileData.name}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[#B91C1C] uppercase">
            Principal — ASET College
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#B91C1C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B91C1C] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-900 border border-zinc-300 hover:border-[#B91C1C] hover:text-[#B91C1C] hover:bg-red-50/40 transition-all cursor-pointer"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-700 hover:text-zinc-900"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-700 hover:text-[#B91C1C] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 text-xs font-medium text-white bg-[#B91C1C] hover:bg-[#991B1B]"
            >
              Connect with Principal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
