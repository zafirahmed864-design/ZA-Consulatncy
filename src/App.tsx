import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { BackgroundAnimations } from './components/BackgroundAnimations';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Default to dark theme as requested
    const saved = localStorage.getItem('za-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [selectedService, setSelectedService] = useState<string>('Website Design');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('za-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('za-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] dark:bg-[#0B0E14] bg-slate-50 text-[#F2F0EA] dark:text-[#F2F0EA] text-slate-900 transition-colors duration-300 selection:bg-[#F5B83D]/25 selection:text-[#FFD27A] relative overflow-x-hidden">
      
      {/* Dynamic Animated Ambient Background */}
      <BackgroundAnimations />

      {/* Sticky Glass Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onSelectService={handleSelectService}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onSeeWorkClick={scrollToWork} />

        {/* Infinite Scrolling Marquee */}
        <Marquee />

        {/* Core Services Section with Detailed Breakdown & Deliverables */}
        <Services onSelectService={handleSelectService} />

        {/* Selected Work (2 large 3D tilting browser mockups + small cards) */}
        <Projects />

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* About Section ('One person who answers your messages') */}
        <About />

        {/* 4-Step Process Section with interactive gold line */}
        <Process />

        {/* Contact Section with dynamic WhatsApp generator & direct copy */}
        <Contact
          selectedService={selectedService}
          onSelectService={handleSelectService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Context-Aware Chatbot with Multi-Step Booking & Direct WhatsApp */}
      <Chatbot onSelectService={handleSelectService} />

    </div>
  );
}
