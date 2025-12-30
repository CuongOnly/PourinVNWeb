"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, translations } from '../locales/data';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.vi;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get valid language
const getValidLanguage = (lang: string | null): Language => {
  if (lang && ['vi', 'en', 'zh'].includes(lang)) {
    return lang as Language;
  }
  
  // Auto-detect browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('en')) return 'en';
  
  return 'vi'; // default
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('vi');

  // Initialize language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    const validLanguage = getValidLanguage(savedLanguage);
    setLanguageState(validLanguage);
  }, []);

  // Set language with persistence
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    
    // Optional: Update document language attribute for accessibility
    document.documentElement.lang = lang;
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};