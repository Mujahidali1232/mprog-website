'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A100C] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 break-words">
            {t.process.title}
          </h2>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#DFCA9E] font-semibold mb-4">
            {t.process.eyebrow}
          </p>
          {t.process.subtitle ? (
            <p className="text-sm sm:text-base text-[#8C9991] font-light max-w-xl mx-auto">
              {t.process.subtitle}
            </p>
          ) : null}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {t.process.steps.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/35 transition-colors duration-200 rounded p-5 sm:p-6 lg:p-7 flex flex-col"
            >
              {/* Step Number */}
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span className="text-3xl min-[360px]:text-4xl sm:text-5xl font-bold text-[#DFCA9E]/25 leading-none">
                  {item.step}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C9991] font-sans border border-[#1A2F25] px-2 py-1 rounded bg-[#080D0A]/50 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 sm:mb-3 leading-snug break-words">
                {item.title}
              </h3>
              <p className="text-sm text-[#8C9991] leading-relaxed font-light flex-1">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 sm:mt-6 w-0 h-px bg-[#DFCA9E] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
