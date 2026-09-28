'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#0A100C] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#DFCA9E]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#DFCA9E] font-semibold">
              {t.process.eyebrow}
            </span>
            <span className="w-6 h-px bg-[#DFCA9E]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-sm sm:text-base text-[#8C9991] font-light max-w-xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.process.steps.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/35 transition-colors duration-200 rounded p-6 sm:p-7 flex flex-col"
            >
              {/* Step Number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl sm:text-5xl font-bold text-[#DFCA9E]/25 leading-none">
                  {item.step}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C9991] font-sans border border-[#1A2F25] px-2 py-1 rounded bg-[#080D0A]/50">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#8C9991] leading-relaxed font-light flex-1">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 w-0 h-px bg-[#DFCA9E] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
