"use client";

import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ExecutiveProfileSection from "./ExecutiveProfileSection";
import LeadershipPhilosophySection from "./LeadershipPhilosophySection";
import CoreCompetenciesSection from "./CoreCompetenciesSection";
import AcademicLeadershipSection from "./AcademicLeadershipSection";
import AwardsRecognitionSection from "./AwardsRecognitionSection";
import GlobalEngagementSection from "./GlobalEngagementSection";
import MembershipsCertificationsSection from "./MembershipsCertificationsSection";
import ImpactNumbersSection from "./ImpactNumbersSection";
import ContactConnectSection from "./ContactConnectSection";
import MenuDrawer from "./MenuDrawer";
import ContactModal from "./ContactModal";

export default function PortfolioContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen w-full bg-white font-sans antialiased text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Centered Editorial Stack */}
      <div className="w-full max-w-[620px] sm:max-w-[700px] md:max-w-[780px] lg:max-w-[840px] mx-auto px-3.5 sm:px-5 md:px-6 py-4 sm:py-7 md:py-10 space-y-3.5 sm:space-y-4 md:space-y-5">
        {/* Section 1: Hero Section (Navbar + Positioning + Full-width Cutout Portrait) */}
        <HeroSection onOpenContact={openContact} onOpenMenu={openMenu} />

        {/* Section 2: Executive Profile (15-Year Narrative & Experience Distribution) */}
        <ExecutiveProfileSection />

        {/* Section 3: Leadership Philosophy (3 Principles & Student/Parent Note) */}
        <LeadershipPhilosophySection />

        {/* Section 4: Core Competencies (6 Pillars of Academic & Strategic Mastery) */}
        <CoreCompetenciesSection />

        {/* Section 5: Academic & Administrative Leadership (Principalship, BoS & Progression) */}
        <AcademicLeadershipSection />

        {/* Section 6: Awards & Recognition (First Rank Gold Medal, Best Faculty, Best Educator) */}
        <AwardsRecognitionSection />

        {/* Section 7: Global Engagement (9-Country Footprint: SE Asia & UAE) */}
        <GlobalEngagementSection />

        {/* Section 8: Professional Memberships & Certifications (Trainer vs. Industry Bodies) */}
        <MembershipsCertificationsSection />

        {/* Section 9: Impact in Numbers (Key Metrics Strip & Mandate) */}
        <ImpactNumbersSection />

        {/* Section 10: Contact / Connect (Segmented by Audience + Institutional Footer) */}
        <ContactConnectSection onOpenContact={openContact} />
      </div>

      {/* Slide-Over Navigation Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onOpenContact={openContact}
      />

      {/* Official Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
      />
    </div>
  );
}
