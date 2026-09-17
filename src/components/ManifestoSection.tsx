import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { Language } from '../types';
import { TranslationData } from '../translations';

interface ManifestoSectionProps {
  currentLang: Language;
  t: TranslationData;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ currentLang, t }) => {
  const isMyanmar = currentLang === 'my';
  const { manifestoSection } = t;

  return (
    <section id="manifesto" className="py-24 lg:py-36 text-center relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse,rgba(217,179,95,0.12),transparent_70%)] pointer-events-none filter blur-3xl" />

      <div className="w-[min(1080px,calc(100%-36px))] mx-auto relative z-10">
        <div className="eyebrow-accent justify-center mb-6">
          {manifestoSection.eyebrow}
        </div>

        <blockquote
          className={`max-w-[940px] mx-auto text-2xl sm:text-4xl lg:text-5xl font-black text-[#f5f2e9] leading-[1.25] tracking-tight my-6 sm:my-8 ${
            isMyanmar ? 'font-myanmar leading-[1.65]' : 'font-serif-display'
          }`}
        >
          {manifestoSection.quoteLine1}
          <br className="hidden sm:inline" />
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#f2d78f] via-[#d9b35f] to-[#f2d78f]">
            {manifestoSection.quoteHighlight}
          </span>
        </blockquote>

        <p
          className={`text-[#9aa4b1] text-base sm:text-lg max-w-[640px] mx-auto leading-relaxed mt-6 ${
            isMyanmar ? 'font-myanmar leading-[1.9]' : ''
          }`}
        >
          {manifestoSection.desc}
        </p>
      </div>
    </section>
  );
};
