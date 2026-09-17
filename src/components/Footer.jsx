import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { driver, footer } = portfolioData;

  return (
    <footer className="relative bg-[#050505] border-t border-[#242424] pt-12 pb-10 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Tiny Signature Red Racing Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#242424]/60">
          
          {/* Left: Driver Name */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-heading font-extrabold uppercase tracking-tight text-white text-base sm:text-lg">
              {driver.firstName} {driver.lastName}
            </span>
            <span className="font-mono text-xs text-[#8A8A8A] border border-[#242424] px-1.5 py-0.5 rounded">
              #{driver.carNumber}
            </span>
          </div>

          {/* Right: Driver Profession */}
          <div className="font-heading font-medium tracking-widest text-xs sm:text-sm text-[#8A8A8A] uppercase">
            {driver.title}
          </div>

        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A8A8A]">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-6">
            <span>DESIGNED FOR SPEED</span>
            <a
              href="#"
              className="hover:text-primary transition-colors uppercase tracking-wider"
              aria-label="Back to top of page"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
