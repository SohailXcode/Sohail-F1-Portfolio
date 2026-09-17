import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { HiArrowSmRight } from "react-icons/hi";

export default function Hero({ onOpenAI }) {
  const { driver } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden telemetry-grid">
      {/* Subtle ambient lighting / radial vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#151515]/60 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#242424] w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-widest text-white uppercase">
              {driver.statusText}
            </span>
            <span className="text-[#242424]">|</span>
            <span className="font-mono text-[11px] text-[#8A8A8A] tracking-wider">
              CAR #{driver.carNumber}
            </span>
          </div>

          {/* Large Hero Heading */}
          <h1 className="font-heading font-extrabold tracking-tight text-white uppercase text-5xl sm:text-7xl md:text-8xl leading-[0.92] select-none">
            <span className="block">{driver.firstName}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#8A8A8A]">
              {driver.lastName}
            </span>
          </h1>

          {/* Subtitle with motorsport accent */}
          <div className="mt-5 flex items-center gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-primary" />
            <p className="font-heading text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-white uppercase">
              {driver.title}
            </p>
          </div>

          {/* Supporting Text */}
          <p className="mt-4 text-[#8A8A8A] text-base sm:text-lg max-w-lg font-light tracking-wide italic">
            "{driver.mantra}"
          </p>

          {/* Animated Track Line SVG */}
          <div className="relative my-8 w-full max-w-md h-7 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 450 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background faint guide track */}
              <path
                d="M 5 22 C 70 22, 110 6, 175 6 C 240 6, 280 24, 345 24 C 390 24, 420 14, 445 14"
                stroke="#242424"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Animated racing red track line */}
              <motion.path
                d="M 5 22 C 70 22, 110 6, 175 6 C 240 6, 280 24, 345 24 C 390 24, 420 14, 445 14"
                stroke="#E10600"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute right-0 top-0 font-mono text-[9px] text-[#8A8A8A] uppercase tracking-widest">
              TELEMETRY: APEX FLOW
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#racing"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase overflow-hidden rounded-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(225,6,0,0.4)]"
            >
              <span>VIEW RACING PROFILE</span>
              <HiArrowSmRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenAI}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary/10 border border-primary/50 text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(225,6,0,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>PIT WALL AI</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3.5 bg-[#0D0D0D] border border-[#242424] text-[#8A8A8A] hover:text-white font-heading font-medium text-xs sm:text-sm tracking-wider uppercase rounded-sm hover:border-white/40 hover:bg-[#151515] transition-all duration-300"
            >
              CONTACT
            </a>
          </div>

          {/* Quick telemetry footer strip */}
          <div className="mt-10 pt-6 border-t border-[#242424]/60 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="font-mono text-[10px] text-[#8A8A8A] uppercase">DISCIPLINE</div>
              <div className="font-heading font-bold text-xs sm:text-sm text-white">FIA F1</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#8A8A8A] uppercase">CAR NO.</div>
              <div className="font-heading font-bold text-xs sm:text-sm text-primary">#07</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#8A8A8A] uppercase">SECTOR 1</div>
              <div className="font-heading font-bold text-xs sm:text-sm text-purple-400">PURPLE</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-End F1 Motorsport Aerodynamic Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-[4/5] max-h-[580px] rounded-lg bg-gradient-to-b from-[#0D0D0D] via-[#080808] to-[#050505] border border-[#242424] p-6 flex flex-col justify-between overflow-hidden shadow-2xl group">
            
            {/* Corner Tech Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/60" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/60" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/60" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/60" />

            {/* Header Telemetry HUD */}
            <div className="flex items-center justify-between border-b border-[#242424] pb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white tracking-wider font-semibold">CHASSIS SPEC // 07</span>
              </div>
              <span className="text-[#8A8A8A] text-[11px]">AERO CARBON COMPOSITE</span>
            </div>

            {/* Center Visual: Bespoke Geometric F1 Silhouette & Monocoque Sculpture */}
            <div className="relative my-auto flex items-center justify-center py-6">
              {/* Concentric telemetry rings */}
              <div className="absolute w-64 h-64 border border-[#242424]/60 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-80 h-80 border border-dashed border-[#242424]/40 rounded-full" />
              
              {/* Aerodynamic Formula 1 Silhouette Visual */}
              <svg
                className="w-full max-w-[340px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] relative z-10 transition-transform duration-500 group-hover:scale-105"
                viewBox="0 0 400 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="carbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E1E1E" />
                    <stop offset="45%" stopColor="#121212" />
                    <stop offset="100%" stopColor="#080808" />
                  </linearGradient>
                  <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E10600" />
                    <stop offset="100%" stopColor="#8A0000" />
                  </linearGradient>
                </defs>

                {/* Rear Wing Endplate */}
                <path d="M 30 70 L 45 40 L 70 40 L 60 90 L 35 90 Z" fill="url(#carbonGrad)" stroke="#242424" strokeWidth="1.5" />
                <path d="M 45 45 L 85 45 L 80 52 L 40 52 Z" fill="url(#redAccent)" />
                <line x1="45" y1="40" x2="60" y2="90" stroke="#E10600" strokeWidth="2" />

                {/* Engine Cover & Shark Fin */}
                <path
                  d="M 75 75 L 150 45 L 210 70 L 230 110 L 75 110 Z"
                  fill="url(#carbonGrad)"
                  stroke="#333333"
                  strokeWidth="1.5"
                />
                <path d="M 145 48 L 180 48 L 205 68 L 165 68 Z" fill="url(#redAccent)" opacity="0.85" />

                {/* Halo & Cockpit Opening */}
                <path
                  d="M 175 75 C 195 55, 230 55, 245 80 L 235 95 L 180 90 Z"
                  fill="#0A0A0A"
                  stroke="#E10600"
                  strokeWidth="2"
                />

                {/* Main Monocoque / Sidepod Bodywork */}
                <path
                  d="M 70 110 C 120 110, 160 90, 230 90 C 290 90, 330 120, 365 140 L 330 148 L 100 148 C 80 140, 70 125, 70 110 Z"
                  fill="url(#carbonGrad)"
                  stroke="#2E2E2E"
                  strokeWidth="1.5"
                />

                {/* Front Nose Cone & Front Wing */}
                <path
                  d="M 270 100 L 360 135 L 385 145 L 340 152 L 260 115 Z"
                  fill="url(#carbonGrad)"
                  stroke="#444444"
                  strokeWidth="1.2"
                />
                <path d="M 345 142 L 390 148 L 385 156 L 335 150 Z" fill="url(#redAccent)" />
                <path d="M 330 148 L 375 154 L 370 162 L 320 155 Z" fill="#151515" stroke="#242424" />

                {/* Rear Tire Wheel */}
                <ellipse cx="110" cy="145" rx="34" ry="46" fill="#0A0A0A" stroke="#2B2B2B" strokeWidth="4" />
                <ellipse cx="110" cy="145" rx="22" ry="30" fill="#141414" stroke="#E10600" strokeWidth="1.5" />
                <circle cx="110" cy="145" r="8" fill="#E10600" />

                {/* Front Tire Wheel */}
                <ellipse cx="310" cy="155" rx="30" ry="40" fill="#0A0A0A" stroke="#2B2B2B" strokeWidth="4" />
                <ellipse cx="310" cy="155" rx="19" ry="26" fill="#141414" stroke="#E10600" strokeWidth="1.5" />
                <circle cx="310" cy="155" r="7" fill="#E10600" />

                {/* Driver Number on Livery */}
                <text x="180" y="125" fill="#FFFFFF" fontSize="24" fontFamily="Space Grotesk" fontWeight="bold" fontStyle="italic">
                  07
                </text>

                {/* Speed aerodynamic lines */}
                <line x1="30" y1="120" x2="60" y2="120" stroke="#E10600" strokeWidth="2" strokeDasharray="6 3" />
                <line x1="10" y1="135" x2="50" y2="135" stroke="#8A8A8A" strokeWidth="1.5" strokeDasharray="8 4" />
              </svg>
            </div>

            {/* Bottom Telemetry Metrics Strip */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#242424] font-mono text-[11px]">
              <div className="bg-[#050505] p-2 rounded border border-[#242424]/60">
                <div className="text-[#8A8A8A]">DOWNFORCE TRIM</div>
                <div className="text-white font-bold tracking-wider">HIGH / LOW DRAG</div>
              </div>
              <div className="bg-[#050505] p-2 rounded border border-[#242424]/60">
                <div className="text-[#8A8A8A]">DRS STATUS</div>
                <div className="text-primary font-bold tracking-wider">ARMED & READY</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
