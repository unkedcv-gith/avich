import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from '../i18n/translations';

export type Language = 'es' | 'en' | 'pt';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string; // Emoji flag representation
  countryName: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'es',
    label: 'Español',
    shortLabel: 'ES',
    flag: '🇪🇸',
    countryName: 'Español'
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: '🇺🇸',
    countryName: 'English'
  },
  {
    code: 'pt',
    label: 'Português (Brasil)',
    shortLabel: 'PT-BR',
    flag: '🇧🇷',
    countryName: 'Brasil'
  }
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  currentOption: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('avich_language');
      if (saved === 'es' || saved === 'en' || saved === 'pt') {
        return saved;
      }
    }
    // Default language is Spanish as explicitly requested
    return 'es';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('avich_language', newLang);
      document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : newLang;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    }
  }, [language]);

  const t = translations[language];
  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentOption }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
