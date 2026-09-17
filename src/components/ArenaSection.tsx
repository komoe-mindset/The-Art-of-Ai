import React, { useState } from 'react';
import { Bot, User, RefreshCw, CheckCircle2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { Language, SocraticCategory } from '../types';
import { TranslationData } from '../translations';

interface ArenaSectionProps {
  currentLang: Language;
  t: TranslationData;
}

const categoryTagNames: Record<Language, Record<SocraticCategory, string>> = {
  en: {
    clarify: 'CLARIFY',
    evidence: 'EVIDENCE',
    assumption: 'ASSUMPTION',
    counter: 'COUNTER',
  },
  my: {
    clarify: 'ရှင်းလင်းစေခြင်း',
    evidence: 'သက်သေစိစစ်ခြင်း',
    assumption: 'ကြိုတင်ယူဆချက်',
    counter: 'ဆန့်ကျင်ဘက် အကြောင်းပြချက်',
  },
};

export const ArenaSection: React.FC<ArenaSectionProps> = ({ currentLang, t }) => {
  const isMyanmar = currentLang === 'my';
  const { arenaSection } = t;

  // Track the current step index for each category
  const [activeCategory, setActiveCategory] = useState<SocraticCategory>('clarify');
  const [steps, setSteps] = useState<Record<SocraticCategory, number>>({
    clarify: 0,
    evidence: 0,
    assumption: 0,
    counter: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectCategory = (cat: SocraticCategory) => {
    setIsTransitioning(true);
    // Cycle to next response in this category
    const nextStep = (steps[cat] + 1) % arenaSection.responses[cat].length;
    setSteps((prev) => ({
      ...prev,
      [cat]: nextStep,
    }));
    setActiveCategory(cat);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 180);
  };

  const currentResponse = arenaSection.responses[activeCategory][steps[activeCategory]];
  const currentStepNumber = steps[activeCategory] + 1;
  const totalSteps = arenaSection.responses[activeCategory].length;

  return (
    <section id="arena" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="w-[min(1180px,calc(100%-36px))] mx-auto">
        {/* Section Head */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-end mb-12 sm:mb-16">
          <div>
            <div className="eyebrow-accent">
              {arenaSection.eyebrow}
            </div>
            <h2
              className={`mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f2e9] whitespace-pre-line ${
                isMyanmar ? 'font-myanmar leading-[1.3]' : 'font-serif-display leading-[0.98]'
              }`}
            >
              {arenaSection.title}
            </h2>
          </div>
          <p
            className={`text-[#aeb6c2] text-base sm:text-lg leading-[1.75] max-w-[650px] lg:justify-self-end ${
              isMyanmar ? 'font-myanmar leading-[1.9]' : ''
            }`}
          >
            {arenaSection.desc}
          </p>
        </div>

        {/* The Arena Card */}
        <div className="rounded-[32px] border border-[#d9b35f]/25 overflow-hidden bg-gradient-to-br from-[#d9b35f]/[0.06] via-[#0a0d12]/95 to-[#0d1117] shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
          {/* Top Bar */}
          <div className="px-6 py-4.5 border-b border-white/8 flex items-center justify-between flex-wrap gap-4 bg-[#080b0f]/60">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8fd3a8] animate-pulse" />
              <span className="font-extrabold text-[#f5f2e9] text-sm sm:text-base tracking-wide">
                {arenaSection.missionNumber}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#b8c1cb] border border-white/10 rounded-full px-3 py-1 text-xs font-semibold bg-white/5">
                {arenaSection.badge}
              </span>
            </div>
          </div>

          {/* Arena Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left: Mission Brief */}
            <div className="p-6 sm:p-9 border-b lg:border-b-0 lg:border-r border-white/8 flex flex-col justify-between">
              <div>
                <span className="eyebrow-accent text-[11px]">
                  {arenaSection.briefEyebrow}
                </span>

                <h3
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold text-[#f5f2e9] mt-3 mb-4 ${
                    isMyanmar ? 'font-myanmar leading-snug' : 'font-serif-display'
                  }`}
                >
                  {arenaSection.claimTitle}
                </h3>

                <p
                  className={`text-[#aab3bf] text-sm sm:text-base leading-relaxed ${
                    isMyanmar ? 'font-myanmar leading-[1.85]' : ''
                  }`}
                >
                  {arenaSection.claimDesc}
                </p>

                {/* Initial scenario */}
                <div className="mt-7 p-4 sm:p-5 border-l-4 border-[#d9b35f] bg-[#d9b35f]/[0.07] rounded-r-2xl text-sm leading-relaxed text-[#dfe4ea]">
                  <strong className="block text-[#f2d78f] font-semibold mb-1">
                    {arenaSection.scenarioLabel}
                  </strong>
                  <span className={`italic text-[#f5f2e9] ${isMyanmar ? 'font-myanmar not-italic' : ''}`}>
                    {arenaSection.scenarioText}
                  </span>
                </div>
              </div>

              {/* Guidance tip */}
              <div className="mt-8 pt-5 border-t border-white/6 flex items-center justify-between text-xs text-[#a8b0bc]">
                <span>
                  {isMyanmar ? 'အောက်ပါ မေးခွန်းခလုတ်များကို နှိပ်၍ AI ၏ မေးခွန်းထုတ်ချက်များကို လေ့လာပါ' : 'Click the inquiry buttons to cycle AI Socratic counter-questions'}
                </span>
                <span className="text-[#d9b35f] font-mono font-bold">
                  {currentStepNumber}/{totalSteps}
                </span>
              </div>
            </div>

            {/* Right: Socratic Chat Arena */}
            <div className="p-6 sm:p-8 flex flex-col justify-between min-h-[440px] bg-[#07090d]/50">
              {/* Dialogue stream */}
              <div className="flex flex-col gap-4">
                {/* Student message */}
                <div className="self-end max-w-[88%] sm:max-w-[82%] p-4 rounded-2xl rounded-tr-xs bg-gradient-to-r from-[#f2d78f] to-[#d9b35f] text-[#16130c] shadow-[0_6px_20px_rgba(217,179,95,0.2)]">
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider mb-1 opacity-80">
                    <User className="w-3 h-3" />
                    <span>{isMyanmar ? 'ကျောင်းသား၏ ရပ်တည်ချက်' : 'Student'}</span>
                  </div>
                  <p
                    className={`font-bold text-sm sm:text-base leading-snug ${
                      isMyanmar ? 'font-myanmar leading-normal' : ''
                    }`}
                  >
                    {arenaSection.studentClaim}
                  </p>
                </div>

                {/* Socratic AI message */}
                <div className="self-start max-w-[88%] sm:max-w-[85%] p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-[#151a24]/90 border border-[#d9b35f]/25 text-[#f5f2e9] shadow-xl">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-[#f2d78f] mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-[#f2d78f]" />
                      <span>{isMyanmar ? 'ဆိုကရေးတီး AI' : 'Socratic AI Advisor'}</span>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#d9b35f]/15 border border-[#d9b35f]/20 font-mono">
                      {categoryTagNames[currentLang][activeCategory]} · {isMyanmar ? `အဆင့် ${currentStepNumber}` : `#${currentStepNumber}`}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base leading-relaxed transition-all duration-200 ${
                      isTransitioning
                        ? 'opacity-0 translate-y-1.5'
                        : 'opacity-100 translate-y-0'
                    } ${isMyanmar ? 'font-myanmar text-[15px] leading-[1.85]' : 'font-medium'}`}
                    id="aiBubble"
                  >
                    {currentResponse}
                  </p>
                </div>
              </div>

              {/* Action Buttons: 4 Socratic Categories */}
              <div className="mt-8 pt-4 border-t border-white/8">
                <div className="text-[11px] font-bold text-[#a8b0bc] tracking-wider uppercase mb-2.5 flex items-center justify-between">
                  <span>{isMyanmar ? 'မေးခွန်းထုတ်မှု စိန်ခေါ်ခလုတ်များ (နှိပ်၍ ဆက်လက်မေးမြန်းပါ)' : 'Deepen the inquiry (click to cycle questions)'}</span>
                  <span className="text-[#d9b35f] text-[10px] hidden sm:inline">
                    {isMyanmar ? '၃ ဆင့်စီ စူးစမ်းနိုင်သည်' : '3 levels per category'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleSelectCategory('clarify')}
                    className={`text-left p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 border flex items-center justify-between group ${
                      activeCategory === 'clarify'
                        ? 'border-[#d9b35f] bg-[#d9b35f]/15 text-[#f2d78f] shadow-[0_0_15px_rgba(217,179,95,0.15)]'
                        : 'border-white/8 bg-white/[0.03] text-[#dfe4ea] hover:border-[#d9b35f]/30 hover:bg-[#d9b35f]/5'
                    }`}
                    id="btn-arena-clarify"
                  >
                    <span className={isMyanmar ? 'font-myanmar font-semibold' : 'font-medium'}>
                      {arenaSection.buttonLabels.clarify}
                    </span>
                    <RefreshCw
                      className={`w-3.5 h-3.5 text-[#d9b35f] opacity-60 group-hover:opacity-100 transition-transform ${
                        activeCategory === 'clarify' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory('evidence')}
                    className={`text-left p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 border flex items-center justify-between group ${
                      activeCategory === 'evidence'
                        ? 'border-[#d9b35f] bg-[#d9b35f]/15 text-[#f2d78f] shadow-[0_0_15px_rgba(217,179,95,0.15)]'
                        : 'border-white/8 bg-white/[0.03] text-[#dfe4ea] hover:border-[#d9b35f]/30 hover:bg-[#d9b35f]/5'
                    }`}
                    id="btn-arena-evidence"
                  >
                    <span className={isMyanmar ? 'font-myanmar font-semibold' : 'font-medium'}>
                      {arenaSection.buttonLabels.evidence}
                    </span>
                    <RefreshCw
                      className={`w-3.5 h-3.5 text-[#d9b35f] opacity-60 group-hover:opacity-100 transition-transform ${
                        activeCategory === 'evidence' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory('assumption')}
                    className={`text-left p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 border flex items-center justify-between group ${
                      activeCategory === 'assumption'
                        ? 'border-[#d9b35f] bg-[#d9b35f]/15 text-[#f2d78f] shadow-[0_0_15px_rgba(217,179,95,0.15)]'
                        : 'border-white/8 bg-white/[0.03] text-[#dfe4ea] hover:border-[#d9b35f]/30 hover:bg-[#d9b35f]/5'
                    }`}
                    id="btn-arena-assumption"
                  >
                    <span className={isMyanmar ? 'font-myanmar font-semibold' : 'font-medium'}>
                      {arenaSection.buttonLabels.assumption}
                    </span>
                    <RefreshCw
                      className={`w-3.5 h-3.5 text-[#d9b35f] opacity-60 group-hover:opacity-100 transition-transform ${
                        activeCategory === 'assumption' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory('counter')}
                    className={`text-left p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 border flex items-center justify-between group ${
                      activeCategory === 'counter'
                        ? 'border-[#d9b35f] bg-[#d9b35f]/15 text-[#f2d78f] shadow-[0_0_15px_rgba(217,179,95,0.15)]'
                        : 'border-white/8 bg-white/[0.03] text-[#dfe4ea] hover:border-[#d9b35f]/30 hover:bg-[#d9b35f]/5'
                    }`}
                    id="btn-arena-counter"
                  >
                    <span className={isMyanmar ? 'font-myanmar font-semibold' : 'font-medium'}>
                      {arenaSection.buttonLabels.counter}
                    </span>
                    <RefreshCw
                      className={`w-3.5 h-3.5 text-[#d9b35f] opacity-60 group-hover:opacity-100 transition-transform ${
                        activeCategory === 'counter' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Strategic Thinking Path */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-8">
          {arenaSection.pathSteps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-5 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-[#d9b35f]/30 hover:bg-[#d9b35f]/5 transition-all flex flex-col justify-between"
              id={`path-step-${step.num}`}
            >
              <div>
                <span className="block text-[#d9b35f] font-black text-xs tracking-wider uppercase">
                  {step.num} · {step.tag}
                </span>
                <h4
                  className={`mt-2.5 mb-1.5 text-sm sm:text-base font-bold text-[#f5f2e9] ${
                    isMyanmar ? 'font-myanmar leading-snug' : ''
                  }`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-[#8f99a6] text-xs sm:text-sm leading-relaxed ${
                    isMyanmar ? 'font-myanmar leading-relaxed' : ''
                  }`}
                >
                  {step.desc}
                </p>
              </div>

              {/* Arrow connector between steps on large screens */}
              {idx < arenaSection.pathSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#080a0e] border border-white/10 text-[#d9b35f] flex items-center justify-center text-xs font-bold shadow-md">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
