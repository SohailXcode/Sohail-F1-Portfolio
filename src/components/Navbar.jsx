import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Racing", href: "#racing" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-[#242424] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Name with Red Indicator */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Sohail Shaikh Home"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <div className="font-heading font-bold tracking-tight text-white uppercase text-base sm:text-lg flex items-center gap-1.5 transition-colors group-hover:text-primary">
            <span>{portfolioData.driver.firstName}</span>
            <span className="font-light tracking-wide text-[#8A8A8A] group-hover:text-white transition-colors">
              {portfolioData.driver.lastName}
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#8A8A8A] border border-[#242424] px-1.5 py-0.5 rounded tracking-widest uppercase">
            {portfolioData.driver.carNumber}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#8A8A8A] hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-white bg-[#0D0D0D] border border-[#242424] hover:border-primary hover:text-white transition-all duration-200 rounded-sm"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#8A8A8A] hover:text-white focus:outline-none p-1.5 border border-[#242424] rounded-sm bg-[#0D0D0D]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#242424] px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/90 hover:text-primary font-heading uppercase tracking-wider py-2 border-b border-[#242424]/60 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#8A8A8A]">→</span>
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
                <span>STATUS: {portfolioData.driver.statusText}</span>
                <span className="text-primary">CAR #{portfolioData.driver.carNumber}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
