'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Compass, Globe2, MapPin } from 'lucide-react';

export const GlobalReach: React.FC = () => {
  const { t } = useLanguage();

  const regionIcons = [
    <Globe2 key="globe" className="w-5 h-5 text-[#DFCA9E]" />,
    <Compass key="compass" className="w-5 h-5 text-[#DFCA9E]" />,
    <MapPin key="pin" className="w-5 h-5 text-[#DFCA9E]" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#080D0A] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Text */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              {t.globalReach.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#DFCA9E] mb-6 font-normal">
              {t.globalReach.subtitle}
            </p>
            <p className="text-base text-[#B8C2BC] font-light leading-relaxed mb-5">
              {t.globalReach.description}
            </p>
            <p className="text-sm text-[#8C9991] font-light leading-relaxed mb-8">
              {t.globalReach.subDescription}
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0E1914] border border-[#1A2F25] rounded text-xs text-[#B8C2BC] font-medium">
              <Compass className="w-4 h-4 text-[#DFCA9E] shrink-0" />
              <span>{t.globalReach.headquartersLabel}</span>
            </div>
          </div>

          {/* Right: Region Cards */}
          <div className="lg:col-span-6 space-y-4">
            {t.globalReach.regions.map((region, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 p-5 bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/35 transition-colors duration-200 rounded"
              >
                <div className="p-2.5 bg-[#0A100C] border border-[#1A2F25] rounded shrink-0">
                  {regionIcons[idx]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {region.name}
                  </h3>
                  <p className="text-sm text-[#8C9991] font-light leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
