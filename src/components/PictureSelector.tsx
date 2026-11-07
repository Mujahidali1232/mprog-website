'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useImages, ALL_LIBRARY_IMAGES } from '@/context/ImageContext';
import { useLanguage } from '@/context/LanguageContext';
import { X, Check, RefreshCw, Eye } from 'lucide-react';

interface SectionDefinition {
  key: string;
  pageName: string;
  pageNameDe: string;
  sectionName: string;
  sectionNameDe: string;
  description: string;
  descriptionDe: string;
  defaultSrc: string;
}

const SECTIONS_LIST: SectionDefinition[] = [
  {
    key: 'hero',
    pageName: 'Home Page',
    pageNameDe: 'Startseite',
    sectionName: 'Hero Section Main Background',
    sectionNameDe: 'Hero-Bereich Haupthintergrund',
    description: 'Primary high-impact hero showcase photo behind title & CTA.',
    descriptionDe: 'Primäres Hero-Hintergrundfoto hinter Titel & CTA.',
    defaultSrc: '/assets/images/hero-saidi-bmw7.jpg',
  },
  {
    key: 'about',
    pageName: 'Home / About Page',
    pageNameDe: 'Über Uns',
    sectionName: 'About & Philosophy Card Photo',
    sectionNameDe: 'Über Uns & Philosophie Foto',
    description: 'Stage presentation and leadership keynote photograph.',
    descriptionDe: 'Bühnenpräsentation und Leadership-Keynote-Aufnahme.',
    defaultSrc: '/assets/images/event-keynote-stage.jpg',
  },
  {
    key: 'pillar1',
    pageName: 'Services / Training Page',
    pageNameDe: 'Leistungen / Training',
    sectionName: 'Pillar 01: Training & Coaching Card',
    sectionNameDe: 'Säule 01: Training & Coaching',
    description: 'In-vehicle coaching and showroom product training feature photo.',
    descriptionDe: 'Fahrzeug-Coaching und Showroom-Produkttraining.',
    defaultSrc: '/assets/images/training-coaching-car.jpg',
  },
  {
    key: 'pillar2',
    pageName: 'Services / Consulting Page',
    pageNameDe: 'Leistungen / Beratung',
    sectionName: 'Pillar 02: Dealership Consulting Card',
    sectionNameDe: 'Säule 02: Beratung für Automobilhändler',
    description: 'Automotive dealership consultation & audit highlight photo.',
    descriptionDe: 'Beratung und Prozessoptimierung im Automobilhandel.',
    defaultSrc: '/assets/images/consulting-dealership-1.jpg',
  },
  {
    key: 'pillar3',
    pageName: 'Services / Events Page',
    pageNameDe: 'Leistungen / Events',
    sectionName: 'Pillar 03: VIP Events & Motor Shows Card',
    sectionNameDe: 'Säule 03: Events, Markenerlebnisse & VIP Services',
    description: 'BMW i8 delegation and luxury event presentation photo.',
    descriptionDe: 'VIP-Delegation und exklusive Event-Präsentation.',
    defaultSrc: '/assets/images/event-bmw-i8-delegation.jpg',
  },
];

