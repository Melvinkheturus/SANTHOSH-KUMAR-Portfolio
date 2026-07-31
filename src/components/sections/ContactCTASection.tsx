"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactCard from "@/components/ui/ContactCard";

export default function ContactCTASection() {
  return (
    <section id="contact" className="py-12 relative">
      <div className="mb-8">
        <SectionHeader title="Let's Build Something Great" />
        <p className="text-sm text-gray-300 max-w-xl">
          Looking for a Product Builder who can design, build, automate, and launch your next product? Send a message directly below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-12 h-[320px]">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
