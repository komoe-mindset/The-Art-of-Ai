import React, { useState } from 'react';
import { Languages, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TranslationData } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  t: TranslationData;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#080a0e]/85 border-b border-white/6 transition-colors">
      <div className="w-[min(1180px,calc(100%-36px))] mx-auto h-[72px] flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 font-black tracking-wider text-[#f5f2e9] hover:text-[#f2d78f] transition-colors group"
          id="navbar-brand"
        >
          <span className="w-9 h-9 rounded-full grid place-items-center border border-[#d9b35f]/30 bg-radial from-[#f2d78f]/30 to-[#d9b35f]/10 shadow-[inset_0_0_20px_rgba(217,179,95,0.15)] text-[#f2d78f] font-serif text-lg group-hover:scale-105 transition-transform">
            智
          </span>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-widest text-[#f5f2e9]">
              {t.brand.title}
            </span>
            <span
              className={`text-[10px] text-[#a8b0bc] hidden sm:inline-block ${
                currentLang === 'my' ? 'font-myanmar tracking-normal' : 'tracking-wider uppercase'
              }`}
            >
              {t.brand.sub}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[#c9ced7] text-sm">
          <a
            href="#principles"
            className="hover:text-[#f2d78f] transition-colors py-1 relative"
            id="nav-link-principles"
          >
            {t.nav.principles}
          </a>
          <a
            href="#arena"
            className="hover:text-[#f2d78f] transition-colors py-1 relative"
            id="nav-link-arena"
          >
            {t.nav.arena}
          </a>
          <a
            href="#teacher"
            className="hover:text-[#f2d78f] transition-colors py-1 relative"
            id="nav-link-teacher"
          >
            {t.nav.teacher}
          </a>
          <a
            href="#manifesto"
            className="hover:text-[#f2d78f] transition-colors py-1 relative"
            id="nav-link-manifesto"
          >
            {t.nav.manifesto}
          </a>
        </div>

        {/* Right side controls: Language Switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Seamless Language Toggle Switch */}
          <div
            className="relative flex items-center bg-[#131821] border border-[#d9b35f]/30 rounded-full p-1 shadow-inner shadow-black/40"
            title={t.nav.langSwitch}
          >
            <button
              type="button"
              onClick={onToggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                currentLang === 'en'
                  ? 'bg-gradient-to-r from-[#f2d78f] to-[#d9b35f] text-[#17130a] shadow-[0_2px_10px_rgba(217,179,95,0.35)]'
                  : 'text-[#a8b0bc] hover:text-[#f5f2e9]'
              }`}
              id="btn-lang-en"
            >
              <span>EN</span>
              <span className="hidden sm:inline text-[10px] opacity-80">English</span>
            </button>
            <button
              type="button"
              onClick={onToggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                currentLang === 'my'
                  ? 'bg-gradient-to-r from-[#f2d78f] to-[#d9b35f] text-[#17130a] shadow-[0_2px_10px_rgba(217,179,95,0.35)]'
                  : 'text-[#a8b0bc] hover:text-[#f5f2e9]'
              }`}
              id="btn-lang-my"
            >
              <span>မြန်မာ</span>
              <span className="hidden sm:inline text-[10px] opacity-80">MM</span>
            </button>
          </div>

          {/* Action CTA */}
          <a
            href="#arena"
            className="hidden sm:inline-flex items-center gap-1.5 border border-[#d9b35f]/35 bg-[#d9b35f]/10 hover:bg-[#d9b35f]/20 text-[#f2d78f] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-[0_4px_16px_rgba(217,179,95,0.12)] hover:shadow-[0_6px_22px_rgba(217,179,95,0.25)] hover:-translate-y-0.5"
            id="nav-cta-arena"
          >
            <span>{t.nav.enterArena}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#a8b0bc] hover:text-[#f5f2e9] hover:bg-white/5"
            aria-label="Toggle Navigation Menu"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0d12]/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#principles"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#c9ced7] hover:text-[#f2d78f] transition-colors py-1"
          >
            {t.nav.principles}
          </a>
          <a
            href="#arena"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#c9ced7] hover:text-[#f2d78f] transition-colors py-1"
          >
            {t.nav.arena}
          </a>
          <a
            href="#teacher"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#c9ced7] hover:text-[#f2d78f] transition-colors py-1"
          >
            {t.nav.teacher}
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#c9ced7] hover:text-[#f2d78f] transition-colors py-1"
          >
            {t.nav.manifesto}
          </a>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-[#a8b0bc]">{t.nav.langSwitch}:</span>
            <button
              type="button"
              onClick={() => {
                onToggleLang();
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d9b35f]/40 bg-[#d9b35f]/15 text-[#f2d78f] text-xs font-bold"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'မြန်မာဘာသာသို့ ပြောင်းမည်' : 'Switch to English'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
