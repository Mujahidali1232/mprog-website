'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useImages } from '@/context/ImageContext';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const { images } = useImages();

  return (
    <section className="relative min-h-screen min-h-[100svh] flex flex-col justify-end pb-0 bg-[#080D0A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero || "/assets/images/Product presentation 1.jpg"}
          alt={language === 'de' ? 'Mobile Product Genius – Keynote-Bühne mit BMW 7er' : 'Mobile Product Genius – Keynote Stage with BMW 7 Series'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_20%] md:object-center"
        />
        {/* Dark overlay - gradient from bottom and side with subtle green undertone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A] via-[#080D0A]/80 to-[#080D0A]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D0A]/90 via-[#080D0A]/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 lg:pt-32 pb-0">
        <div className="max-w-3xl pb-10 sm:pb-14 lg:pb-24">
          {/* Headline */}
          <h1 className="text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4 sm:mb-5">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base min-[360px]:text-lg sm:text-xl md:text-2xl text-[#DFCA9E] font-normal tracking-wide mb-4 sm:mb-6">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#D0D7D2] leading-relaxed font-light mb-6 sm:mb-10 max-w-2xl">
            {t.hero.description}
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1A2F25]">
          {t.hero.stats.map((stat, idx) => {
            const isLast = idx === t.hero.stats.length - 1;
            return (
              <div
                key={idx}
                className={`py-5 sm:py-6 lg:py-8 px-0 ${!isLast ? 'md:border-r border-[#1A2F25]' : 'pr-12 md:pr-12 xl:pr-10'} flex items-center gap-3.5 sm:gap-4 lg:gap-5 md:px-4 lg:px-8 xl:px-10 ${idx > 0 ? 'border-t md:border-t-0 border-[#1A2F25]' : 'md:pl-0 lg:pl-0 xl:pl-0'}`}
              >
                <div className="shrink-0">
                  <div className="text-2xl min-[360px]:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs uppercase tracking-[0.12em] lg:tracking-[0.15em] text-[#DFCA9E] font-semibold mb-0.5 leading-snug break-words">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-xs text-[#8C9991] font-light leading-snug">{stat.sublabel}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-3.5 right-3 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-8 z-20 w-9 h-9 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-[#8C9991] hover:text-[#DFCA9E] transition-colors duration-200"
        aria-label={language === 'de' ? 'Nach unten scrollen' : 'Scroll down'}
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
