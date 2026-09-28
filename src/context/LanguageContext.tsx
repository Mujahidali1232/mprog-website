'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, SiteContent } from '@/types/content';
import { deContent } from '@/content/de';
import { enContent } from '@/content/en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: SiteContent;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    try {
      const stored = localStorage.getItem('mprog_lang') as Language;
      if (stored === 'de' || stored === 'en') {
        setLanguageState(stored);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = stored;
        }
      } else {
        // Default to German ('de') as primary language of MProG
        setLanguageState('de');
        if (typeof document !== 'undefined') {
          document.documentElement.lang = 'de';
        }
      }
    } catch {
      // Ignore localStorage exceptions in restrictive environments
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    try {
      localStorage.setItem('mprog_lang', lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'de' ? 'en' : 'de';
    setLanguage(nextLang);
  };

  const t = language === 'de' ? deContent : enContent;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
