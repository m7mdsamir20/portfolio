/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { SelectedWork } from './components/SelectedWork.tsx';
import { MyProcess } from './components/MyProcess.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // ScrollSpy to track active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'work', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFCFB] text-[#151515] flex flex-col items-center selection:bg-[#F36B21] selection:text-white">
      {/* Centered Main Page Container */}
      <main className="w-full max-w-[1180px] px-5 sm:px-8 lg:px-12 flex flex-col">
        {/* Navigation Bar */}
        <Navbar activeSection={activeSection} />

        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills & Technologies Section */}
        <Skills />

        {/* Selected Work Section */}
        <SelectedWork />

        {/* My Process Section */}
        <MyProcess />

        {/* Footer & Contact Section */}
        <Footer />
      </main>
    </div>
  );
}
