'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Eye, X, Film, Camera } from 'lucide-react';

export const MediaGallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'training' | 'events'>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = selectedId ? t.media.items.find((item) => item.id === selectedId) || null : null;

  const filteredItems = t.media.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const filterButtons: { key: 'all' | 'training' | 'events'; label: string }[] = [
    { key: 'all', label: t.media.filters.all },
    { key: 'training', label: t.media.filters.training },
    { key: 'events', label: t.media.filters.events },
  ];

  return (
    <section id="media" className="py-24 sm:py-32 bg-[#0A100C] border-b border-[#1A2F25] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              {t.media.title}
            </h2>
            <p className="text-sm sm:text-base text-[#8C9991] font-light leading-relaxed">
              {t.media.description}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key)}
                className={`px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                  activeFilter === btn.key
                    ? 'bg-[#DFCA9E] text-[#080D0A] shadow-sm'
                    : 'bg-[#0E1914] text-[#8C9991] hover:text-white border border-[#1A2F25] hover:border-[#DFCA9E]/40'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Training & Coaching Media */}
        {(activeFilter === 'all' || activeFilter === 'training') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b border-[#1A2F25] pb-4">
              <div className="w-2 h-2 rounded-full bg-[#DFCA9E]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.media.categoryLabels.training}
              </h3>
              <span className="text-xs text-[#8C9991] uppercase tracking-[0.15em] ml-auto">
                {t.media.items.filter(i => i.category === 'training').length} Items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.media.items.filter(item => item.category === 'training').map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className="group cursor-pointer bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/40 transition-colors duration-200 rounded overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <Image
                      src={item.type === 'video' ? (item.thumbnail || '/assets/images/hero-saidi-bmw7.jpg') : item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#080D0A]/85 border border-[#1A2F25] text-[9px] uppercase font-semibold tracking-[0.12em] text-[#DFCA9E] rounded-sm">
                      {item.type === 'video' ? <Film className="w-2.5 h-2.5" /> : <Camera className="w-2.5 h-2.5" />}
                      <span>{t.media.categoryLabels.training}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#DFCA9E] text-[#080D0A] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                        {item.type === 'video' ? (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#7A8780] font-light leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#1A2F25] flex items-center justify-between text-[10px] text-[#DFCA9E] font-semibold uppercase tracking-[0.1em]">
                      <span>{item.type === 'video' ? t.media.playLabel : t.media.viewLabel}</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Events Media */}
        {(activeFilter === 'all' || activeFilter === 'events') && (
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-[#1A2F25] pb-4">
              <div className="w-2 h-2 rounded-full bg-[#DFCA9E]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.media.categoryLabels.events}
              </h3>
              <span className="text-xs text-[#8C9991] uppercase tracking-[0.15em] ml-auto">
                {t.media.items.filter(i => i.category === 'events').length} Items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.media.items.filter(item => item.category === 'events').map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className="group cursor-pointer bg-[#0E1914] border border-[#1A2F25] hover:border-[#DFCA9E]/40 transition-colors duration-200 rounded overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <Image
                      src={item.type === 'video' ? (item.thumbnail || '/assets/images/hero-saidi-bmw7.jpg') : item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D0A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#080D0A]/85 border border-[#1A2F25] text-[9px] uppercase font-semibold tracking-[0.12em] text-[#DFCA9E] rounded-sm">
                      {item.type === 'video' ? <Film className="w-2.5 h-2.5" /> : <Camera className="w-2.5 h-2.5" />}
                      <span>{t.media.categoryLabels.events}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#DFCA9E] text-[#080D0A] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                        {item.type === 'video' ? (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#7A8780] font-light leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#1A2F25] flex items-center justify-between text-[10px] text-[#DFCA9E] font-semibold uppercase tracking-[0.1em]">
                      <span>{item.type === 'video' ? t.media.playLabel : t.media.viewLabel}</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0C1712] rounded overflow-hidden border border-[#1A2F25]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded bg-[#080D0A]/80 hover:bg-[#15271E] text-white flex items-center justify-center border border-[#1A2F25] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-2 sm:p-3">
              {selectedItem.type === 'video' ? (
                <div className="relative aspect-video w-full rounded overflow-hidden bg-black">
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded overflow-hidden bg-black">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Modal Info */}
            <div className="px-6 pb-6 pt-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#DFCA9E] font-semibold">
                {t.media.categoryLabels[selectedItem.category] || selectedItem.category} · Mobile Product Genius UG
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#8C9991] font-light">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
