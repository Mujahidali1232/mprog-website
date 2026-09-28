'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useImages } from '@/context/ImageContext';
import { ChevronRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { images } = useImages();

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-0 bg-[#080D0A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero || "/assets/images/hero-saidi-bmw7.jpg"}
          alt="Mobile Product Genius – Keynote Stage with BMW 7 Series"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-0">
        <div className="max-w-3xl pb-16 lg:pb-24">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-5 h-px bg-[#DFCA9E]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#DFCA9E] font-semibold">
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-5">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#DFCA9E] font-normal tracking-wide mb-6">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#D0D7D2] leading-relaxed font-light mb-10 max-w-2xl">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#DFCA9E] hover:bg-[#EFE1C6] text-[#080D0A] font-semibold text-xs uppercase tracking-[0.12em] transition-all duration-200 rounded-sm shadow-sm"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#1A2F25] hover:border-[#DFCA9E]/50 bg-[#0E1914]/50 hover:bg-[#0E1914] text-white hover:text-[#DFCA9E] font-medium text-xs uppercase tracking-[0.12em] transition-all duration-200 rounded-sm"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1A2F25]">
          {t.hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-6 lg:py-8 px-0 ${idx < t.hero.stats.length - 1 ? 'md:border-r border-[#1A2F25]' : ''} flex items-center gap-5 md:px-8 lg:px-10 ${idx > 0 ? 'border-t md:border-t-0 border-[#1A2F25]' : ''}`}
            >
              <div className="shrink-0">
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-[#DFCA9E] font-semibold mb-0.5">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-xs text-[#8C9991] font-light">{stat.sublabel}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8C9991] hover:text-[#DFCA9E] transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
