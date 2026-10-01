'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Car, Hotel, Calendar, UserCheck, Shield } from 'lucide-react';

export const References: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="references" className="py-24 sm:py-32 bg-[#080D0A] border-b border-[#1A2F25] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#DFCA9E]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#DFCA9E] font-semibold">
              {t.references.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {t.references.title}
          </h2>
          <p className="text-base text-[#8C9991] font-light max-w-2xl">
            {t.references.subtitle}
          </p>
        </div>

        {/* 3 Reference Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* Automotive Partners */}
          <div className="flex flex-col bg-[#0E1914] border border-[#1A2F25] rounded overflow-hidden">
            <div className="p-6 sm:p-7 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded">
                  <Car className="w-5 h-5 text-[#DFCA9E]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.references.automotiveTitle}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {t.references.automotivePartners.map((partner, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-[#8C9991] pb-2.5 border-b border-[#1A2F25] last:border-b-0 last:pb-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] shrink-0" />
                    <span className="font-medium text-[#E0E5E2]">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-3 border-t border-[#1A2F25] text-[10px] uppercase tracking-[0.15em] text-[#8C9991] bg-[#0A100C]">
              {t.references.automotiveFooter}
            </div>
          </div>

          {/* Luxury Hospitality */}
          <div className="flex flex-col bg-[#0E1914] border border-[#1A2F25] rounded overflow-hidden">
            <div className="p-6 sm:p-7 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded">
                  <Hotel className="w-5 h-5 text-[#DFCA9E]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.references.hospitalityTitle}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {t.references.hospitalityPartners.map((hotel, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-sm pb-2.5 border-b border-[#1A2F25] last:border-b-0 last:pb-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] shrink-0" />
                    <span className="font-medium text-[#E0E5E2]">{hotel}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-3 border-t border-[#1A2F25] text-[10px] uppercase tracking-[0.15em] text-[#8C9991] bg-[#0A100C]">
              {t.references.hospitalityFooter}
            </div>
          </div>

          {/* Major Events */}
          <div className="flex flex-col bg-[#0E1914] border border-[#1A2F25] rounded overflow-hidden">
            <div className="p-6 sm:p-7 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded">
                  <Calendar className="w-5 h-5 text-[#DFCA9E]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t.references.eventsTitle}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {t.references.majorEvents.map((event, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-sm pb-2.5 border-b border-[#1A2F25] last:border-b-0 last:pb-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] shrink-0" />
                    <span className="font-medium text-[#E0E5E2]">{event}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-3 border-t border-[#1A2F25] text-[10px] uppercase tracking-[0.15em] text-[#8C9991] bg-[#0A100C]">
              {t.references.eventsFooter}
            </div>
          </div>

        </div>

        {/* VIP Guests Panel */}
        <div className="bg-[#0C1A14] border border-[#1A2F25] rounded p-8 sm:p-10">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#DFCA9E]" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t.references.vipTitle}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#8C9991] font-light leading-relaxed max-w-2xl">
              {t.references.vipIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {t.references.vipGuests.map((guest, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 bg-[#080D0A]/70 border border-[#1A2F25] rounded"
              >
                <UserCheck className="w-4 h-4 text-[#DFCA9E] shrink-0" />
                <span className="text-xs text-[#D0D7D2] font-medium leading-snug">
                  {guest}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#DFCA9E] font-light max-w-3xl border-t border-[#1A2F25] pt-5">
            {t.references.vipOutro}
          </p>
        </div>

      </div>
    </section>
  );
};
