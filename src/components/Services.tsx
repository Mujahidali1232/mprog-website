'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useImages } from '@/context/ImageContext';
import { Check } from 'lucide-react';

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
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#080D0A] border-b border-[#1A2F25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="max-w-3xl mb-14 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 break-words">
            {t.servicesIntro.title}
          </h2>
          <p className="text-base sm:text-lg text-[#DFCA9E] font-medium tracking-wide mb-4 sm:mb-5">
            {t.servicesIntro.eyebrow}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-[#8C9991] font-light leading-relaxed max-w-2xl">
            {t.servicesIntro.subtitle}
          </p>
        </div>

        {/* 3 Service Pillars */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {t.services.map((service, index) => {
            const isReversed = index % 2 === 1;
            const currentPillarImg = getPillarImage(index, service.image);

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-[260px] sm:h-[360px] lg:h-[500px] overflow-hidden rounded group border border-[#1A2F25]">
                      <Image
                        src={currentPillarImg}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/85 via-[#080D0A]/20 to-transparent" />

                      {/* Bottom Label */}
                      {service.id !== 'consulting' && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-white/10">
                          <h4 className="text-lg sm:text-xl font-bold text-white leading-tight break-words">
                            {service.title}
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>

                      {/* Title */}
                      <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight break-words">
                        {service.id === 'events-vip' && service.title.includes(' & ') ? (
                          <>
                            {service.title.split(' & ')[0]}
                            <br />
                            &amp; {service.title.split(' & ')[1]}
                          </>
                        ) : (
                          service.title
                        )}
                      </h3>

                      {/* Tagline */}
                      <p className="text-base sm:text-lg text-[#DFCA9E] mb-4 sm:mb-5 font-normal">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-[15px] text-[#B8C2BC] leading-relaxed font-light mb-6 sm:mb-8">
                        {service.intro}
                      </p>

                      {/* Sub-categories: 2 independent columns on sm+ so hovering one card never stretches or shifts the adjacent column */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 sm:gap-x-4 mb-2.5 sm:mb-4 items-start">
                        {[0, 1].map((colIdx) => (
                          <div key={colIdx} className="flex flex-col">
                            {service.categories
                              .map((cat, catIdx) => ({ cat, catIdx }))
                              .filter(({ catIdx }) => catIdx % 2 === colIdx)
                              .map(({ cat, catIdx }) => (
                                <div key={catIdx} className="group pb-3.5 sm:pb-4 outline-none" tabIndex={0}>
                                  <div className="p-4 sm:p-5 bg-[#0E1914] group-hover:bg-[#101D17] border border-[#1A2F25] group-hover:border-[#DFCA9E]/40 group-focus-within:border-[#DFCA9E]/40 rounded transition-[border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-lg group-hover:shadow-black/40 cursor-pointer">
                                    <h4 className="text-xs sm:text-sm font-semibold text-white flex items-start gap-2.5 leading-snug break-words">
                                      <span className="w-1 h-3.5 bg-[#DFCA9E] rounded-full shrink-0 mt-0.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-125" />
                                      <span className="min-w-0">{cat.title}</span>
                                    </h4>
                                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                      <div className="overflow-hidden">
                                        <ul className="pt-3 space-y-2">
                                          {cat.items.map((item, itemIdx) => (
                                            <li
                                              key={itemIdx}
                                              className="text-xs text-[#8C9991] flex items-start gap-2 leading-relaxed"
                                            >
                                              <Check className="w-3 h-3 text-[#DFCA9E]/80 shrink-0 mt-0.5" />
                                              <span className="min-w-0 break-words">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="pt-5 border-t border-[#1A2F25]">
                      <p className="text-xs sm:text-sm text-[#DFCA9E] font-light leading-relaxed max-w-lg">
                        {service.outcome}
                      </p>
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
