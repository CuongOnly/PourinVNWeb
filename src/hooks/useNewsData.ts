import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { newsData, newsNavigation, newsTranslations } from '../locales/data';

export const useNewsData = () => {
  const { language } = useLanguage();

  const data = useMemo(() => ({
    newsItems: newsData[language] || newsData.vi,
    navigation: newsNavigation[language] || newsNavigation.vi,
    translations: newsTranslations[language] || newsTranslations.vi,
  }), [language]);

  return data;
};