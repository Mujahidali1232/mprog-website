'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useImages } from '@/context/ImageContext';
import { Check, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const { images } = useImages();

  const getPillarImage = (index: number, defaultImage: string) => {
    if (index === 0) return images.pillar1 || defaultImage;
    if (index === 1) return images.pillar2 || defaultImage;
    if (index === 2) return images.pillar3 || defaultImage;
    return defaultImage;
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#080D0A] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            {t.servicesIntro.title}
          </h2>
          <p className="text-base sm:text-lg text-[#DFCA9E] font-medium tracking-wide mb-5">
            {t.servicesIntro.eyebrow}
          </p>
          <p className="text-base sm:text-lg text-[#8C9991] font-light leading-relaxed max-w-2xl">
            {t.servicesIntro.subtitle}
          </p>
        </div>

        {/* 3 Service Pillars */}
        <div className="space-y-24 sm:space-y-32">
          {t.services.map((service, index) => {
            const isReversed = index % 2 === 1;
            const currentPillarImg = getPillarImage(index, service.image);

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-full min-h-[360px] lg:min-h-[500px] overflow-hidden rounded group border border-[#1A2F25]">
                      <Image
                        src={currentPillarImg}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/85 via-[#080D0A]/20 to-transparent" />



                      {/* Bottom Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#DFCA9E] font-semibold mb-1">
                          Mobile Product Genius
                        </div>
                        <h4 className="text-xl font-bold text-white leading-tight">
                          {service.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>


                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                        {service.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-base sm:text-lg text-[#DFCA9E] mb-5 font-normal">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-[15px] text-[#B8C2BC] leading-relaxed font-light mb-8">
                        {service.intro}
                      </p>

                      {/* Sub-categories */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {service.categories.map((cat, catIdx) => (
                          <div
                            key={catIdx}
                            className="p-5 bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/30 transition-colors duration-200 rounded"
                          >
                            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#DFCA9E] rounded-full shrink-0" />
                              {cat.title}
                            </h4>
                            <ul className="space-y-2">
                              {cat.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="text-xs text-[#8C9991] flex items-start gap-2"
                                >
                                  <Check className="w-3 h-3 text-[#DFCA9E]/80 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome & CTA */}
                    <div className="pt-5 border-t border-[#1A2F25] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-xs sm:text-sm text-[#DFCA9E] font-light leading-relaxed max-w-md">
                        {service.outcome}
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-semibold text-[#DFCA9E] hover:text-white transition-colors duration-200 shrink-0 group"
                      >
                        <span>{t.servicesIntro.inquireLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
