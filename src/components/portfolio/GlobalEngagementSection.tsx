"use client";

import React from "react";
import { FadeInText, FadeIn } from "@/components/ui/Motion";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";
import { WheelCarousel, type WheelCarouselItem } from "@/components/ui/wheel-carousel";

export default function GlobalEngagementSection() {
  const globalDestinations: WheelCarouselItem[] = [
    {
      label: "Singapore",
      subtitle: "Academic Visits & Institutional Exchange",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Singapore Academic Visits",
    },
    {
      label: "Malaysia",
      subtitle: "International Conferences & Safety Forums",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Malaysia International Conferences",
    },
    {
      label: "Bali",
      subtitle: "Dwijendra University Best Educator Honor",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Bali Global Education Honor",
    },
    {
      label: "Abu Dhabi",
      subtitle: "Industrial Governance & Safety Standards",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Abu Dhabi Institutional Safety",
    },
    {
      label: "Dubai",
      subtitle: "Logistics & Corporate HSE Hub",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Dubai Logistics Hub",
    },
    {
      label: "Sharjah",
      subtitle: "Higher Education & Academic Exchange",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Sharjah Higher Education",
    },
    {
      label: "Ajman",
      subtitle: "Vocational & Skills Alignment",
      image: "https://images.unsplash.com/photo-1578895210405-907db486c111?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Ajman Skills Alignment",
    },
    {
      label: "Umm Al Quwain",
      subtitle: "Corporate Pedagogy Seminars",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Umm Al Quwain Pedagogy Seminars",
    },
    {
      label: "Ras Al Khaimah",
      subtitle: "Industrial Safety Auditing & Protocols",
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Ras Al Khaimah Safety Auditing",
    },
    {
      label: "Fujairah",
      subtitle: "Maritime & Logistics Operations",
      image: "https://images.unsplash.com/photo-1578895210405-907db486c111?w=1200&q=80&auto=format&fit=crop",
      imageAlt: "Fujairah Maritime Operations",
    },
  ];

  return (
    <section id="global-engagement" className="relative bg-[#f3f2ee] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 transition-all duration-300">
      {/* Top Header */}
      <div className="mb-4 text-center">
        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-normal leading-tight tracking-tight max-w-4xl mx-auto">
          <KineticTextReveal
            text="Global Academic Footprint & International Collaborations"
            splitBy="words"
            direction="up"
            distance={18}
            stagger={0.06}
            segmentClassName="gradient-red-text"
          />
        </h2>
      </div>

      {/* Intro Text strictly from PROF.md */}
      <FadeInText delay={0.1} className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-zinc-700 w-full mb-6 text-center tracking-[0.015em] font-medium">
        <p>
          Participated in academic visits, faculty exchange programs, and international conferences across:
        </p>
      </FadeInText>

      {/* Interactive Cinematic Wheel Carousel with 10 Destinations from PROF.md */}
      <FadeIn delay={0.15} className="w-full bg-white rounded-[14px] sm:rounded-[16px] p-4 sm:p-6 border border-black/5 shadow-xs mb-6">
        <div className="h-[380px] sm:h-[420px] w-full">
          <WheelCarousel
            items={globalDestinations}
            photoSide="left"
            photoAspect="4/3"
            photoWidth={38}
            contentWidth={900}
            gap={20}
            radius={280}
            spacing={15}
            visibleItems={5}
            photoRadius={12}
            markerColor="#DC2626"
            selectedColor="#991B1B"
            textColor="rgba(113, 113, 122, 0.45)"
            edgeFade
          />
        </div>
      </FadeIn>

      {/* Concluding Callout strictly from PROF.md */}
      <FadeIn delay={0.2} className="bg-white rounded-[12px] sm:rounded-[14px] p-5 sm:p-6 border border-black/5 shadow-xs text-center">
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium tracking-[0.015em]">
          These engagements strengthened international collaborations in academic leadership, logistics education, and health & safety training initiatives.
        </p>
      </FadeIn>
    </section>
  );
}
