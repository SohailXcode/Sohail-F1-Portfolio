import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Racing from "./components/Racing";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-primary selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Racing />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
