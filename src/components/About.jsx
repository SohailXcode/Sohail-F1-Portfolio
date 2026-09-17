import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[#242424] relative bg-[#050505]">
      {/* Background subtle telemetry accent */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
            {about.sectionTag}
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Headline */}
          <div className="lg:col-span-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight tracking-tight">
              {about.headline}
            </h2>
            <div className="w-12 h-1 bg-primary mt-6" />
          </div>

          {/* Statement Paragraph */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[#8A8A8A] text-lg sm:text-xl font-normal leading-relaxed text-balance">
              {about.statement}
            </p>
          </div>
        </div>

        {/* Statistics Row with Thin Separators and Large Typography */}
        <div className="mt-20 pt-12 border-t border-[#242424] grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {about.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group pr-4"
            >
              {/* Stat number with large typography */}
              <div className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-3 font-heading font-semibold text-base sm:text-lg text-white uppercase tracking-wider">
                {stat.label}
              </div>

              {/* Detail */}
              <div className="mt-1 font-mono text-xs text-[#8A8A8A] tracking-wide">
                {stat.detail}
              </div>

              {/* Thin vertical separator for desktop */}
              {idx < about.stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-2 bottom-2 w-[1px] bg-[#242424]" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
