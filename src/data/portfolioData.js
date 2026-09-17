/**
 * SOHAIL SHAIKH — FORMULA 1 RACER
 * Centralized portfolio data configuration.
 * All editable personal info, telemetry metrics, milestones, and links are here.
 */

export const portfolioData = {
  driver: {
    firstName: "SOHAIL",
    lastName: "SHAIKH",
    fullName: "Sohail Shaikh",
    title: "FORMULA 1 RACER",
    carNumber: "07",
    discipline: "Formula 1",
    country: "India",
    countryCode: "IND",
    statusText: "CURRENTLY RACING",
    mantra: "Precision. Speed. Discipline.",
    style: "Precision / Aggression / Control",
  },

  about: {
    sectionTag: "01 — ABOUT",
    headline: "Built for speed. Driven by precision.",
    statement:
      "Sohail Shaikh is a Formula 1 racer driven by competition, precision and continuous improvement. From preparation to race day, every detail matters — from understanding the car to making decisions under pressure.",
    stats: [
      {
        value: "01",
        label: "Racing Driver",
        detail: "FIA Super License Tier",
      },
      {
        value: "100%",
        label: "Commitment",
        detail: "Unrelenting physical & mental discipline",
      },
      {
        value: "∞",
        label: "Pursuit of Speed",
        detail: "Millisecond-by-millisecond perfection",
      },
    ],
  },

  racing: {
    sectionTag: "02 — RACING",
    headline: "THE RACE IS THE STORY.",
    telemetry: [
      { label: "DRIVER", value: "Sohail Shaikh", code: "SHK" },
      { label: "DISCIPLINE", value: "Formula 1", code: "FIA F1" },
      { label: "NUMBER", value: "07", code: "CAR #07" },
      { label: "COUNTRY", value: "India", code: "IND" },
      { label: "DRIVING STYLE", value: "Precision / Aggression / Control", code: "TELEMETRY" },
    ],
    technicalMetrics: [
      { label: "V-MAX SPEED", value: "354.2 km/h", status: "Optimal" },
      { label: "PEAK CORNERING G", value: "5.6 G", status: "Peak" },
      { label: "BRAKING FORCE", value: "140 kg pressure", status: "Nominal" },
      { label: "REACTION LATENCY", value: "185 ms", status: "Elite" },
    ],
  },

  achievements: {
    sectionTag: "03 — ACHIEVEMENTS",
    headline: "TIMELINE & PROGRESSION.",
    description: "Every lap is earned. Track progression across competitive seasons.",
    timeline: [
      {
        year: "2026",
        title: "Formula 1 Racing",
        description: "Competing at the highest level.",
        badge: "CURRENT ERA",
      },
      {
        year: "2025",
        title: "Advanced Racing Development",
        description: "Performance and racecraft development.",
        badge: "DEVELOPMENT",
      },
      {
        year: "2024",
        title: "Competitive Motorsport",
        description: "Building race experience and consistency.",
        badge: "CAMPAIGN",
      },
    ],
  },

  contact: {
    sectionTag: "04 — CONTACT",
    headline: "LET'S TALK.",
    subtext: "For racing opportunities, collaborations and professional enquiries.",
    email: "contact@sohailshaikh.com", // EDITABLE: replace with official contact email
    socials: [
      {
        name: "Instagram",
        url: "https://instagram.com/sohailshaikh", // EDITABLE placeholder
        handle: "@sohailshaikh",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sohailshaikh", // EDITABLE placeholder
        handle: "in/sohailshaikh",
      },
    ],
  },

  footer: {
    copyright: "© 2026 Sohail Shaikh. All rights reserved.",
  },
};
