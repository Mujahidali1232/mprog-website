'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useImages } from '@/context/ImageContext';
import { Menu, X, ChevronDown, ArrowRight, Sliders } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { setIsSelectorOpen } = useImages();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'services' | 'insights' | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Structured navigation definition
  const navData = {
    about: {
      label: 'ABOUT',
      href: '#about',
    },
    services: {
      label: 'SERVICES',
      href: '#services',
      items: [
        {
          label: 'Training & Coaching',
          href: '#training-coaching',
          desc: language === 'de' ? 'Produkt-, EV- & Vertriebstraining' : 'Product, EV & Sales Mindset Training',
        },
        {
          label: 'Advice',
          href: '#consulting',
          desc: language === 'de' ? 'Automobilhandel & Prozessoptimierung' : 'Dealership & Process Optimization',
        },
        {
          label: 'Events & VIP',
          href: '#events-vip',
          desc: language === 'de' ? 'Markenerlebnisse & VIP Hospitality' : 'Brand Experiences & VIP Hospitality',
        },
      ],
    },
    expertise: {
      label: 'EXPERTISE',
      href: '#certifications',
    },
    insights: {
      label: 'INSIGHTS',
      href: '#references',
      items: [
        {
          label: 'References',
          href: '#references',
          desc: language === 'de' ? 'Automobilpartner & internationale VIP-Gäste' : 'Automotive OEMs & Global VIP Delegations',
        },
        {
          label: 'Media Library',
          href: '#media',
          desc: language === 'de' ? 'Video- & Fotogalerie in Aktion' : 'Video & Photo Showcase in Action',
        },
      ],
    },
    contact: {
      label: 'CONTACT',
      href: '#contact',
    },
    cta: 'REQUEST A PROJECT',
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080D0A]/98 border-b border-[#1A2F25] shadow-lg shadow-black/50 py-3'
            : 'bg-[#080D0A]/85 backdrop-blur-md border-b border-[#1A2F25]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Mobile Product Genius – Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#DFCA9E]/50 group-hover:border-[#DFCA9E] transition-all duration-200 shrink-0 bg-white flex items-center justify-center shadow-md shadow-black/40">
                <Image
                  src="/assets/images/mprog-logo.png"
                  alt="Mobile Product Genius Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-[1px] rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-sans text-sm sm:text-[15px] tracking-[0.14em] text-white group-hover:text-[#DFCA9E] transition-colors duration-200 font-semibold uppercase">
                  Mobile Product Genius
                </span>
                <span className="text-[9px] tracking-[0.18em] text-[#DFCA9E]/80 uppercase font-normal mt-0.5">
                  Driven by Innovation. Defined by Experience.
                </span>
              </div>
            </Link>

            {/* Desktop Refined Navigation Links: ABOUT, SERVICES, EXPERTISE, INSIGHTS, CONTACT */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* ABOUT */}
              <a
                href={navData.about.href}
                className="text-xs xl:text-[13px] text-[#A0A0AB] hover:text-white transition-colors duration-150 font-medium tracking-[0.16em] uppercase py-2"
              >
                {navData.about.label}
              </a>

              {/* SERVICES (Dropdown: Training & Coaching, Advice, Events & VIP) */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={navData.services.href}
                  className={`flex items-center gap-1.5 text-xs xl:text-[13px] transition-colors duration-150 font-medium tracking-[0.16em] uppercase py-2 ${
                    openDropdown === 'services' ? 'text-white' : 'text-[#A0A0AB] hover:text-white'
                  }`}
                  onClick={(e) => {
                    // Allow navigation on click or toggle dropdown
                    if (window.innerWidth >= 1024) {
                      setOpenDropdown(openDropdown === 'services' ? null : 'services');
                    }
                  }}
                  aria-expanded={openDropdown === 'services'}
                  aria-haspopup="true"
                >
                  <span>{navData.services.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#DFCA9E]/80 transition-transform duration-200 ${
                      openDropdown === 'services' ? 'rotate-180 text-[#DFCA9E]' : ''
                    }`}
                  />
                </a>

                {/* Services Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-50 ${
                    openDropdown === 'services'
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="w-72 bg-[#0C1712]/98 backdrop-blur-xl border border-[#1A2F25] shadow-2xl shadow-black/80 rounded-sm p-2 flex flex-col gap-1">
                    <div className="px-3 pt-2 pb-1.5 border-b border-[#1A2F25] mb-1 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold">
                        {language === 'de' ? 'Leistungsbereiche' : 'Core Capabilities'}
                      </span>
                      <a
                        href="#services"
                        onClick={() => setOpenDropdown(null)}
                        className="text-[10px] text-[#8C9991] hover:text-white uppercase tracking-wider transition-colors"
                      >
                        {language === 'de' ? 'Übersicht' : 'Overview'} →
                      </a>
                    </div>
                    {navData.services.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group/sub p-2.5 rounded-sm hover:bg-[#12231A] transition-colors border border-transparent hover:border-[#1A2F25] block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white group-hover/sub:text-[#DFCA9E] transition-colors tracking-wide">
                            {subItem.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-[#DFCA9E] opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-[11px] text-[#8C9991] font-light mt-0.5 leading-snug">
                          {subItem.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* EXPERTISE */}
              <a
                href={navData.expertise.href}
                className="text-xs xl:text-[13px] text-[#A0A0AB] hover:text-white transition-colors duration-150 font-medium tracking-[0.16em] uppercase py-2"
              >
                {navData.expertise.label}
              </a>

              {/* INSIGHTS (Dropdown: References, Media Library) */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('insights')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={navData.insights.href}
                  className={`flex items-center gap-1.5 text-xs xl:text-[13px] transition-colors duration-150 font-medium tracking-[0.16em] uppercase py-2 ${
                    openDropdown === 'insights' ? 'text-white' : 'text-[#A0A0AB] hover:text-white'
                  }`}
                  onClick={(e) => {
                    if (window.innerWidth >= 1024) {
                      setOpenDropdown(openDropdown === 'insights' ? null : 'insights');
                    }
                  }}
                  aria-expanded={openDropdown === 'insights'}
                  aria-haspopup="true"
                >
                  <span>{navData.insights.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#DFCA9E]/80 transition-transform duration-200 ${
                      openDropdown === 'insights' ? 'rotate-180 text-[#DFCA9E]' : ''
                    }`}
                  />
                </a>

                {/* Insights Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-50 ${
                    openDropdown === 'insights'
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="w-72 bg-[#0C1712]/98 backdrop-blur-xl border border-[#1A2F25] shadow-2xl shadow-black/80 rounded-sm p-2 flex flex-col gap-1">
                    <div className="px-3 pt-2 pb-1.5 border-b border-[#1A2F25] mb-1 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFCA9E] font-semibold">
                        {language === 'de' ? 'Einblicke & Nachweise' : 'Track Record'}
                      </span>
                    </div>
                    {navData.insights.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className="group/sub p-2.5 rounded-sm hover:bg-[#12231A] transition-colors border border-transparent hover:border-[#1A2F25] block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white group-hover/sub:text-[#DFCA9E] transition-colors tracking-wide">
                            {subItem.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-[#DFCA9E] opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200" />
                        </div>
                        <p className="text-[11px] text-[#8C9991] font-light mt-0.5 leading-snug">
                          {subItem.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              <a
                href={navData.contact.href}
                className="text-xs xl:text-[13px] text-[#A0A0AB] hover:text-white transition-colors duration-150 font-medium tracking-[0.16em] uppercase py-2"
              >
                {navData.contact.label}
              </a>
            </nav>

            {/* Right Action Bar: EN | DE  +  REQUEST A PROJECT */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher: EN | DE (EN first, DE second as requested) */}
              <div
                className="flex items-center rounded-sm border border-[#1A2F25] bg-[#0E1914] p-0.5"
                role="group"
                aria-label="Language selection"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-[#DFCA9E] text-[#080D0A] shadow-sm'
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
                  className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                    language === 'de'
                      ? 'bg-[#DFCA9E] text-[#080D0A] shadow-sm'
                      : 'text-[#8C9991] hover:text-white'
                  }`}
                  aria-pressed={language === 'de'}
                  aria-label="Auf Deutsch umschalten"
                >
                  DE
                </button>
              </div>

              {/* Picture Manager Tool Trigger */}
              <button
                type="button"
                onClick={() => setIsSelectorOpen(true)}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-[#DFCA9E]/40 text-[#DFCA9E] hover:bg-[#DFCA9E] hover:text-[#080D0A] text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-200"
                title="Review & Define Pictures for Every Page"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Pictures</span>
              </button>

              {/* Main CTA: REQUEST A PROJECT */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-[11px] font-semibold uppercase tracking-[0.14em] bg-[#DFCA9E] hover:bg-[#EFE1C6] text-[#080D0A] transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#DFCA9E]/15"
              >
                {navData.cta}
              </a>
            </div>

            {/* Mobile Controls (Hamburger + Language) */}
            <div className="flex sm:hidden items-center gap-2">
              <div
                className="flex items-center rounded-sm border border-[#1A2F25] bg-[#0E1914] p-0.5"
                role="group"
                aria-label="Language selection"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
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
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
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

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-[#A0A0A8] hover:text-white focus:outline-none transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0C1712] border-l border-[#1A2F25] flex flex-col transition-transform duration-300 shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A2F25]">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#DFCA9E]/50 shrink-0 bg-white flex items-center justify-center shadow-sm">
                <Image
                  src="/assets/images/mprog-logo.png"
                  alt="Logo"
                  fill
                  sizes="32px"
                  className="object-contain p-[1px] rounded-full"
                />
              </div>
              <span className="text-xs font-semibold text-white tracking-[0.16em] uppercase">MProG</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-1.5 text-[#8C9991] hover:text-white rounded hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Nav Links: Clean 5-Item Structure */}
          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
            {/* ABOUT */}
            <a
              href={navData.about.href}
              onClick={closeMobileMenu}
              className="block py-3 px-3 text-sm text-[#D0D7D2] hover:text-white hover:bg-white/5 rounded font-medium tracking-[0.14em] uppercase transition-colors"
            >
              {navData.about.label}
            </a>

            {/* SERVICES Accordion */}
            <div className="border border-[#1A2F25] rounded-sm overflow-hidden bg-[#0E1914]/80">
              <div className="flex items-center justify-between pr-3">
                <a
                  href={navData.services.href}
                  onClick={closeMobileMenu}
                  className="flex-1 py-3 px-3 text-sm text-[#D0D7D2] hover:text-white font-medium tracking-[0.14em] uppercase transition-colors"
                >
                  {navData.services.label}
                </a>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-[#DFCA9E]/80 hover:text-[#DFCA9E]"
                  aria-label="Toggle Services submenu"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#1A2F25]/80 bg-black/20">
                  {navData.services.items.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={closeMobileMenu}
                      className="block p-2 rounded text-xs text-[#8C9991] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white tracking-wide block">{sub.label}</span>
                      <span className="text-[10px] text-[#7A8780] font-light">{sub.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* EXPERTISE */}
            <a
              href={navData.expertise.href}
              onClick={closeMobileMenu}
              className="block py-3 px-3 text-sm text-[#D0D7D2] hover:text-white hover:bg-white/5 rounded font-medium tracking-[0.14em] uppercase transition-colors"
            >
              {navData.expertise.label}
            </a>

            {/* INSIGHTS Accordion */}
            <div className="border border-[#1A2F25] rounded-sm overflow-hidden bg-[#0E1914]/80">
              <div className="flex items-center justify-between pr-3">
                <a
                  href={navData.insights.href}
                  onClick={closeMobileMenu}
                  className="flex-1 py-3 px-3 text-sm text-[#D0D7D2] hover:text-white font-medium tracking-[0.14em] uppercase transition-colors"
                >
                  {navData.insights.label}
                </a>
                <button
                  type="button"
                  onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                  className="p-2 text-[#DFCA9E]/80 hover:text-[#DFCA9E]"
                  aria-label="Toggle Insights submenu"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileInsightsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileInsightsOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#1A2F25]/80 bg-black/20">
                  {navData.insights.items.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={closeMobileMenu}
                      className="block p-2 rounded text-xs text-[#8C9991] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white tracking-wide block">{sub.label}</span>
                      <span className="text-[10px] text-[#7A8780] font-light">{sub.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CONTACT */}
            <a
              href={navData.contact.href}
              onClick={closeMobileMenu}
              className="block py-3 px-3 text-sm text-[#D0D7D2] hover:text-white hover:bg-white/5 rounded font-medium tracking-[0.14em] uppercase transition-colors"
            >
              {navData.contact.label}
            </a>
          </nav>

          {/* Drawer Footer */}
          <div className="px-5 py-6 border-t border-[#1A2F25] space-y-3 bg-[#080D0A]">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-full py-3 rounded-sm text-xs font-semibold uppercase tracking-[0.14em] bg-[#DFCA9E] text-[#080D0A] hover:bg-[#EFE1C6] transition-colors shadow-sm"
            >
              {navData.cta}
            </a>
            <div
              className="flex items-center rounded-sm border border-[#1A2F25] bg-[#0E1914] p-0.5"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => {
                  setLanguage('de');
                  closeMobileMenu();
                }}
                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                  language === 'de'
                    ? 'bg-[#DFCA9E] text-[#080D0A] shadow-sm'
                    : 'text-[#8C9991] hover:text-white'
                }`}
                aria-pressed={language === 'de'}
                aria-label="Auf Deutsch umschalten"
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => {
                  setLanguage('en');
                  closeMobileMenu();
                }}
                className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#DFCA9E] text-[#080D0A] shadow-sm'
                    : 'text-[#8C9991] hover:text-white'
                }`}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
