import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Direction } from '../types';
import { TranslationSchema } from './types';
import { ar } from './locales/ar';
import { en } from './locales/en';
import { fr } from './locales/fr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: TranslationSchema;
  setLanguage: (lang: Language) => void;
}

const translations: Record<Language, TranslationSchema> = {
  ar,
  en,
  fr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-latin');
    } else {
      document.body.classList.add('font-latin');
      document.body.classList.remove('font-arabic');
    }
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, t, setLanguage }}>
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
