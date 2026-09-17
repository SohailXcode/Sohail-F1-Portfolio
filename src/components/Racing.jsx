import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { HiOutlineLightningBolt, HiOutlineShieldCheck } from "react-icons/hi";

export default function Racing() {
  const { racing } = portfolioData;

  return (
    <section id="racing" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[#242424] bg-[#080808] relative telemetry-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#242424] gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                {racing.sectionTag}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              {racing.headline}
            </h2>
          </div>
          <div className="font-mono text-xs text-[#8A8A8A] flex items-center gap-4">
            <span className="px-2.5 py-1 bg-[#151515] border border-[#242424] text-white rounded-sm">
              LIVE TELEMETRY STREAM
            </span>
            <span className="hidden sm:inline text-primary">● CALIBRATED</span>
          </div>
        </div>

        {/* Telemetry Technical Profile Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Driver Telemetry Specs Grid */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-[#242424] rounded-sm divide-y divide-[#242424]">
            <div className="px-6 py-4 bg-[#121212] flex items-center justify-between font-mono text-xs">
              <span className="text-white font-semibold tracking-wider">FIA DRIVER PROFILE // MONOCOQUE SPEC</span>
              <span className="text-[#8A8A8A]">CHASSIS TELEMETRY</span>
            </div>

            {racing.telemetry.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-[#151515]/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1 h-3 bg-transparent group-hover:bg-primary transition-colors" />
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#8A8A8A] uppercase">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                    {item.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A8A8A] bg-[#050505] border border-[#242424] px-2 py-0.5 rounded">
                    {item.code}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Telemetry Sensor Feeds & Race Timing Screen Aesthetic */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Performance Matrix Card */}
            <div className="bg-[#0D0D0D] border border-[#242424] p-6 rounded-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#242424] mb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <HiOutlineLightningBolt className="text-primary text-base" />
                  <span className="font-bold tracking-wider uppercase">PERFORMANCE TELEMETRY</span>
                </div>
                <span className="font-mono text-[10px] text-[#8A8A8A]">GPS SYNC: 100Hz</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {racing.technicalMetrics.map((metric) => (
                  <div key={metric.label} className="bg-[#050505] p-3.5 border border-[#242424] rounded-sm">
                    <div className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                      {metric.label}
                    </div>
                    <div className="font-heading font-extrabold text-base sm:text-lg text-white mt-1">
                      {metric.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-primary flex items-center gap-1">
                      <span>STATUS:</span>
                      <span className="text-white font-medium">{metric.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timing Screen Sector Graphic */}
            <div className="bg-[#0D0D0D] border border-[#242424] p-5 rounded-sm">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-white font-semibold">CIRCUIT SECTOR TIMING</span>
                <span className="text-purple-400 font-bold">ALL S1 / S2 / S3 OPTIMAL</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="bg-[#151515] p-2.5 rounded border border-purple-500/40">
                  <div className="text-[10px] text-[#8A8A8A]">SEC 1</div>
                  <div className="text-purple-400 font-bold text-xs sm:text-sm mt-0.5">26.142s</div>
                </div>
                <div className="bg-[#151515] p-2.5 rounded border border-purple-500/40">
                  <div className="text-[10px] text-[#8A8A8A]">SEC 2</div>
                  <div className="text-purple-400 font-bold text-xs sm:text-sm mt-0.5">34.890s</div>
                </div>
                <div className="bg-[#151515] p-2.5 rounded border border-purple-500/40">
                  <div className="text-[10px] text-[#8A8A8A]">SEC 3</div>
                  <div className="text-purple-400 font-bold text-xs sm:text-sm mt-0.5">22.019s</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#242424] flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
                <span>BEST LAP DELTA</span>
                <span className="text-primary font-bold">-0.384s</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
