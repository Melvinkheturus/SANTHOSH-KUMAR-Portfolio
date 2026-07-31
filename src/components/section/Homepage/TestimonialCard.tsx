"use client";

import { BentoCard } from "../../bento/BentoCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string | null;
  initials: string;
  avatarType: 'initials' | 'image';
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: "Manikandan is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
    name: "Jane Doe",
    position: "CEO",
    company: "Tech Startup",
    avatar: null,
    initials: "JD",
    avatarType: 'initials'
  },
  {
    quote: "Working with Manikandan was a pleasure. He's highly skilled, communicative, and always goes the extra mile to ensure the quality of his work.",
    name: "John Smith",
    position: "CTO",
    company: "Software Company",
    avatar: null,
    initials: "JS",
    avatarType: 'initials'
  },
  {
    quote: "Manikandan transformed our vision into a reality. His expertise in modern web technologies is evident in the robust and scalable solution he built for us.",
    name: "Emily White",
    position: "Product Manager",
    company: "E-commerce",
    avatar: null,
    initials: "EW",
    avatarType: 'initials'
  }
];

export default function TestimonialCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = DEFAULT_TESTIMONIALS;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <BentoCard className="md:col-span-2 md:row-span-1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="h-full flex flex-col"
      >
        <div className="flex-grow relative overflow-hidden min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex flex-col"
            >
              <svg className="w-8 h-8 text-gray-500 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 italic">
                &quot;{testimonials[activeIndex].quote}&quot;
              </p>
              <div className="mt-4 flex items-center">
                {testimonials[activeIndex].avatarType === 'image' && testimonials[activeIndex].avatar ? (
                  <img 
                    src={testimonials[activeIndex].avatar!} 
                    alt={testimonials[activeIndex].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    {testimonials[activeIndex].initials}
                  </div>
                )}
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{testimonials[activeIndex].name}</p>
                  <p className="text-xs text-gray-400">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-purple-500' : 'bg-gray-700'} transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </BentoCard>
  );
}