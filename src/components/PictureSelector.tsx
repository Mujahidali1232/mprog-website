'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useImages, ALL_LIBRARY_IMAGES } from '@/context/ImageContext';
import { X, Check, RefreshCw, Image as ImageIcon, Sliders, Eye } from 'lucide-react';

interface SectionDefinition {
  key: string;
  pageName: string;
  sectionName: string;
  description: string;
  defaultSrc: string;
}

const SECTIONS_LIST: SectionDefinition[] = [
  {
    key: 'hero',
    pageName: 'Home Page',
    sectionName: 'Hero Section Main Background',
    description: 'Primary high-impact hero showcase photo behind title & CTA.',
    defaultSrc: '/assets/images/hero-saidi-bmw7.jpg',
  },
  {
    key: 'about',
    pageName: 'Home / About Page',
    sectionName: 'About & Philosophy Card Photo',
    description: 'Stage presentation and leadership keynote photograph.',
    defaultSrc: '/assets/images/event-keynote-stage.jpg',
  },
  {
    key: 'pillar1',
    pageName: 'Services / Training Page',
    sectionName: 'Pillar 01: Training & Coaching Card',
    description: 'In-vehicle coaching and showroom product training feature photo.',
    defaultSrc: '/assets/images/training-coaching-car.jpg',
  },
  {
    key: 'pillar2',
    pageName: 'Services / Consulting Page',
    sectionName: 'Pillar 02: Dealership Consulting Card',
    description: 'Automotive dealership consultation & audit highlight photo.',
    defaultSrc: '/assets/images/consulting-dealership-1.jpg',
  },
  {
    key: 'pillar3',
    pageName: 'Services / Events Page',
    sectionName: 'Pillar 03: VIP Events & Motor Shows Card',
    description: 'BMW i8 delegation and luxury event presentation photo.',
    defaultSrc: '/assets/images/event-bmw-i8-delegation.jpg',
  },
];

