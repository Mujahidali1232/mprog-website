'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Car, Hotel, Calendar, UserCheck, Shield } from 'lucide-react';

export const References: React.FC = () => {
  const { t } = useLanguage();

  const referenceCards = [
    {
      key: 'auto',
      Icon: Car,
      title: t.references.automotiveTitle,
      items: t.references.automotivePartners,
      footer: t.references.automotiveFooter,
    },
    {
      key: 'hosp',
      Icon: Hotel,
      title: t.references.hospitalityTitle,
      items: t.references.hospitalityPartners,
      footer: t.references.hospitalityFooter,
    },
    {
      key: 'events',
      Icon: Calendar,
      title: t.references.eventsTitle,
      items: t.references.majorEvents,
      footer: t.references.eventsFooter,
    },
  ];

  return (
    <section id="references" className="py-16 sm:py-24 lg:py-32 bg-[#080D0A] border-b border-[#1A2F25] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 break-words">
            {t.references.title}
          </h2>
          <div className="mb-3 sm:mb-4">
            <span className="text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#DFCA9E] font-semibold">
              {t.references.eyebrow}
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#8C9991] font-light max-w-2xl">
            {t.references.subtitle}
          </p>
        </div>

        {/* 3 Reference Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-8 items-start">
          {referenceCards.map(({ key, Icon, title, items, footer }) => (
            <div
              key={key}
              tabIndex={0}
              className="group flex flex-col bg-[#0E1914] hover:bg-[#101D17] border border-[#1A2F25] hover:border-[#DFCA9E]/40 focus-within:border-[#DFCA9E]/40 transition-[border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded overflow-hidden hover:shadow-lg hover:shadow-black/40 cursor-pointer outline-none"
            >
              <div className="p-5 sm:p-6 lg:p-7 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] group-hover:border-[#DFCA9E]/30 transition-colors duration-300 rounded shrink-0">
                    <Icon className="w-5 h-5 text-[#DFCA9E]" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-snug break-words min-w-0">
                    {title}
                  </h3>
                </div>
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="overflow-hidden">
                    <ul className="pt-5 space-y-2.5">
                      {items.map((entry, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-[#8C9991] pb-2.5 border-b border-[#1A2F25] last:border-b-0 last:pb-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] shrink-0" />
                          <span className="font-medium text-[#E0E5E2] break-words min-w-0">{entry}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-6 py-3 border-t border-[#1A2F25] text-[10px] uppercase tracking-[0.14em] text-[#8C9991] bg-[#0A100C]">
                {footer}
              </div>
            </div>
          ))}
        </div>

        {/* VIP Guests Panel */}
        <div className="bg-[#0C1A14] border border-[#1A2F25] rounded p-5 sm:p-8 lg:p-10">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#DFCA9E] shrink-0" />
              <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-bold text-white break-words">
                {t.references.vipTitle}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#8C9991] font-light leading-relaxed max-w-2xl">
              {t.references.vipIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 sm:mb-8">
            {t.references.vipGuests.map((guest, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 bg-[#080D0A]/70 border border-[#1A2F25] rounded"
              >
                <UserCheck className="w-4 h-4 text-[#DFCA9E] shrink-0" />
                <span className="text-xs text-[#D0D7D2] font-medium leading-snug break-words min-w-0">
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
