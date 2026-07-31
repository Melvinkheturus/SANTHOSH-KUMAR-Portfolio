"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhoAmISection() {
  const [copied, setCopied] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("smk.manikandan.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const p5Items = ["email", "linkedin", "github", "melvin"];

  {/* Helper function to compute blur class */}
  const getItemBlurClass = (itemId: string) => {
    if (!activeHover) return "transition-all duration-300";
    if (activeHover === itemId) {
      return "transition-all duration-300 filter blur-none opacity-100 scale-[1.02] relative z-20";
    }
    if (p5Items.includes(activeHover) && p5Items.includes(itemId)) {
      return "transition-all duration-300 filter blur-none opacity-100";
    }
    return "transition-all duration-300 filter blur-[2.5px] opacity-35";
  };

  const getBaseTextBlurClass = (parentItem?: string | string[]) => {
    if (!activeHover) return "transition-all duration-300";
    if (parentItem) {
      if (Array.isArray(parentItem) && parentItem.includes(activeHover)) {
        return "transition-all duration-300";
      }
      if (typeof parentItem === "string" && activeHover === parentItem) {
        return "transition-all duration-300";
      }
    }
    return "transition-all duration-300 filter blur-[2.5px] opacity-35";
  };

  return (
    <section id="who-am-i" className="pt-2 pb-10 relative">
      {/* Header with Horizontal Divider Line */}
      <SectionHeader title="Who Am I?" className="mb-6" />

      {/* Big Impact Statement (Full Width) */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-snug mb-10 w-full">
        I&apos;m Manikandan. I enjoy building products where engineering, AI, design, and creativity come together to solve real business problems.
      </h2>

      {/* Two Column Section Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Profile Image Stretched to Match Bio Height */}
        <motion.div
          className="md:col-span-4 relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden group bg-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/profile.png"
            alt="Manikandan S"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>

        {/* Right Side: Content Bio with Blur Focus on Hover */}
        <motion.div
          className="md:col-span-8 flex flex-col justify-center h-full space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            {/* Paragraph 1 */}
            <p className={getBaseTextBlurClass()}>
              I started my journey with a simple curiosity about how exceptional digital products are built. That curiosity soon expanded beyond writing code into product design, user experience, AI automation, and understanding the business problems behind every successful product.
            </p>

            {/* Paragraph 2 with linear purple gradient capabilities */}
            <p className={getBaseTextBlurClass("capabilities")}>
              Today, I build{" "}
              <span
                onMouseEnter={() => setActiveHover("capabilities")}
                onMouseLeave={() => setActiveHover(null)}
                className={`bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent font-medium cursor-pointer ${getItemBlurClass("capabilities")}`}
              >
                scalable web applications, AI-powered automation systems, creative AI productions, and modern digital experiences
              </span>{" "}
              that help businesses launch, scale, and grow. Working across the entire product lifecycle allows me to take ideas from strategy and design to engineering, deployment, and continuous improvement.
            </p>

            {/* Paragraph 3 */}
            <p className={getBaseTextBlurClass()}>
              Whether I&apos;m collaborating with startups, building internal business software, or experimenting with emerging AI technologies, my focus remains the same: creating products that are practical, scalable, and designed to deliver measurable business value.
            </p>

            {/* Paragraph 4 (competitive advantage without purple) */}
            <p className={getBaseTextBlurClass("competitive")}>
              I don&apos;t see software as a collection of features. I see it as a{" "}
              <span
                onMouseEnter={() => setActiveHover("competitive")}
                onMouseLeave={() => setActiveHover(null)}
                className={`text-white font-medium cursor-pointer ${getItemBlurClass("competitive")}`}
              >
                competitive advantage
              </span>{" "}
              that helps businesses move faster, work smarter, and create better experiences for the people who use it.
            </p>

            {/* Paragraph 5 with email, linkedin, github, @melvinkheturus in linear purple gradient */}
            <p className={getBaseTextBlurClass(["email", "linkedin", "github", "melvin"])}>
              If my work resonates with what you&apos;re building, I&apos;d love to hear about it. Reach me at{" "}
              <button
                onClick={copyEmail}
                onMouseEnter={() => setActiveHover("email")}
                onMouseLeave={() => setActiveHover(null)}
                className={`inline-flex items-center gap-1.5 font-medium cursor-pointer transition-all ${getItemBlurClass("email")}`}
                title="Click to copy email"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-purple-300" />}
                <span className="bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent font-medium">
                  smk.manikandan.dev@gmail.com
                </span>
              </button>
              , connect with me on{" "}
              <a
                href="https://linkedin.com/in/manikandan-s-21a41a273"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveHover("linkedin")}
                onMouseLeave={() => setActiveHover(null)}
                className={`inline-flex items-center gap-1 font-medium transition-all ${getItemBlurClass("linkedin")}`}
              >
                <Image src="/icons/linkedin.webp" width={14} height={14} alt="LinkedIn" className="brightness-0 invert translate-y-[1px]" />
                <span className="bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent font-medium hover:underline">
                  LinkedIn
                </span>
              </a>
              , explore my code on{" "}
              <a
                href="https://github.com/Melvinkheturus"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveHover("github")}
                onMouseLeave={() => setActiveHover(null)}
                className={`inline-flex items-center gap-1 font-medium transition-all ${getItemBlurClass("github")}`}
              >
                <Image src="/icons/github.webp" width={14} height={14} alt="GitHub" className="brightness-0 invert translate-y-[1px]" />
                <span className="bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent font-medium hover:underline">
                  GitHub
                </span>
              </a>
              , or simply remember{" "}
              <span
                onMouseEnter={() => setActiveHover("melvin")}
                onMouseLeave={() => setActiveHover(null)}
                className={`bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent font-medium cursor-pointer ${getItemBlurClass("melvin")}`}
              >
                @melvinkheturus
              </span>
              . That&apos;s where I&apos;m constantly building, experimenting, and sharing the next generation of digital products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
