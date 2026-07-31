"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, RefreshCw, Tv } from "lucide-react";
import { CREATIVE_SHOWCASE } from "@/data/portfolioData";

// List of showcase items
const SHOWCASE_ITEMS = CREATIVE_SHOWCASE.map((item, idx) => ({
  ...item,
  image: item.thumbnail.endsWith(".mp4") ? "/thumbnail/Firefly.png" : item.thumbnail,
  channelNum: String(idx + 1).padStart(2, "0"),
}));

export default function TVGlitchShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Animation States: 'off' -> 'noise' -> 'flare' -> 'on'
  const [tvState, setTvState] = useState<"off" | "noise" | "flare" | "on">("off");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChannelChanging, setIsChannelChanging] = useState(false);

  // Trigger TV power-on sequence when section scrolls into view
  useEffect(() => {
    if (isInView && tvState === "off") {
      runPowerOnSequence();
    }
  }, [isInView]);

  const runPowerOnSequence = () => {
    setTvState("noise");
    setTimeout(() => {
      setTvState("flare");
      setTimeout(() => {
        setTvState("on");
      }, 500);
    }, 900);
  };

  const triggerGlitch = () => {
    runPowerOnSequence();
  };

  // Canvas TV Noise static generator (Image 1 match)
  useEffect(() => {
    if (tvState !== "noise") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const renderNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.createImageData(w, h);
      const buffer = new Uint32Array(imgData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        const v = Math.floor(Math.random() * 255);
        buffer[i] = (255 << 24) | (v << 16) | (v << 8) | v;
      }
      ctx.putImageData(imgData, 0, 0);

      // Horizontal noise scanlines
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      for (let y = 0; y < h; y += 3) {
        if (Math.random() > 0.3) {
          ctx.fillRect(0, y, w, 1 + Math.random() * 2);
        }
      }

      // Random glitch bar
      if (Math.random() > 0.6) {
        const barY = Math.floor(Math.random() * h);
        const barH = Math.floor(Math.random() * 20) + 5;
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.fillRect(0, barY, w, barH);
      }

      animId = requestAnimationFrame(renderNoise);
    };

    renderNoise();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [tvState]);

  // Slideshow auto-advance every 3.5 seconds without transition (instant cut)
  useEffect(() => {
    if (tvState !== "on") return;

    const interval = setInterval(() => {
      changeChannel((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [tvState]);

  const changeChannel = (newIndexOrFn: number | ((prev: number) => number)) => {
    setIsChannelChanging(true);
    setCurrentIndex(newIndexOrFn);
    setTimeout(() => {
      setIsChannelChanging(false);
    }, 60);
  };

  const currentItem = SHOWCASE_ITEMS[currentIndex];

  return (
    <div ref={containerRef} className="w-full relative select-none">
      {/* Skeuomorphic CRT Glass Faceplate Container */}
      <div className="relative w-full aspect-[16/9] min-h-[420px] sm:min-h-[520px] md:min-h-[640px] rounded-[3%_3%_3%_3%_/_6%_6%_6%_6%] bg-[#040406] overflow-hidden border-2 border-white/20 shadow-[inset_0_0_120px_rgba(0,0,0,0.95),0_30px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(168,85,247,0.15)] flex items-center justify-center">
        
        {/* Phase 1: Noise Glitch Canvas (Image 1 match) */}
        {tvState === "noise" && (
          <canvas
            ref={canvasRef}
            width={640}
            height={360}
            className="absolute inset-0 w-full h-full object-cover z-30 pointer-events-none"
          />
        )}

        {/* Phase 2: CRT Power-On Horizontal Lens Flare (Image 2 match) */}
        {tvState === "flare" && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-40 overflow-hidden">
            <motion.div
              initial={{ scaleY: 0.005, scaleX: 0.05, opacity: 0.2 }}
              animate={{ scaleY: [0.005, 0.005, 1], scaleX: [0.05, 1, 1], opacity: [0.2, 1, 1] }}
              transition={{ duration: 0.5, times: [0, 0.45, 1], ease: "easeInOut" }}
              className="w-full h-full bg-black flex items-center justify-center relative"
            >
              <div className="w-full h-1 bg-white shadow-[0_0_40px_#ffffff,0_0_80px_#c084fc,0_0_120px_#a855f7] relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-white blur-2xl rounded-full opacity-90" />
              </div>
            </motion.div>
          </div>
        )}

        {/* Phase 3: TV Screen Content (Slide Show Without Transition) */}
        {(tvState === "on" || tvState === "flare") && (
          <div className="relative w-full h-full">
            {/* Bulging Screen Image Display */}
            <div className={`relative w-full h-full transform scale-[1.04] transition-all ${isChannelChanging ? "opacity-20 filter brightness-150" : "opacity-100"}`}>
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-cover scale-[1.05]"
                priority
                sizes="100vw"
              />
            </div>

            {/* 1. CRT Spherical Center Mound Radial Glow & Depth Vignette */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  "radial-gradient(ellipse 75% 75% at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.92) 100%)",
              }}
            />

            {/* 2. Glossy Glass Sheen / Diagonal Surface Specular Reflection */}
            <div
              className="absolute inset-0 pointer-events-none z-15 opacity-75"
              style={{
                background:
                  "linear-gradient(130deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 28%, rgba(255,255,255,0) 45%, rgba(0,0,0,0.2) 75%, rgba(255,255,255,0.03) 100%)",
              }}
            />

            {/* 3. Outer Glass Specular Rim Highlight */}
            <div className="absolute inset-0 pointer-events-none z-15 border-t-2 border-l-2 border-white/30 rounded-[3%_3%_3%_3%_/_6%_6%_6%_6%] shadow-[inset_0_2px_12px_rgba(255,255,255,0.2)]" />

            {/* 4. CRT Scanlines & RGB Subpixel Fringing */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30 z-10"
              style={{
                background:
                  "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.5) 50%), linear-gradient(90deg, rgba(255,0,0,0.03), rgba(0,255,0,0.01), rgba(0,0,255,0.03))",
                backgroundSize: "100% 4px, 6px 100%",
              }}
            />

            {/* Top OSD Channel Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md text-emerald-400 font-mono text-xs font-bold tracking-widest border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                CH-{currentItem.channelNum}
              </span>
              <span className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md text-white/80 font-mono text-xs uppercase tracking-wider border border-white/10 hidden sm:inline-block shadow-lg">
                {currentItem.category}
              </span>
            </div>

            {/* Bottom OSD Title Banner & Channel Controls */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex items-end justify-between gap-4">
              <div className="bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 max-w-xl shadow-xl">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-0.5">
                  TV SHOWCASE • CHANNEL {currentItem.channelNum}
                </span>
                <h3 className="text-sm sm:text-lg font-medium text-white tracking-wide truncate">
                  {currentItem.title}
                </h3>
              </div>

              {/* TV Channel Controls */}
              <div className="flex items-center gap-2 bg-black/85 backdrop-blur-md p-1.5 rounded-xl border border-white/10 shrink-0 shadow-xl">
                <button
                  onClick={() => changeChannel((prev) => (prev - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/20 text-white transition-colors"
                  title="Previous Channel"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-mono text-white/70 px-1.5">
                  {currentIndex + 1} / {SHOWCASE_ITEMS.length}
                </span>
                <button
                  onClick={() => changeChannel((prev) => (prev + 1) % SHOWCASE_ITEMS.length)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/20 text-white transition-colors"
                  title="Next Channel"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={triggerGlitch}
                  className="p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 transition-colors ml-1"
                  title="Re-trigger TV Glitch"
                >
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Off State Cover */}
        {tvState === "off" && (
          <div className="absolute inset-0 bg-[#050505] flex items-center justify-center text-white/20">
            <Tv size={36} />
          </div>
        )}
      </div>
    </div>
  );
}