export const PictureSelectorModal: React.FC = () => {
  const { images, setImageForSection, resetToDefaults, isSelectorOpen, setIsSelectorOpen } = useImages();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionDefinition | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!isSelectorOpen) {
    return null;
  }

  const isDe = language === 'de';

  return (
    <div className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#080D0A] border border-[#1A2F25] rounded-lg shadow-2xl my-auto flex flex-col max-h-[92dvh]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 border-b border-[#1A2F25] bg-[#0C140F]">
          <div className="pr-10 sm:pr-0 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#DFCA9E] shrink-0" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#DFCA9E] font-semibold">
                {isDe ? 'Kunden-Kontrollbereich' : 'Client Control Panel'}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight break-words">
              {isDe ? 'Seiten- & Bereichs-Bildverwaltung' : 'Page & Section Picture Manager'}
            </h2>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => resetToDefaults()}
              className="flex items-center gap-1.5 px-3 py-2 border border-[#1A2F25] hover:border-[#DFCA9E]/50 text-[#8C9991] hover:text-white text-xs uppercase tracking-[0.1em] rounded transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 shrink-0" />
              <span>{isDe ? 'Standard wiederherstellen' : 'Reset Defaults'}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSelectorOpen(false)}
              className="absolute top-3.5 right-3.5 sm:static w-10 h-10 flex items-center justify-center text-[#8C9991] hover:text-white bg-[#0E1914] hover:bg-[#1A2F25] border border-[#1A2F25] rounded transition-colors shrink-0"
              aria-label={isDe ? 'Schließen' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 sm:space-y-6">
          <p className="text-xs sm:text-sm text-[#8C9991] font-light leading-relaxed">
            {isDe ? (
              <>
                Überprüfen Sie unten die den einzelnen Bereichen der Website zugewiesenen Bilder. Klicken Sie auf{' '}
                <strong className="text-white">Bild auswählen</strong>, um ein neues hochauflösendes Foto aus der Galerie zuzuweisen.
              </>
            ) : (
              <>
                Review the pictures assigned to every page and section of the website below. Click{' '}
                <strong className="text-white">Change Picture</strong> on any section to pick a new high-resolution photo from the master image gallery.
              </>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SECTIONS_LIST.map((sec) => {
              const currentSrc = images[sec.key] || sec.defaultSrc;
              const currentImgData = ALL_LIBRARY_IMAGES.find((i) => i.src === currentSrc);

              return (
                <div
                  key={sec.key}
                  className="bg-[#0E1914] border border-[#1A2F25] rounded-md p-4 sm:p-5 flex flex-col justify-between hover:border-[#DFCA9E]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#DFCA9E] font-semibold px-2 py-0.5 bg-[#080D0A] border border-[#1A2F25] rounded-sm truncate">
                        {isDe ? sec.pageNameDe : sec.pageName}
                      </span>
                      <span className="text-[10px] text-[#8C9991] uppercase tracking-wider shrink-0">
                        {currentImgData ? currentImgData.resolution.split(' ')[0] : 'High-Res'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 leading-snug break-words">
                      {isDe ? sec.sectionNameDe : sec.sectionName}
                    </h3>
                    <p className="text-xs text-[#7A8780] font-light mb-4 leading-relaxed">
                      {isDe ? sec.descriptionDe : sec.description}
                    </p>

                    {/* Preview Box */}
                    <div className="relative aspect-[16/10] w-full rounded bg-black overflow-hidden border border-[#1A2F25] mb-4 group">
                      <Image
                        src={currentSrc}
                        alt={isDe ? sec.sectionNameDe : sec.sectionName}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setPreviewImage(currentSrc)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:bg-black/35 transition-opacity flex items-center justify-center gap-2 text-xs text-white font-medium uppercase tracking-wider px-2 text-center"
                      >
                        <Eye className="w-4 h-4 text-[#DFCA9E] shrink-0" />
                        <span>{isDe ? 'Vollbildvorschau' : 'Preview Full Screen'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1A2F25] flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-[#DFCA9E] truncate max-w-[150px] sm:max-w-[170px]" title={currentImgData?.title}>
                      {currentImgData?.title || (isDe ? 'Ausgewähltes Bild' : 'Selected Picture')}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveSection(sec)}
                      className="px-3 py-2 bg-[#DFCA9E] text-[#080D0A] hover:bg-[#EFE1C6] text-xs font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors shrink-0"
                    >
                      {isDe ? 'Bild auswählen' : 'Select Picture'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 sm:px-6 py-4 border-t border-[#1A2F25] bg-[#0C140F] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs text-[#8C9991]">
          <span className="text-center sm:text-left">
            {isDe
              ? '14 hochauflösende Master-Fotos verfügbar (bis zu 9504×6336 Auflösung)'
              : '14 Master High-Resolution Photos Available (up to 9504x6336 resolution)'}
          </span>
          <button
            type="button"
            onClick={() => setIsSelectorOpen(false)}
            className="px-5 py-2.5 bg-[#1A2F25] hover:bg-[#245E44] text-white text-xs uppercase tracking-[0.12em] font-semibold rounded transition-colors shrink-0"
          >
            {isDe ? 'Fertig' : 'Done Reviewing'}
          </button>
        </div>
      </div>

      {/* Picture Selection Sub-Modal */}
      {activeSection && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0C1712] border border-[#1A2F25] rounded-lg p-4 sm:p-6 max-h-[88dvh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-[#1A2F25]">
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#DFCA9E] font-semibold block">
                  {isDe ? 'Bildauswahl für:' : 'Selecting picture for:'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 break-words">
                  {isDe ? activeSection.sectionNameDe : activeSection.sectionName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSection(null)}
                className="w-10 h-10 flex items-center justify-center text-[#8C9991] hover:text-white bg-[#0E1914] border border-[#1A2F25] rounded shrink-0"
                aria-label={isDe ? 'Schließen' : 'Close'}
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
          className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-6xl w-full aspect-video max-h-[85dvh] rounded overflow-hidden bg-black border border-[#1A2F25]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center bg-black/80 hover:bg-[#15271E] text-white rounded border border-[#1A2F25] transition-colors"
              aria-label={isDe ? 'Schließen' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
