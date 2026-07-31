"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DEFAULT_MARQUEE = {
  content: 'Manikandan ✦ Web Developer ✦ Designer ✦ Creator',
  animationDuration: 20,
  fontSize: 'text-6xl',
  padding: 'py-8'
};

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [numDuplicates, setNumDuplicates] = useState(3);
  const marqueeData = DEFAULT_MARQUEE;

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidths = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      
      const tempElement = document.createElement('div');
      tempElement.className = `${marqueeData.fontSize} font-bold whitespace-nowrap`;
      tempElement.innerText = marqueeData.content;
      document.body.appendChild(tempElement);
      const measuredContentWidth = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      setContentWidth(measuredContentWidth);
      
      const duplicatesNeeded = Math.max(3, Math.ceil((containerWidth * 2) / (measuredContentWidth || 1)));
      setNumDuplicates(duplicatesNeeded);
    };
    
    updateWidths();
    window.addEventListener('resize', updateWidths);
    
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, [marqueeData.content, marqueeData.fontSize]);
  
  return (
    <div className={`w-full overflow-hidden ${marqueeData.padding} bg-black`}>
      <div 
        ref={containerRef}
        className="relative whitespace-nowrap"
      >
        <motion.div
          className="inline-block"
          animate={{
            x: [-contentWidth, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: marqueeData.animationDuration,
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: numDuplicates }).map((_, index) => (
            <span 
              key={index} 
              className={`inline-block ${marqueeData.fontSize} font-bold px-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-500`}
            >
              {marqueeData.content}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}