import React from 'react';
import { ArrowUp, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TranslationData } from '../translations';

interface FooterProps {
  currentLang: Language;
  onToggleLang: () => void;
  t: TranslationData;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onToggleLang, t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 py-8 sm:py-10 bg-[#07090d] text-[#7f8996] text-xs sm:text-sm">
      <div className="w-[min(1180px,calc(100%-36px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="w-6 h-6 rounded-full border border-[#d9b35f]/40 bg-[#d9b35f]/10 text-[#f2d78f] grid place-items-center font-serif text-xs font-bold">
            智
          </span>
          <div className="space-y-0.5">
            <span className="text-[#d8dce2] font-semibold">{t.footer.artOfAi}</span>
            <span className="hidden sm:inline mx-2 text-white/20">|</span>
            <span className="block sm:inline text-[#a8b0bc]">{t.footer.socraticLab}</span>
          </div>
        </div>

        {/* Center / Right Controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#d9b35f]/40 bg-white/[0.03] hover:bg-[#d9b35f]/10 text-[#a8b0bc] hover:text-[#f2d78f] transition-all text-xs"
            id="footer-lang-toggle"
          >
            <Globe className="w-3.5 h-3.5 text-[#d9b35f]" />
            <span>{currentLang === 'en' ? 'မြန်မာဘာသာသို့ ပြောင်းရန်' : 'Switch to English'}</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full border border-white/10 hover:border-[#d9b35f]/40 bg-white/[0.03] hover:bg-[#d9b35f]/10 text-[#a8b0bc] hover:text-[#f2d78f] transition-all"
            aria-label="Scroll to top"
            id="footer-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
