'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Mail, MapPin, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [imprintOpen, setImprintOpen] = useState(false);

  useEffect(() => {
    if (!imprintOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setImprintOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [imprintOpen]);

  return (
    <>
      <footer className="bg-[#080D0A] border-t border-[#1A2F25] text-[#8C9991] pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 py-12 sm:py-16 border-b border-[#1A2F25]">

            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-4 min-w-0">
              <Link href="#" className="inline-flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-5 group max-w-full">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-full overflow-hidden border border-[#DFCA9E]/50 group-hover:border-[#DFCA9E] transition-all duration-200 shrink-0 bg-white flex items-center justify-center shadow-md shadow-black/40">
                  <Image
                    src="/assets/images/mprog-logo.png"
                    alt="Mobile Product Genius Logo"
                    fill
                    sizes="64px"
                    className="object-contain object-center p-[1px] rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center leading-tight min-w-0">
                  <span className="font-sans text-xs min-[360px]:text-sm sm:text-[15px] tracking-[0.11em] sm:tracking-[0.14em] text-white group-hover:text-[#DFCA9E] transition-colors duration-200 font-semibold uppercase leading-tight break-words">
                    Mobile Product Genius
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.12em] sm:tracking-[0.16em] text-[#DFCA9E]/80 uppercase font-normal mt-1 leading-snug break-words">
                    {t.footer.tagline}
                  </span>
                </div>
              </Link>

              {t.footer.description ? (
                <p className="text-xs text-[#8C9991] font-light leading-relaxed max-w-xs">
                  {t.footer.description}
                </p>
              ) : null}
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 min-w-0">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold mb-4 sm:mb-5 break-words">
                {t.footer.navigationTitle}
              </h4>
              <ul className="space-y-1.5 text-xs">
                {t.navigation.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="inline-block py-1 text-[#8C9991] hover:text-[#DFCA9E] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 min-w-0">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold mb-4 sm:mb-5 break-words">
                {t.footer.servicesTitle}
              </h4>
              <ul className="space-y-1.5 text-xs">
                {t.footer.serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="inline-block py-1 text-[#8C9991] hover:text-[#DFCA9E] transition-colors duration-150 break-words"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-3 min-w-0">
              <h4 className="text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#DFCA9E] font-semibold mb-4 sm:mb-5 break-words">
                {t.footer.contactTitle}
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DFCA9E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#B8C2BC] break-words min-w-0">
                    {t.contact.companyName}<br />
                    {t.contact.addressLine1}<br />
                    {t.contact.addressCity}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#DFCA9E] shrink-0" />
                  <a href="mailto:info@mprog.eu" className="py-0.5 text-[#B8C2BC] hover:text-[#DFCA9E] transition-colors break-all">
                    info@mprog.eu
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-3.5 h-3.5 text-[#DFCA9E] shrink-0" />
                  <a href="https://www.mprog.eu" className="py-0.5 text-[#B8C2BC] hover:text-[#DFCA9E] transition-colors break-all">
                    www.mprog.eu
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C9991] text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} Mobile Product Genius UG. {t.footer.allRightsReserved}
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-3 md:pr-12 min-[1440px]:pr-0">
              <button
                type="button"
                onClick={() => setImprintOpen(true)}
                className="py-1.5 hover:text-[#DFCA9E] transition-colors"
              >
                {t.footer.imprint}
              </button>

              {/* Language Switcher: EN | DE */}
              <div
                className="flex items-center rounded border border-[#1A2F25] bg-[#0E1914] p-0.5"
                role="group"
                aria-label={language === 'de' ? 'Sprachauswahl' : 'Language selection'}
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 min-w-[30px] ${
                    language === 'en'
                      ? 'bg-[#DFCA9E] text-[#080D0A]'
                      : 'text-[#8C9991] hover:text-white'
                  }`}
                  aria-pressed={language === 'en'}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('de')}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 min-w-[30px] ${
                    language === 'de'
                      ? 'bg-[#DFCA9E] text-[#080D0A]'
                      : 'text-[#8C9991] hover:text-white'
                  }`}
                  aria-pressed={language === 'de'}
                  aria-label="Auf Deutsch umschalten"
                >
                  DE
                </button>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* Impressum Modal */}
      {imprintOpen && (
        <div
          className="modal-backdrop-enter fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setImprintOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t.footer.imprintTitle}
        >
          <div
            className="modal-panel-enter relative max-w-2xl w-full max-h-[90dvh] overflow-y-auto bg-[#0C1712] rounded p-5 sm:p-8 lg:p-9 border border-[#1A2F25] shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setImprintOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded text-[#8C9991] hover:text-white hover:bg-white/5 transition-colors"
              aria-label={language === 'de' ? 'Schließen' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 pr-10 break-words">
              {t.footer.imprintTitle}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#B8C2BC] font-light leading-relaxed">
              <p>
                <strong className="text-white">{t.footer.imprintContent.legalHeading}</strong><br />
                {t.contact.companyName}<br />
                {t.contact.addressLine1}<br />
                {t.contact.addressCity}
              </p>

              <p>
                <strong className="text-white">{t.footer.imprintContent.contactHeading}</strong><br />
                {language === 'de' ? 'E-Mail' : 'Email'}: info@mprog.eu<br />
                {language === 'de' ? 'Internet' : 'Website'}: www.mprog.eu
              </p>

              <p>
                <strong className="text-white">{t.footer.imprintContent.managementHeading}</strong><br />
                {t.footer.imprintContent.managementName}
              </p>

              <p>
                <strong className="text-white">{t.footer.imprintContent.contentResponsibleHeading}</strong><br />
                {t.footer.imprintContent.contentResponsible}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
