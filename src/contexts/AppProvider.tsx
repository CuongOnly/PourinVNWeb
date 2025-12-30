"use client";
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

// Type definitions
type LanguageCode = 'vi' | 'en' | 'zh';

interface TranslationKeys {
  settings: string;
  SettingButton: string;
  scrollMode: string;
  fullscreenMode: string;
  smoothMode: string;
  fullscreenDesc: string;
  smoothDesc: string;
  mobileDevice: string;
  desktopDevice: string;
  mobileInfo: string;
  desktopInfo: string;
  language: string;
  home: string;
  about: string;
  lab: string;
  projects: string;
  contact: string;
  welcome: string;
  section: string;
  scrollText: string;
  useText: string;
  orScrollText: string;
}

type Translations = Record<LanguageCode, TranslationKeys>;

// Translations with proper typing
const translations: Translations = {
  vi: {
    settings: 'Cài đặt',
    SettingButton: 'Cài đặt cuộn',
    scrollMode: 'Chế độ cuộn',
    fullscreenMode: 'Chế độ toàn màn hình',
    smoothMode: 'Chế độ cuộn mượt',
    fullscreenDesc: 'Chuyển từng phần với cuộn được kiểm soát. Tốt nhất cho bài thuyết trình.',
    smoothDesc: 'Cuộn tự nhiên của trình duyệt. Hiệu suất tốt hơn trên thiết bị yếu.',
    mobileDevice: '📱 Thiết bị di động',
    desktopDevice: '💻 Thiết bị máy tính',
    mobileInfo: 'Chế độ cuộn mượt được bật tự động để trải nghiệm tốt hơn trên di động',
    desktopInfo: 'Bạn có thể chuyển đổi giữa chế độ toàn màn hình và cuộn mượt',
    language: 'Ngôn ngữ',
    home: 'Trang chủ',
    about: 'Giới thiệu',
    lab: 'Phòng thí nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
    welcome: 'Chào mừng',
    section: 'Phần',
    scrollText: 'Cuộn',
    useText: 'Sử dụng',
    orScrollText: 'hoặc cuộn'
  },
  en: {
    settings: 'Settings',
    SettingButton: 'Scroll Settings',
    scrollMode: 'Scroll Mode',
    fullscreenMode: 'Fullscreen Mode',
    smoothMode: 'Smooth Mode',
    fullscreenDesc: 'Snap to each section with controlled scrolling. Best for presentations.',
    smoothDesc: 'Natural browser scrolling. Better performance on lower-end devices.',
    mobileDevice: '📱 Mobile Device',
    desktopDevice: '💻 Desktop Device',
    mobileInfo: 'Smooth scroll is automatically enabled for better mobile experience',
    desktopInfo: 'You can switch between fullscreen and smooth scroll',
    language: 'Language',
    home: 'Home',
    about: 'About',
    lab: 'Lab',
    projects: 'Projects',
    contact: 'Contact',
    welcome: 'Welcome',
    section: 'Section',
    scrollText: 'Scroll',
    useText: 'Use',
    orScrollText: 'or scroll'
  },
  zh: {
    settings: '设置',
    SettingButton: '滚动设置',
    scrollMode: '滚动模式',
    fullscreenMode: '全屏模式',
    smoothMode: '平滑模式',
    fullscreenDesc: '按部分滚动，适合演示文稿。',
    smoothDesc: '自然浏览器滚动，在低端设备上性能更好。',
    mobileDevice: '📱 移动设备',
    desktopDevice: '💻 桌面设备',
    mobileInfo: '移动设备自动启用平滑滚动以获得更好体验',
    desktopInfo: '您可以在全屏和平滑滚动之间切换',
    language: '语言',
    home: '首页',
    about: '关于',
    lab: '实验室',
    projects: '项目',
    contact: '联系',
    welcome: '欢迎',
    section: '部分',
    scrollText: '滚动',
    useText: '使用',
    orScrollText: '或滚动'
  }
};

// Context Type
interface AppContextType {
  scrollMode: 'fullscreen' | 'smooth';
  language: LanguageCode;
  isMobile: boolean;
  t: TranslationKeys;
  toggleScrollMode: () => void;
  setLanguage: (lang: LanguageCode) => void;
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollMode, setScrollMode] = useState<'fullscreen' | 'smooth'>('fullscreen');
  const [language, setLanguage] = useState<LanguageCode>('vi');
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Translations for current language - properly typed
  const t = useMemo(() => translations[language], [language]);

  // Detect mobile device
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      if (mobile && scrollMode === 'fullscreen') {
        setScrollMode('smooth');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [scrollMode]);

  // Toggle scroll mode
  const toggleScrollMode = useCallback(() => {
    if (!isMobile) {
      setScrollMode(prev => prev === 'fullscreen' ? 'smooth' : 'fullscreen');
    }
  }, [isMobile]);

  const value = useMemo(() => ({
    scrollMode,
    language,
    isMobile,
    t,
    toggleScrollMode,
    setLanguage,
    currentSection,
    setCurrentSection
  }), [scrollMode, language, isMobile, t, toggleScrollMode, currentSection]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Export types for use in other files
export type { LanguageCode, TranslationKeys, Translations };