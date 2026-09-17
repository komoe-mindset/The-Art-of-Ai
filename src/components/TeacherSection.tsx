import React, { useState } from 'react';
import { HelpCircle, Layers, Check, ArrowRight, Lightbulb } from 'lucide-react';
import { Language } from '../types';
import { TranslationData } from '../translations';

interface TeacherSectionProps {
  currentLang: Language;
  t: TranslationData;
}

export const TeacherSection: React.FC<TeacherSectionProps> = ({ currentLang, t }) => {
  const isMyanmar = currentLang === 'my';
  const { teacherSection } = t;
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="teacher" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="w-[min(1180px,calc(100%-36px))] mx-auto">
        {/* Section Head */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-end mb-12 sm:mb-16">
          <div>
            <div className="eyebrow-accent">
              {teacherSection.eyebrow}
            </div>
            <h2
              className={`mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f2e9] ${
                isMyanmar ? 'font-myanmar leading-[1.3]' : 'font-serif-display leading-[0.98]'
              }`}
            >
              {teacherSection.title}
            </h2>
          </div>
          <div className="lg:justify-self-end max-w-[650px]">
            <p className="text-base sm:text-lg font-bold text-[#f2d78f] mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#d9b35f]" />
              <span>{teacherSection.teachTag}</span>
            </p>
            <p
              className={`text-[#aeb6c2] text-sm sm:text-base leading-[1.75] ${
                isMyanmar ? 'font-myanmar leading-[1.85]' : ''
              }`}
            >
              {teacherSection.desc}
            </p>
          </div>
        </div>

        {/* 2 Big Panels: Teacher Challenge & Question Ladder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Panel 1: Teacher Challenge */}
          <div
            className="relative min-h-[460px] rounded-[30px] p-7 sm:p-9 border border-[#d9b35f]/30 bg-gradient-to-b from-[#11161d]/95 to-[#090c10]/98 overflow-hidden shadow-2xl flex flex-col justify-between"
            id="teacher-challenge-panel"
          >
            {/* Glowing gold ambient orb */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(217,179,95,0.18),transparent_68%)] pointer-events-none filter blur-sm" />

            <div>
              <div className="eyebrow-accent text-xs">
                {teacherSection.challenge.eyebrow}
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-bold text-[#f5f2e9] mt-3.5 mb-3 ${
                  isMyanmar ? 'font-myanmar leading-snug' : 'font-serif-display'
                }`}
              >
                {teacherSection.challenge.title}
              </h3>

              <div
                className={`p-4 rounded-xl border border-white/8 bg-white/[0.03] text-sm sm:text-base text-[#dfe4ea] leading-relaxed mb-6 ${
                  isMyanmar ? 'font-myanmar leading-[1.85]' : ''
                }`}
              >
                <span>{teacherSection.challenge.statementPrefix}</span>
                <strong className="text-white font-bold bg-[#d9b35f]/15 px-1.5 py-0.5 rounded">
                  {teacherSection.challenge.statementClaim}
                </strong>
                <span> {teacherSection.challenge.statementSuffix}</span>
              </div>

              {/* Inquiry Progression List */}
              <ul className="space-y-3">
                {teacherSection.challenge.points.map((pt, i) => (
                  <li
                    key={i}
                    className={`rounded-xl p-3.5 border text-sm leading-relaxed transition-all ${
                      i === 0
                        ? 'border-red-500/20 bg-red-950/20 text-[#ef8e83]'
                        : 'border-white/8 bg-white/[0.025] text-[#d7dce3] hover:border-[#d9b35f]/30 hover:bg-[#d9b35f]/5'
                    }`}
                  >
                    <b
                      className={`block sm:inline font-bold mr-2 ${
                        i === 0 ? 'text-[#ef8e83]' : 'text-[#f2d78f]'
                      }`}
                    >
                      {pt.prefix}
                    </b>
                    <span className={isMyanmar ? 'font-myanmar font-medium' : ''}>
                      {pt.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/6 text-xs text-[#a8b0bc]">
              {isMyanmar
                ? '💡 အကြံပြုချက် - တိုက်ရိုက်အဖြေပေးခြင်းထက် ကျောင်းသားကိုယ်တိုင် စဉ်းစားနိုင်စေမည့် မေးခွန်းများကို ဦးစားပေးမေးပါ'
                : '💡 Pedagogical Core: Prompt critical reasoning rather than providing authoritative conclusions'}
            </div>
          </div>

          {/* Panel 2: Question Ladder */}
          <div
            className="relative min-h-[460px] rounded-[30px] p-7 sm:p-9 border border-white/10 bg-gradient-to-b from-[#11161d]/90 to-[#090c10]/95 overflow-hidden shadow-2xl flex flex-col justify-between"
            id="question-ladder-panel"
          >
            <div>
              <div className="eyebrow-accent text-xs">
                {teacherSection.ladder.eyebrow}
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-bold text-[#f5f2e9] mt-3.5 mb-6 ${
                  isMyanmar ? 'font-myanmar leading-snug' : 'font-serif-display'
                }`}
              >
                {teacherSection.ladder.title}
              </h3>

              {/* Ladder Rows */}
              <div className="space-y-2.5">
                {teacherSection.ladder.steps.map((step) => {
                  const isSelected = activeStep === step.level;
                  return (
                    <div
                      key={step.level}
                      onClick={() => setActiveStep(isSelected ? null : step.level)}
                      className={`grid grid-cols-[38px_110px_1fr] sm:grid-cols-[44px_130px_1fr] items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-[#d9b35f] bg-[#d9b35f]/15 shadow-[0_0_20px_rgba(217,179,95,0.15)] -translate-x-1'
                          : 'border-white/6 bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full border border-[#d9b35f]/40 flex items-center justify-center text-[#f2d78f] font-mono font-bold text-xs bg-[#d9b35f]/10">
                        {step.level}
                      </div>

                      <strong
                        className={`text-xs sm:text-sm text-[#f5f2e9] font-bold tracking-wide ${
                          isMyanmar ? 'font-myanmar' : ''
                        }`}
                      >
                        {step.title}
                      </strong>

                      <div className="flex flex-col">
                        <span
                          className={`text-xs sm:text-sm font-semibold text-[#f2d78f] ${
                            isMyanmar ? 'font-myanmar leading-relaxed' : ''
                          }`}
                        >
                          “{step.question}”
                        </span>
                        {isSelected && (
                          <span
                            className={`text-[11px] text-[#a8b0bc] mt-1 ${
                              isMyanmar ? 'font-myanmar leading-relaxed' : ''
                            }`}
                          >
                            {step.detail}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/6 text-xs text-[#a8b0bc] flex items-center justify-between">
              <span>
                {isMyanmar ? 'အဆင့်တစ်ခုချင်းစီကို နှိပ်၍ အသေးစိတ်ရည်ရွယ်ချက်ကို ကြည့်ရှုနိုင်သည်' : 'Click any tier to inspect targeted cognitive objective'}
              </span>
              <span className="text-[#d9b35f] font-bold">1 → 7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
