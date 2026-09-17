import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TranslationData } from '../translations';

interface PrinciplesSectionProps {
  currentLang: Language;
  t: TranslationData;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({ currentLang, t }) => {
  const isMyanmar = currentLang === 'my';
  const { principlesSection } = t;

  return (
    <section id="principles" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="w-[min(1180px,calc(100%-36px))] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-end mb-12 sm:mb-16">
          <div>
            <div className="eyebrow-accent">
              {principlesSection.eyebrow}
            </div>
            <h2
              className={`mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f2e9] whitespace-pre-line ${
                isMyanmar ? 'font-myanmar leading-[1.3]' : 'font-serif-display leading-[0.98]'
              }`}
            >
              {principlesSection.title}
            </h2>
          </div>
          <p
            className={`text-[#aeb6c2] text-base sm:text-lg leading-[1.75] max-w-[650px] lg:justify-self-end ${
              isMyanmar ? 'font-myanmar leading-[1.9]' : ''
            }`}
          >
            {principlesSection.desc}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {principlesSection.items.map((principle) => (
            <article
              key={principle.id}
              className="group relative rounded-[24px] border border-white/8 bg-gradient-to-b from-[#12171f]/85 to-[#0a0d12]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.25)] hover:border-[#d9b35f]/40 hover:shadow-[0_20px_50px_rgba(217,179,95,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              id={`principle-card-${principle.id}`}
            >
              {/* Subtle top corner gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(217,179,95,0.08),transparent_70%)] rounded-tr-[24px] pointer-events-none" />

              <div>
                <div
                  className={`text-3xl sm:text-4xl font-black text-[#d9b35f] tracking-tight opacity-90 group-hover:text-[#f2d78f] transition-colors ${
                    isMyanmar ? 'font-myanmar' : 'font-serif-display'
                  }`}
                >
                  {principle.number}
                </div>

                <h3
                  className={`text-lg sm:text-xl font-bold text-[#f5f2e9] mt-4 mb-2.5 group-hover:text-[#f2d78f] transition-colors ${
                    isMyanmar ? 'font-myanmar leading-snug' : ''
                  }`}
                >
                  {principle.title}
                </h3>

                <p
                  className={`text-[#9fa8b5] text-sm sm:text-base leading-relaxed ${
                    isMyanmar ? 'font-myanmar leading-[1.8]' : ''
                  }`}
                >
                  {principle.desc}
                </p>
              </div>

              {/* Inquiry Highlight */}
              <div className="mt-6 pt-4 border-t border-white/6 flex items-start gap-2.5 text-xs sm:text-sm text-[#d4d8df]">
                <HelpCircle className="w-4 h-4 text-[#d9b35f] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#a8b0bc] font-medium mr-1.5">
                    {principlesSection.questionLabel}
                  </span>
                  <strong
                    className={`text-[#f2d78f] font-semibold ${
                      isMyanmar ? 'font-myanmar' : ''
                    }`}
                  >
                    “{principle.question}”
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
