/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ArenaSection } from './components/ArenaSection';
import { TeacherSection } from './components/TeacherSection';
import { ManifestoSection } from './components/ManifestoSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('art_of_ai_language');
      if (saved === 'my' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore localStorage exceptions in restrictive sandboxes
    }
    return 'en';
  });

  const toggleLanguage = () => {
    setCurrentLang((prev) => {
      const nextLang = prev === 'en' ? 'my' : 'en';
      try {
        localStorage.setItem('art_of_ai_language', nextLang);
      } catch {
        // Ignore
      }
      return nextLang;
    });
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.body.setAttribute('data-lang', currentLang);
  }, [currentLang]);

  const t = translations[currentLang];

  return (
    <div
      className={`min-h-screen text-[#f5f2e9] selection:bg-[#d9b35f]/30 selection:text-[#f2d78f] relative ${
        currentLang === 'my' ? 'font-myanmar' : ''
      }`}
      id="top"
    >
      {/* Background Interactive Ambient Strategy Canvas */}
      <ParticleCanvas />

      {/* Sticky Navigation with Seamless Language Switcher */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} t={t} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection currentLang={currentLang} t={t} />
        <PrinciplesSection currentLang={currentLang} t={t} />
        <ArenaSection currentLang={currentLang} t={t} />
        <TeacherSection currentLang={currentLang} t={t} />
        <ManifestoSection currentLang={currentLang} t={t} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onToggleLang={toggleLanguage} t={t} />
    </div>
  );
}
