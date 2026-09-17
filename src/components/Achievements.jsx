import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[#242424] bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#242424] gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                {achievements.sectionTag}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              {achievements.headline}
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-sm max-w-sm font-light">
            {achievements.description}
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l border-[#242424] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {achievements.timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-[#242424] group-hover:border-primary group-hover:bg-primary transition-all duration-300" />

              {/* Timeline Card */}
              <div className="bg-[#0D0D0D] border border-[#242424] p-6 sm:p-8 rounded-sm hover:border-white/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white group-hover:text-primary transition-colors">
                    {item.year}
                  </span>
                  <span className="font-mono text-[11px] text-[#8A8A8A] border border-[#242424] px-2.5 py-1 rounded bg-[#050505] tracking-widest uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on placeholder content for easy customization */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[11px] text-[#8A8A8A]/70 uppercase tracking-widest">
            // Milestones & season campaigns dynamically loaded from portfolioData.js
          </p>
        </div>

      </div>
    </section>
  );
}
