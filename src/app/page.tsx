"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, ArrowRight, Layers, Cpu, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Navigation Header */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/25">
            SK
          </div>
          <div>
            <h1 className="font-semibold text-base leading-tight">Santhosh Kumar</h1>
            <p className="text-xs text-zinc-400">Portfolio Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Environment Ready
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-purple-300 mb-8 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          Clean Setup & Missing Packages Installed
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]"
        >
          Ready to Build Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            Next-Gen Portfolio
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl"
        >
          The workspace has been completely cleaned, dependencies installed, and Next.js 16 App Router foundation configured. Tell me what sections, themes, or designs you want to create!
        </motion.p>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left"
        >
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition-all">
            <div className="h-9 w-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3">
              <Code2 className="h-4 w-4 text-purple-400" />
            </div>
            <h3 className="font-medium text-sm text-zinc-200">Next.js & React 19</h3>
            <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
              App router with server components, fast routing, and modern standards.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition-all">
            <div className="h-9 w-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-3">
              <Palette className="h-4 w-4 text-pink-400" />
            </div>
            <h3 className="font-medium text-sm text-zinc-200">Tailwind & Framer Motion</h3>
            <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
              Smooth fluid animations, dark theme tokens, and custom aesthetic components.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur hover:border-zinc-700 transition-all">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
              <Rocket className="h-4 w-4 text-indigo-400" />
            </div>
            <h3 className="font-medium text-sm text-zinc-200">Ready for Customization</h3>
            <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
              Ready for your custom hero, projects, timeline, skills, and contact form.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-6 text-center text-xs text-zinc-500">
        Workspace initialized & ready • Awaiting your design & feature instructions
      </footer>
    </main>
  );
}
