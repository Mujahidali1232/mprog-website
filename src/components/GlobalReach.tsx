'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export const GlobalReach: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#080D0A] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4 break-words">
              {t.globalReach.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#DFCA9E] mb-5 sm:mb-6 font-normal">
              {t.globalReach.subtitle}
            </p>
            <p className="text-sm sm:text-base text-[#B8C2BC] font-light leading-relaxed mb-4 sm:mb-5">
              {t.globalReach.description}
            </p>
            <p className="text-sm text-[#8C9991] font-light leading-relaxed mb-0">
              {t.globalReach.subDescription}
            </p>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-6">
            <div className="relative h-[260px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded group border border-[#1A2F25]">
              <Image
                src="/assets/images/Modaration.JPG"
                alt={language === 'de' ? 'Mobile Product Genius – Internationale Bühnenmoderation' : 'Mobile Product Genius – International Stage Moderation'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/80 via-[#080D0A]/15 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
