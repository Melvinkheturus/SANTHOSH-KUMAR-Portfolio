"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  className?: string;
  showLine?: boolean;
}

export default function SectionHeader({ title, className = "", showLine = true }: SectionHeaderProps) {
  return (
    <div className="flex flex-row items-center gap-4 w-full mb-4">
      <motion.span
        className={`text-lg sm:text-xl md:text-2xl font-normal whitespace-nowrap bg-gradient-to-b from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent shrink-0 ${className}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.span>
      {showLine && <div className="h-px bg-white/10 flex-1 self-center" />}
    </div>
  );
}