export const PictureSelectorModal: React.FC = () => {
  const { images, setImageForSection, resetToDefaults, isSelectorOpen, setIsSelectorOpen } = useImages();
  const [activeSection, setActiveSection] = useState<SectionDefinition | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!isSelectorOpen) {
    return (
      <button
        onClick={() => setIsSelectorOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-[#0C1712] border border-[#DFCA9E]/60 text-[#DFCA9E] text-xs font-semibold uppercase tracking-[0.14em] rounded-full shadow-2xl hover:bg-[#DFCA9E] hover:text-[#080D0A] transition-all duration-300 group"
        title="Review & Define Pictures for Every Page"
      >
        <Sliders className="w-4 h-4 text-[#DFCA9E] group-hover:text-[#080D0A] transition-colors" />
        <span>Review & Select Pictures</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#080D0A] border border-[#1A2F25] rounded-lg shadow-2xl my-auto flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A2F25] bg-[#0C140F]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#DFCA9E]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold">
                Client Control Panel
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Page & Section Picture Manager
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetToDefaults}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#1A2F25] hover:border-[#DFCA9E]/50 text-[#8C9991] hover:text-white text-xs uppercase tracking-[0.1em] rounded transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
            <button
              onClick={() => setIsSelectorOpen(false)}
              className="p-2 text-[#8C9991] hover:text-white bg-[#0E1914] hover:bg-[#1A2F25] border border-[#1A2F25] rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <p className="text-sm text-[#8C9991] font-light leading-relaxed">
            Review the pictures assigned to every page and section of the website below. Click <strong className="text-white">Change Picture</strong> on any section to pick a new high-resolution photo from the master image gallery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS_LIST.map((sec) => {
              const currentSrc = images[sec.key] || sec.defaultSrc;
              const currentImgData = ALL_LIBRARY_IMAGES.find((i) => i.src === currentSrc);

              return (
                <div
                  key={sec.key}
                  className="bg-[#0E1914] border border-[#1A2F25] rounded-md p-5 flex flex-col justify-between hover:border-[#DFCA9E]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#DFCA9E] font-semibold px-2 py-0.5 bg-[#080D0A] border border-[#1A2F25] rounded-sm">
                        {sec.pageName}
                      </span>
                      <span className="text-[10px] text-[#8C9991] uppercase tracking-wider">
                        {currentImgData ? currentImgData.resolution.split(' ')[0] : 'High-Res'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 leading-snug">
                      {sec.sectionName}
                    </h3>
                    <p className="text-xs text-[#7A8780] font-light mb-4 leading-relaxed">
                      {sec.description}
                    </p>

                    {/* Preview Box */}
                    <div className="relative aspect-[16/10] w-full rounded bg-black overflow-hidden border border-[#1A2F25] mb-4 group">
                      <Image
                        src={currentSrc}
                        alt={sec.sectionName}
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                      <button
                        onClick={() => setPreviewImage(currentSrc)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs text-white font-medium uppercase tracking-wider"
                      >
                        <Eye className="w-4 h-4 text-[#DFCA9E]" />
                        <span>Preview Full Screen</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1A2F25] flex items-center justify-between">
                    <span className="text-[11px] text-[#DFCA9E] truncate max-w-[170px]" title={currentImgData?.title}>
                      {currentImgData?.title || 'Selected Picture'}
                    </span>

                    <button
                      onClick={() => setActiveSection(sec)}
                      className="px-3 py-1.5 bg-[#DFCA9E] text-[#080D0A] hover:bg-[#EFE1C6] text-xs font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors"
                    >
                      Select Picture
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 border-t border-[#1A2F25] bg-[#0C140F] flex items-center justify-between text-xs text-[#8C9991]">
          <span>14 Master High-Resolution Photos Available (up to 9504x6336 resolution)</span>
          <button
            onClick={() => setIsSelectorOpen(false)}
            className="px-5 py-2 bg-[#1A2F25] hover:bg-[#245E44] text-white text-xs uppercase tracking-[0.12em] font-semibold rounded transition-colors"
          >
            Done Reviewing
          </button>
        </div>
      </div>

      {/* Picture Selection Sub-Modal */}
      {activeSection && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0C1712] border border-[#1A2F25] rounded-lg p-6 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1A2F25]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#DFCA9E] font-semibold">
                  Selecting picture for:
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activeSection.sectionName}
                </h3>
              </div>
              <button
                onClick={() => setActiveSection(null)}
                className="p-1.5 text-[#8C9991] hover:text-white bg-[#0E1914] border border-[#1A2F25] rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Gallery Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto p-1 flex-1">
              {ALL_LIBRARY_IMAGES.map((libImg) => {
                const isSelected = (images[activeSection.key] || activeSection.defaultSrc) === libImg.src;

                return (
                  <div
                    key={libImg.id}
                    onClick={() => {
                      setImageForSection(activeSection.key, libImg.src);
                      setActiveSection(null);
                    }}
                    className={`cursor-pointer rounded border overflow-hidden transition-all duration-200 bg-[#0E1914] flex flex-col ${
                      isSelected
                        ? 'border-[#DFCA9E] ring-1 ring-[#DFCA9E]'
                        : 'border-[#1A2F25] hover:border-[#DFCA9E]/50'
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full bg-black">
                      <Image
                        src={libImg.src}
                        alt={libImg.title}
                        fill
                        sizes="350px"
                        className="object-cover"
                      />
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-[#DFCA9E] text-[#080D0A] rounded-full p-1 shadow-md">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-white mb-1 line-clamp-1">
                        {libImg.title}
                      </h4>
                      <span className="text-[10px] text-[#8C9991] block">
                        {libImg.resolution}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Full Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-6xl w-full aspect-video rounded overflow-hidden bg-black border border-[#1A2F25]">
            <Image
              src={previewImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded border border-[#1A2F25]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
