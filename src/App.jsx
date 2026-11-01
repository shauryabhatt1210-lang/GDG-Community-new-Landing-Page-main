import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { About } from './components/About';
import { ScrollShowcase } from './components/ScrollShowcase';
import { Events } from './components/Events';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { EventModal } from './components/EventModal';
import { LegoClick } from './components/LegoClick';

export default function App() {
  // Light mode is the default and main mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gdg_theme');
      if (saved) return saved === 'dark';
    }
    // Default explicitly to false (light mode)
    return false;
  });

  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedEventForRSVP, setSelectedEventForRSVP] = useState(null);

  // Sync dark mode class on document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('gdg_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('gdg_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Navigation Bar with Scroll Progress Bar (Events before Projects) */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Dynamic Community Stats */}
        <StatsSection />

        {/* About: Mission, Vision, Benefits */}
        <About
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Scroll-Driven Horizontal Showcase ("When you scroll down, things slide & change") */}
        <ScrollShowcase
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Events & Flagship Conferences (Placed ABOVE Projects as requested) */}
        <Events
          onOpenRSVPModal={(event) => setSelectedEventForRSVP(event)}
        />

        {/* Member Projects & Filter */}
        <Projects />

        {/* Testimonials & Member Voices */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Call to Action Banner & Quick Join */}
        <CTA
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Demo Contact & Office Hours */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global LEGO click effect */}
      <LegoClick />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <EventModal
        event={selectedEventForRSVP}
        onClose={() => setSelectedEventForRSVP(null)}
      />

    </div>
  );
}
