'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Eye, X, Film, Camera } from 'lucide-react';

export const MediaGallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'training' | 'events'>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = selectedId ? t.media.items.find((item) => item.id === selectedId) || null : null;

  useEffect(() => {
    if (!selectedId) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedId]);

  const filterButtons: { key: 'all' | 'training' | 'events'; label: string }[] = [
    { key: 'all', label: t.media.filters.all },
    { key: 'training', label: t.media.filters.training },
    { key: 'events', label: t.media.filters.events },
  ];

  // Helper to sort category items: Video cards first at top, Photo cards below
  const getSortedCategoryItems = (category: 'training' | 'events') => {
    return t.media.items
      .filter((item) => item.category === category)
      .sort((a, b) => (a.type === 'video' ? -1 : b.type === 'video' ? 1 : 0));
  };

  const trainingItems = getSortedCategoryItems('training');
  const eventsItems = getSortedCategoryItems('events');

  return (
    <section id="media" className="py-16 sm:py-24 lg:py-32 bg-[#0A100C] border-b border-[#1A2F25] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 break-words">
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
                type="button"
                onClick={() => setActiveFilter(btn.key)}
                className={`min-h-[40px] px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
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
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 border-b border-[#1A2F25] pb-4">
              <div className="w-2 h-2 rounded-full bg-[#DFCA9E] shrink-0" />
              <h3 className="text-lg min-[360px]:text-xl sm:text-2xl font-bold text-white tracking-tight min-w-0 break-words">
                {t.media.categoryLabels.training}
              </h3>
              <span className="text-[11px] sm:text-xs text-[#8C9991] uppercase tracking-[0.12em] sm:tracking-[0.15em] ml-auto shrink-0 whitespace-nowrap">
                {trainingItems.length} {language === 'de' ? 'Einträge' : 'Items'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {trainingItems.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedId(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }
                  }}
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
                    <div className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] flex items-center gap-1.5 px-2.5 py-1 bg-[#080D0A]/85 border border-[#1A2F25] text-[9px] uppercase font-semibold tracking-[0.12em] text-[#DFCA9E] rounded-sm">
                      {item.type === 'video' ? <Film className="w-2.5 h-2.5 shrink-0" /> : <Camera className="w-2.5 h-2.5 shrink-0" />}
                      <span className="truncate">{t.media.categoryLabels.training}</span>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.type === 'video' ? '[@media(hover:none)]:opacity-95' : ''
                      }`}
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#DFCA9E] text-[#080D0A] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                        {item.type === 'video' ? (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug break-words">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Events Media */}
        {(activeFilter === 'all' || activeFilter === 'events') && (
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 border-b border-[#1A2F25] pb-4">
              <div className="w-2 h-2 rounded-full bg-[#DFCA9E] shrink-0" />
              <h3 className="text-lg min-[360px]:text-xl sm:text-2xl font-bold text-white tracking-tight min-w-0 break-words">
                {t.media.categoryLabels.events}
              </h3>
              <span className="text-[11px] sm:text-xs text-[#8C9991] uppercase tracking-[0.12em] sm:tracking-[0.15em] ml-auto shrink-0 whitespace-nowrap">
                {eventsItems.length} {language === 'de' ? 'Einträge' : 'Items'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {eventsItems.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedId(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }
                  }}
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
                    <div className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] flex items-center gap-1.5 px-2.5 py-1 bg-[#080D0A]/85 border border-[#1A2F25] text-[9px] uppercase font-semibold tracking-[0.12em] text-[#DFCA9E] rounded-sm">
                      {item.type === 'video' ? <Film className="w-2.5 h-2.5 shrink-0" /> : <Camera className="w-2.5 h-2.5 shrink-0" />}
                      <span className="truncate">{t.media.categoryLabels.events}</span>
                    </div>
                    <div
                      className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.type === 'video' ? '[@media(hover:none)]:opacity-95' : ''
                      }`}
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#DFCA9E] text-[#080D0A] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                        {item.type === 'video' ? (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug break-words">
                      {item.title}
                    </h4>
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
          className="modal-backdrop-enter fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div
            className="modal-panel-enter relative max-w-5xl w-full max-h-[90dvh] flex flex-col bg-[#0C1712] rounded overflow-hidden border border-[#1A2F25] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded bg-[#080D0A]/85 hover:bg-[#15271E] text-white flex items-center justify-center border border-[#1A2F25] transition-colors"
              aria-label={language === 'de' ? 'Schließen' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 flex flex-col">
              <div className="p-2 sm:p-3 shrink-0">
                {selectedItem.type === 'video' ? (
                  <div className="relative aspect-video max-h-[50dvh] sm:max-h-[66dvh] w-full rounded overflow-hidden bg-black mx-auto">
                    <video
                      key={selectedItem.src}
                      src={selectedItem.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      {language === 'de'
                        ? 'Ihr Browser unterstützt das Video-Tag nicht.'
                        : 'Your browser does not support the video tag.'}
                    </video>
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[50dvh] sm:max-h-[66dvh] w-full rounded overflow-hidden bg-black mx-auto">
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
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1.5 sm:pt-2">
                <span className="text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#DFCA9E] font-semibold block">
                  {t.media.categoryLabels[selectedItem.category] || selectedItem.category} · Mobile Product Genius UG
                </span>
                <h3 className="text-base sm:text-2xl font-bold text-white mt-1 mb-1 sm:mb-2 break-words">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8C9991] font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
