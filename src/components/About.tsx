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
  const { t, language } = useLanguage();
  const { images } = useImages();

  const renderPhilosophyCard = (item: { title: string; description: string }, idx: number) => (
    <div key={idx} className="group pb-4 xl:pb-5 outline-none" tabIndex={0}>
      <div className="p-5 sm:p-6 bg-[#0E1914] group-hover:bg-[#101D17] border border-[#1A2F25] group-hover:border-[#DFCA9E]/40 group-focus-within:border-[#DFCA9E]/40 rounded transition-[border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-lg group-hover:shadow-black/40 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DFCA9E] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125" />
          <h4 className="text-base font-semibold text-white leading-snug break-words">
            {item.title}
          </h4>
        </div>
        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="overflow-hidden">
            <p className="pt-2.5 text-sm text-[#8C9991] leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#0A100C] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 break-words">
            {t.about.title}
          </h2>
          {t.about.subtitle ? (
            <p className="text-base sm:text-lg text-[#DFCA9E] font-medium tracking-wide">
              {t.about.subtitle}
            </p>
          ) : null}
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-24 lg:mb-28">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-5 text-[#B8C2BC] text-sm sm:text-base leading-relaxed font-light">
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Highlight Quote */}
            <div className="mt-8 border-l-2 border-[#DFCA9E] pl-4 sm:pl-6 py-2">
              <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-snug">
                &ldquo;{t.about.highlight}&rdquo;
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="relative rounded overflow-hidden group border border-[#1A2F25]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images.about || "/assets/images/Modaration.JPG"}
                  alt={language === 'de' ? 'Mobile Product Genius Keynote-Bühnenerlebnis' : 'Mobile Product Genius Keynote Stage Experience'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/90 via-[#080D0A]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Principles */}
        <div className="mb-16 sm:mb-24 lg:mb-28">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-bold text-white mb-2 break-words">
              {t.about.philosophyTitle}
            </h3>
            <p className="text-sm text-[#8C9991] font-light">
              {t.about.philosophySubtitle}
            </p>
          </div>

          {/* Mobile (<640px): single column */}
          <div className="flex flex-col sm:hidden">
            {t.about.philosophy.map((item, idx) => renderPhilosophyCard(item, idx))}
          </div>

          {/* Tablet (640px–1023px): 2 independent columns */}
          <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-x-4 items-start">
            {[0, 1].map((colIdx) => (
              <div key={colIdx} className="flex flex-col">
                {t.about.philosophy
                  .map((item, idx) => ({ item, idx }))
                  .filter(({ idx }) => idx % 2 === colIdx)
                  .map(({ item, idx }) => renderPhilosophyCard(item, idx))}
              </div>
            ))}
          </div>

          {/* Desktop (1024px+): 3 independent columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-x-4 xl:gap-x-5 items-start">
            {[0, 1, 2].map((colIdx) => (
              <div key={colIdx} className="flex flex-col">
                {t.about.philosophy
                  .map((item, idx) => ({ item, idx }))
                  .filter(({ idx }) => idx % 3 === colIdx)
                  .map(({ item, idx }) => renderPhilosophyCard(item, idx))}
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="bg-[#0E1914] border border-[#1A2F25] rounded p-5 sm:p-8 lg:p-10">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-bold text-white break-words">
              {t.about.strengthsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
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
