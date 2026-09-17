import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineCheck } from "react-icons/hi";

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[#242424] bg-[#080808] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
            {contact.sectionTag}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-6">
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-white tracking-tight leading-none">
              {contact.headline}
            </h2>
            
            <p className="mt-6 text-[#8A8A8A] text-lg sm:text-xl font-light leading-relaxed max-w-lg">
              {contact.subtext}
            </p>

            <div className="mt-8 pt-8 border-t border-[#242424] flex items-center gap-6">
              <div className="font-mono text-xs text-[#8A8A8A]">
                MANAGEMENT / PR: <span className="text-white font-medium">INQUIRIES OPEN</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Right Column: Interactive Buttons & Social Links */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="bg-[#0D0D0D] border border-[#242424] p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#151515] border border-[#242424] flex items-center justify-center text-primary text-xl">
                  <HiOutlineMail />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                    DIRECT DISPATCH / OFFICIAL EMAIL
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-heading font-bold text-white text-base sm:text-lg hover:text-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-[#151515] hover:bg-[#1f1f1f] text-white border border-[#242424] font-mono text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <HiOutlineCheck className="text-primary text-sm" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <span>COPY EMAIL</span>
                  )}
                </button>
                <a
                  href={`mailto:${contact.email}`}
                  className="px-4 py-2 bg-primary hover:bg-primary-hover text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
                >
                  SEND
                </a>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Instagram */}
              <a
                href={contact.socials.find(s => s.name === "Instagram")?.url || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0D0D0D] border border-[#242424] hover:border-white/40 p-5 rounded-sm flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#151515] border border-[#242424] flex items-center justify-center text-white group-hover:text-primary transition-colors">
                    <FaInstagram size={18} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white uppercase text-sm tracking-wider">
                      Instagram
                    </div>
                    <div className="font-mono text-xs text-[#8A8A8A]">
                      {contact.socials.find(s => s.name === "Instagram")?.handle}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#8A8A8A] group-hover:text-white group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={contact.socials.find(s => s.name === "LinkedIn")?.url || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0D0D0D] border border-[#242424] hover:border-white/40 p-5 rounded-sm flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#151515] border border-[#242424] flex items-center justify-center text-white group-hover:text-primary transition-colors">
                    <FaLinkedinIn size={18} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white uppercase text-sm tracking-wider">
                      LinkedIn
                    </div>
                    <div className="font-mono text-xs text-[#8A8A8A]">
                      {contact.socials.find(s => s.name === "LinkedIn")?.handle}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#8A8A8A] group-hover:text-white group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            </div>

            {/* Note on editing */}
            <div className="mt-2 text-right">
              <span className="font-mono text-[10px] text-[#8A8A8A]/60">
                EDITABLE: URLs configured in portfolioData.js
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
