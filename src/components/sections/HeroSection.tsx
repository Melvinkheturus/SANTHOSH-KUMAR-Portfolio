"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DiaText } from "@/components/ui/dia-text";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cards = [
    {
      title: "Software Engineering",
      media: "/thumbnail/hero-scramble.mp4",
      isVideo: true,
    },
    {
      title: "AI Engineering",
      media: "/thumbnail/ChatGPT Image Jul 29, 2026, 02_57_26 PM.png",
      isVideo: false,
    },
    {
      title: "Product Design",
      media: "/thumbnail/84658ffcce4868a17fb6f324277d42e4.jpg",
      isVideo: false,
    },
    {
      title: "Creative AI Production",
      media: "/thumbnail/Firefly.png",
      isVideo: false,
    },
  ];

  return (
    <section id="hero" className="py-6 md:py-10 relative overflow-hidden">
      {/* Hero Headline Row: 2-Line Headline + Right White Button */}
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
        <div className="w-full md:w-[78%] lg:w-[80%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.15] w-full">
            <span className="block text-white">
              <DiaText
                text="I build digital products that businesses can"
                colors={["#ffffff", "#e9d5ff", "#ffffff"]}
                textColor="#ffffff"
                duration={1.8}
                delay={0.1}
                repeat={false}
                once={true}
              />
            </span>
            <span className="block text-purple-400">
              <DiaText
                text="launch, scale, and grow with."
                colors={["#c084fc", "#a855f7", "#8b5cf6", "#e9d5ff", "#c084fc"]}
                textColor="#c084fc"
                duration={1.8}
                delay={0.5}
                repeat={false}
                once={true}
              />
            </span>
          </h1>
        </div>

        <div className="w-full md:w-[20%] flex justify-start md:justify-end items-start pt-2">
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-md bg-white hover:bg-gray-100 text-black font-['Satoshi'] font-semibold text-sm transition-all duration-200 flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk
          </motion.button>
        </div>
      </div>

      {/* 4 Equal-Width Cards with Journey Section Corner Glow Gradient */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 md:mt-16">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="p-2.5 rounded-xl bg-[#0e0e12] relative overflow-hidden flex flex-col justify-between cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: idx % 2 === 0 ? 1.8 : -1.8,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
          >
            {/* Purple gradient corners like Journey So Far section */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Title Centered with Full Width Character Spacing */}
            <div className="px-1 py-1.5 mb-2 relative z-10 text-center flex items-center justify-center w-full">
              <h3 className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-gray-200 text-center w-full">
                {card.title}
              </h3>
            </div>

            {/* Bottom Media Showcase Container */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/10 relative z-10">
              {card.isVideo ? (
                <video
                  src={card.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={card.media}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
