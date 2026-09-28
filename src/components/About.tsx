'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useImages } from '@/context/ImageContext';
import { CheckCircle2 } from 'lucide-react';

const philosophyColors = [
  'before:bg-[#DFCA9E]',
];

export const About: React.FC = () => {
  const { t } = useLanguage();
  const { images } = useImages();

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A100C] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#DFCA9E]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#DFCA9E] font-semibold">
              {t.about.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-5 text-[#B8C2BC] text-base leading-relaxed font-light">
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Highlight Quote */}
            <div className="mt-8 border-l-2 border-[#DFCA9E] pl-6 py-2">
              <p className="text-lg sm:text-xl text-white font-medium leading-snug">
                &ldquo;{t.about.highlight}&rdquo;
              </p>
              <span className="block mt-3 text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold">
                Mobile Product Genius UG · Munich · Global
              </span>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded overflow-hidden group border border-[#1A2F25]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images.about || "/assets/images/event-keynote-stage.jpg"}
                  alt="Mobile Product Genius Keynote Stage Experience"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/90 via-[#080D0A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold block mb-1">
                    {t.about.imageCaption}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {t.about.imageSubCaption}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Principles */}
        <div className="mb-20 sm:mb-28">
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t.about.philosophyTitle}
            </h3>
            <p className="text-sm text-[#8C9991] font-light">
              {t.about.philosophySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
            {t.about.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/35 transition-colors duration-200 rounded"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] shrink-0" />
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-[#8C9991] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="bg-[#0E1914] border border-[#1A2F25] rounded p-8 sm:p-10">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t.about.strengthsTitle}
            </h3>
            <div className="w-8 h-px bg-[#DFCA9E]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.about.strengths.map((str, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 py-3.5 px-4 bg-[#0A100C] border border-[#1A2F25] rounded"
              >
                <CheckCircle2 className="w-4 h-4 text-[#DFCA9E] shrink-0 mt-0.5" />
                <span className="text-sm text-[#D0D7D2] font-medium leading-snug">
                  {str}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
