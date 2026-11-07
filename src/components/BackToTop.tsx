'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const BackToTop: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      title={t.footer.backToTop}
      className={`group fixed right-4 sm:right-6 lg:right-7 bottom-[max(1.1rem,calc(env(safe-area-inset-bottom)+0.75rem))] sm:bottom-6 lg:bottom-7 z-40 w-8 h-8 sm:w-9 sm:h-9 before:content-[''] before:absolute before:-inset-1.5 rounded-full flex items-center justify-center bg-[#0E1914]/95 hover:bg-[#DFCA9E] active:scale-95 text-[#DFCA9E] hover:text-[#080D0A] border border-[#DFCA9E]/50 hover:border-[#DFCA9E] backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.65)] hover:shadow-[0_8px_24px_rgba(223,202,158,0.25)] transition-[opacity,transform,background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-3 scale-90 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5" />
    </button>
  );
};
