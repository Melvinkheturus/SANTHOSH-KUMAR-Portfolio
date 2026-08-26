"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import InternationalExposureSection from "@/components/sections/InternationalExposureSection";
import ConferencesSection from "@/components/sections/ConferencesSection";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import FooterCTASection from "@/components/sections/FooterCTASection";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      {/* Sticky Minimal Navbar */}
      <Navbar onOpenContact={openContact} />

      {/* Main Single-Page Academic Leadership Profile */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenContact={openContact} />

        {/* 2. About / Executive Profile */}
        <AboutSection />

        {/* 3. Leadership & Impact */}
        <LeadershipSection />

        {/* 4. Areas of Expertise */}
        <ExpertiseSection />

        {/* 5. Qualifications & Professional Credentials */}
        <QualificationsSection />

        {/* 6. Recognition & Awards */}
        <RecognitionSection />

        {/* 7. International Academic Exposure */}
        <InternationalExposureSection />

        {/* 8. Conferences & Academic Engagement */}
        <ConferencesSection />

        {/* 9. Professional Network / Affiliations */}
        <AffiliationsSection />
      </main>

      {/* 10. Closing CTA & Institutional Footer */}
      <FooterCTASection onOpenContact={openContact} />

      {/* Official Inquiries Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
