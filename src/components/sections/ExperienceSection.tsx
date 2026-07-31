"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      title: "Full Stack Product Developer",
      company: "Dutuk Private Limited",
      year: "2025 - Present",
      description: [
        "Developing the Dutuk web platform with Next.js and the mobile application with React Native. Building production-ready features, reusable components, backend integrations, and responsive user experiences while contributing across the complete product development lifecycle."
      ]
    },
    {
      title: "Web Development Intern",
      company: "SAIC",
      year: "2025",
      description: [
        "Developed and maintained responsive business websites using WordPress and modern no-code tools. Focused on performance, usability, SEO, and delivering client-ready digital experiences across multiple projects."
      ]
    },
    {
      title: "UI/UX Design Specialization",
      company: "Zukun Academy",
      year: "Feb 2025 - May 2025",
      description: [
        "Specialized in user-centered product design, design systems, wireframing, interaction design, prototyping, usability principles, and modern design workflows. Built a strong foundation for creating intuitive, scalable digital products that bridge design and engineering."
      ]
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      company: "Guru Nanak College, Chennai",
      year: "2022 - 2025",
      description: [
        "Built a strong foundation in software development, databases, web technologies, object-oriented programming, algorithms, and computer science principles while developing real-world software products alongside academic studies."
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-12 relative">
      <SectionHeader title="Journey So Far" className="mb-8 md:mb-12" />

      {/* Timeline container */}
      <div ref={timelineRef} className="relative w-full">
        {/* Animated timeline line */}
        <motion.div 
          className="absolute left-[12px] md:left-[20px] lg:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#aa42ff] via-[#7f40ff] to-transparent origin-top"
          style={{ scaleY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Animated dot */}
        <motion.div 
          className="absolute left-[12px] md:left-[20px] lg:left-1/2 transform -translate-x-1/2 bottom-0 w-[10px] h-[10px] bg-[#aa42ff] rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        {/* Timeline entries */}
        <div className="relative z-10 space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <TimelineEntry
              key={index}
              {...exp}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({ title, company, year, description, delay }: {
  title: string;
  company: string;
  year: string;
  description: string[];
  delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-between mb-8 relative pl-[25px] md:pl-[35px] lg:pl-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Career info box */}
      <div className="career-info-box w-full flex flex-col lg:flex-row justify-between gap-2 lg:gap-6">
        {/* Left side: Title and company */}
        <div className="career-info-in w-full lg:w-1/2 flex justify-between items-start mb-2 lg:mb-0">
          <div className="career-role">
            <h4 className="text-base md:text-lg font-medium text-white leading-tight">{title}</h4>
            <h5 className="text-purple-400 text-xs md:text-sm font-normal mt-1">{company}</h5>
          </div>
          
          {/* Year */}
          <h3 className="text-base md:text-lg font-medium bg-gradient-to-b from-[#aa42ff] to-white bg-clip-text text-transparent lg:pr-8">
            {year}
          </h3>
        </div>
        
        {/* Right side: Description */}
        <div className="w-full lg:w-1/2">
          {description.map((item, i) => (
            <p key={i} className="text-gray-300/90 text-xs md:text-sm font-light leading-relaxed mb-2">
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
