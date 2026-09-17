import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Racing from "./components/Racing";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PitWallAI from "./components/PitWallAI";

export default function App() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-primary selection:text-white flex flex-col">
      <Navbar onOpenAI={() => setIsAiOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenAI={() => setIsAiOpen(true)} />
        <About />
        <Racing />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <PitWallAI isOpen={isAiOpen} setIsOpen={setIsAiOpen} />
    </div>
  );
}
