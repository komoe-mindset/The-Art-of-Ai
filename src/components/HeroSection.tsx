import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { TranslationData } from '../translations';

interface HeroSectionProps {
  currentLang: Language;
  t: TranslationData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, t }) => {
  const isMyanmar = currentLang === 'my';

  return (
    <section className="w-[min(1180px,calc(100%-36px))] mx-auto min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] items-center gap-12 lg:gap-14 py-12 lg:py-20 relative">
      {/* Left Column: Heading and Manifesto Lead */}
      <div className="flex flex-col items-start z-10">
        <div className="eyebrow-accent">
          {t.hero.eyebrow}
        </div>

        <h1
          className={`my-4 sm:my-6 tracking-tight text-[#f5f2e9] font-black ${
            isMyanmar
              ? 'text-4xl sm:text-6xl lg:text-7xl font-myanmar leading-[1.25]'
              : 'text-5xl sm:text-7xl lg:text-8xl font-serif-display leading-[0.88]'
          }`}
        >
          {t.hero.titleStart}{' '}
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f2d78f] via-[#d9b35f] to-[#f2d78f]"
            style={{
              WebkitTextStroke: '1px rgba(242,215,143,0.85)',
              textShadow: '0 0 38px rgba(217,179,95,0.18)',
            }}
          >
            {t.hero.titleHighlight}
          </span>
        </h1>

        <div
          className={`text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#f2d78f] mb-4 ${
            isMyanmar ? 'font-myanmar leading-normal' : ''
          }`}
        >
          {t.hero.tagline}
        </div>

        <p
          className={`max-w-[650px] text-[#b8c0cb] text-base sm:text-lg ${
            isMyanmar ? 'font-myanmar leading-[1.9]' : 'leading-[1.75]'
          }`}
        >
          {t.hero.lead}
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
          <a
            href="#arena"
            className="inline-flex items-center gap-2 text-[#17130a] bg-gradient-to-r from-[#f2d78f] to-[#d9b35f] hover:from-[#fbe7b6] hover:to-[#e4c274] font-black px-6 py-3.5 rounded-full text-sm tracking-wide shadow-[0_14px_38px_rgba(217,179,95,0.22)] hover:shadow-[0_18px_48px_rgba(217,179,95,0.35)] transition-all hover:-translate-y-0.5"
            id="hero-cta-mission"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#teacher"
            className="inline-flex items-center gap-2 text-[#e8ecf2] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 font-bold px-6 py-3.5 rounded-full text-sm tracking-wide transition-all hover:-translate-y-0.5"
            id="hero-cta-teacher"
          >
            <BookOpen className="w-4 h-4 text-[#d9b35f]" />
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>
      </div>

      {/* Right Column: Tactical Strategy Compass Card */}
      <div
        className="relative min-h-[520px] sm:min-h-[560px] rounded-[36px] border border-[#d9b35f]/25 bg-gradient-to-b from-[#11151c]/95 to-[#080b0f]/98 shadow-[0_24px_70px_rgba(0,0,0,0.55)] p-6 sm:p-8 overflow-hidden flex flex-col justify-between"
        aria-label="Strategy map illustration"
        id="strategy-card"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(217,179,95,0.14),transparent_42%)] pointer-events-none" />

        {/* Rotating concentric orbital rings */}
        <div className="absolute inset-[15%] rounded-full border border-[#d9b35f]/20 animate-spin-slow pointer-events-none" />
        <div className="absolute inset-[27%] rounded-full border border-[#d9b35f]/15 border-dashed animate-spin-reverse-slow pointer-events-none" />

        {/* 4 Quadrant Strategic Labels */}
        <div className="relative z-10 w-full h-[360px] sm:h-[380px] flex items-center justify-center">
          <div
            className={`absolute left-2 sm:left-3 top-2 sm:top-3 text-[#d8cda8] text-[11px] sm:text-xs md:text-sm font-semibold opacity-90 px-2.5 py-1 rounded bg-[#090b0f]/80 border border-white/5 backdrop-blur-sm ${
              isMyanmar ? 'font-myanmar' : 'font-serif-display tracking-wider'
            }`}
          >
            {t.hero.compassLabels.one}
          </div>

          <div
            className={`absolute right-2 sm:right-3 top-6 sm:top-8 text-[#d8cda8] text-[11px] sm:text-xs md:text-sm font-semibold opacity-90 px-2.5 py-1 rounded bg-[#090b0f]/80 border border-white/5 backdrop-blur-sm ${
              isMyanmar ? 'font-myanmar' : 'font-serif-display tracking-wider'
            }`}
          >
            {t.hero.compassLabels.two}
          </div>

          <div
            className={`absolute left-2 sm:left-3 bottom-4 sm:bottom-6 text-[#d8cda8] text-[11px] sm:text-xs md:text-sm font-semibold opacity-90 px-2.5 py-1 rounded bg-[#090b0f]/80 border border-white/5 backdrop-blur-sm ${
              isMyanmar ? 'font-myanmar' : 'font-serif-display tracking-wider'
            }`}
          >
            {t.hero.compassLabels.three}
          </div>

          <div
            className={`absolute right-2 sm:right-3 bottom-8 sm:bottom-12 text-[#d8cda8] text-[11px] sm:text-xs md:text-sm font-semibold opacity-90 px-2.5 py-1 rounded bg-[#090b0f]/80 border border-white/5 backdrop-blur-sm ${
              isMyanmar ? 'font-myanmar' : 'font-serif-display tracking-wider'
            }`}
          >
            {t.hero.compassLabels.four}
          </div>

          {/* Compass Core */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-[#d9b35f]/30 flex items-center justify-center shadow-[inset_0_0_40px_rgba(217,179,95,0.08)]">
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-[#d9b35f]/20" />
            <div className="absolute h-full w-[1px] bg-[#d9b35f]/20" />

            {/* Inner Core Disc */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[#d9b35f]/40 bg-radial from-[#d9b35f]/20 to-[#0b0f15]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-2.5 sm:p-3 z-10 shadow-[0_0_30px_rgba(217,179,95,0.15)]">
              <Compass className="w-5 h-5 text-[#f2d78f] mb-1 animate-pulse shrink-0" />
              <strong
                className={`block text-[#f2d78f] font-bold tracking-tight leading-tight ${
                  isMyanmar ? 'font-myanmar text-[11px] sm:text-xs' : 'text-xs sm:text-sm'
                }`}
              >
                {t.hero.compassCenter.title}
              </strong>
              <small
                className={`text-[#a8b0bc] leading-snug whitespace-pre-line mt-1 ${
                  isMyanmar ? 'font-myanmar text-[10px] sm:text-[11px]' : 'text-[10px] sm:text-xs'
                }`}
              >
                {t.hero.compassCenter.subtitle}
              </small>
            </div>
          </div>
        </div>

        {/* Quote Ribbon at Bottom */}
        <div className="relative z-10 p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#090c11]/85 backdrop-blur-md text-xs sm:text-sm leading-relaxed text-[#dfe4ea] shadow-lg">
          <span className="font-extrabold text-[#f2d78f] mr-1.5">
            {t.hero.quoteRibbon.label}
          </span>
          <span className={isMyanmar ? 'font-myanmar' : ''}>
            {t.hero.quoteRibbon.text}
          </span>
        </div>
      </div>
    </section>
  );
};
