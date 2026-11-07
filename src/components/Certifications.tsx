'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { BadgeCheck, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-16 sm:py-24 lg:py-28 bg-[#0A100C] border-b border-[#1A2F25] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2 break-words">
            {t.certifications.title}
          </h2>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#DFCA9E] font-semibold mb-3">
            {t.certifications.eyebrow}
          </p>
          <p className="text-sm sm:text-base text-[#8C9991] font-light">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {t.certifications.items.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/35 transition-colors duration-200 rounded"
            >
              <div className="p-2 bg-[#0A100C] border border-[#1A2F25] rounded shrink-0">
                {idx === t.certifications.items.length - 1 ? (
                  <ShieldCheck className="w-5 h-5 text-[#DFCA9E]" />
                ) : (
                  <BadgeCheck className="w-5 h-5 text-[#DFCA9E]" />
                )}
              </div>
              <div className="pt-0.5 min-w-0">
                <span className="text-sm font-semibold text-[#E0E5E2] block leading-snug mb-1 break-words">
                  {item}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.15em] text-[#8C9991] font-medium block">
                  {t.certifications.qualificationLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
