"use client";
import React, { useCallback, useMemo } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales/data';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
  shortName: string;
}

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages: LanguageOption[] = useMemo(() => [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', shortName: 'VN' },
    { code: 'en', name: 'English', flag: '🇺🇸', shortName: 'EN' },
    { code: 'zh', name: '中文', flag: '🇨🇳', shortName: '中文' }
  ], []);

  const currentLanguage = useMemo(() => 
    languages.find(lang => lang.code === language) || languages[0],
    [language, languages]
  );

  const handleLanguageChange = useCallback((langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  }, [setLanguage]);

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  // Render dropdown content
  const renderDropdown = () => (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={closeDropdown}
        aria-hidden="true"
      />
      <div 
        className="absolute top-full right-0 mt-2 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 min-w-[140px] overflow-hidden backdrop-blur-lg"
        role="menu"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-200 flex items-center gap-3 ${
              language === lang.code 
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500' 
                : 'text-gray-700'
            }`}
            role="menuitem"
            aria-selected={language === lang.code}
          >
            <span className="text-base" aria-hidden="true">{lang.flag}</span>
            <span className="font-medium text-sm flex-1">{lang.shortName}</span>
            {language === lang.code && (
              <Check className="w-4 h-4 text-blue-500" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div className="relative">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label={`Current language: ${currentLanguage.name}. Open language selector`}
        >
          <Globe className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-medium">
            {currentLanguage.shortName}
          </span>
          <ChevronDown 
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            aria-hidden="true" 
          />
        </button>

        {isOpen && renderDropdown()}
      </div>

      {/* Mobile Version - Compact */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 px-2 py-1 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label={`Current language: ${currentLanguage.name}. Open language selector`}
        >
          <span className="text-xs font-medium">
            {currentLanguage.shortName}
          </span>
          <ChevronDown 
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            aria-hidden="true" 
          />
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={closeDropdown}
              aria-hidden="true"
            />
            <div 
              className="absolute top-full right-0 mt-1 z-50 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[100px] overflow-hidden backdrop-blur-lg"
              role="menu"
              aria-label="Select language"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                    language === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                  role="menuitem"
                  aria-selected={language === lang.code}
                >
                  <span className="text-sm" aria-hidden="true">{lang.flag}</span>
                  <span className="font-medium text-xs">{lang.shortName}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;