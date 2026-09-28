'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUp, Globe, Mail, MapPin, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [imprintOpen, setImprintOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#080D0A] border-t border-[#1A2F25] text-[#8C9991]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-[#1A2F25]">

            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="#" className="flex items-center gap-3 mb-5 group">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#DFCA9E]/35 group-hover:border-[#DFCA9E]/75 transition-colors shrink-0">
                  <Image
                    src="/assets/images/mprog-logo.png"
                    alt="Mobile Product Genius Logo"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-sans text-sm font-bold text-white tracking-[0.1em] uppercase block group-hover:text-[#DFCA9E] transition-colors">
                    Mobile Product Genius
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#DFCA9E]/75 font-normal">
                    UG (haftungsbeschränkt)
                  </span>
                </div>
              </Link>

              <p className="text-sm text-[#DFCA9E] mb-4 leading-snug font-normal">
                &ldquo;{t.footer.tagline}&rdquo;
              </p>

              <p className="text-xs text-[#8C9991] font-light leading-relaxed max-w-xs">
                {t.footer.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold mb-5">
                {t.footer.navigationTitle}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {t.navigation.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-[#8C9991] hover:text-[#DFCA9E] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold mb-5">
                {t.footer.servicesTitle}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {t.footer.serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-[#8C9991] hover:text-[#DFCA9E] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold mb-5">
                {t.footer.contactTitle}
              </h4>
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DFCA9E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#B8C2BC]">
                    {t.contact.companyName}<br />
                    {t.contact.addressLine1}<br />
                    {t.contact.addressCity}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#DFCA9E] shrink-0" />
                  <a href="mailto:info@mprog.eu" className="text-[#B8C2BC] hover:text-[#DFCA9E] transition-colors">
                    info@mprog.eu
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-3.5 h-3.5 text-[#DFCA9E] shrink-0" />
                  <a href="https://www.mprog.eu" className="text-[#B8C2BC] hover:text-[#DFCA9E] transition-colors">
                    www.mprog.eu
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C9991]">
            <div>
              &copy; {new Date().getFullYear()} Mobile Product Genius UG. {t.footer.allRightsReserved}
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={() => setImprintOpen(true)}
                className="hover:text-[#DFCA9E] transition-colors"
              >
                {t.footer.imprint}
              </button>

              {/* Language Switcher: DE | EN */}
              <div
                className="flex items-center rounded border border-[#1A2F25] bg-[#0E1914] p-0.5"
                role="group"
                aria-label="Language selection"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('de')}
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                    language === 'de'
                      ? 'bg-[#DFCA9E] text-[#080D0A]'
                      : 'text-[#8C9991] hover:text-white'
                  }`}
                  aria-pressed={language === 'de'}
                  aria-label="Auf Deutsch umschalten"
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-[#DFCA9E] text-[#080D0A]'
                      : 'text-[#8C9991] hover:text-white'
                  }`}
                  aria-pressed={language === 'en'}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 hover:text-[#DFCA9E] transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{t.footer.backToTop}</span>
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Impressum Modal */}
      {imprintOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setImprintOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0C1712] rounded p-7 sm:p-9 border border-[#1A2F25] shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImprintOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#8C9991] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-5">
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
                E-Mail: info@mprog.eu<br />
                Internet: www.mprog.eu
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
