// types/index.ts
// Tập trung tất cả type definitions cho dự án

/**
 * Supported language codes
 */
export type LanguageCode = 'vi' | 'en' | 'zh';

/**
 * Scroll mode types
 */
export type ScrollMode = 'fullscreen' | 'smooth';

/**
 * Translation keys interface
 */
export interface TranslationKeys {
  // Header
  settings: string;
  home: string;
  about: string;
  lab: string;
  projects: string;
  contact: string;
  
  // Scroll Settings
  SettingButton: string;
  scrollMode: string;
  fullscreenMode: string;
  smoothMode: string;
  fullscreenDesc: string;
  smoothDesc: string;
  
  // Device Info
  mobileDevice: string;
  desktopDevice: string;
  mobileInfo: string;
  desktopInfo: string;
  
  // General
  language: string;
  close: string;
  
  // Sections
  welcome: string;
  welcomeDesc: string;
  aboutUs: string;
  allProducts: string;
  technology: string;
  news: string;
  timeline: string;
  partners: string;
  footer: string;
  
  // Navigation
  scrollToNext: string;
  section: string;
  useKeyboard: string;
  orScroll: string;
  scrollText: string;
  useText: string;
  orScrollText: string;
}

/**
 * Translations type - Record of language codes to translation keys
 */
export type Translations = Record<LanguageCode, TranslationKeys>;

/**
 * App Context interface
 */
export interface AppContextType {
  scrollMode: ScrollMode;
  language: LanguageCode;
  isMobile: boolean;
  t: TranslationKeys;
  toggleScrollMode: () => void;
  setLanguage: (lang: LanguageCode) => void;
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

/**
 * Component Props interfaces
 */
export interface SettingButtonProps {
  scrollMode: ScrollMode;
  isMobile: boolean;
  language: LanguageCode;
  onToggleMode: () => void;
  onLanguageChange: (lang: LanguageCode) => void;
}

export interface HeaderProps {
  // Header không cần props vì dùng Context
}

export interface LayoutHomeProps {
  // LayoutHome không cần props vì dùng Context
}

/**
 * Section reference type
 */
export type SectionRef = HTMLElement | null;

/**
 * Video state interface
 */
export interface VideoState {
  isLoaded: boolean;
  isPlaying: boolean;
  hasError: boolean;
}

/**
 * API Response types (cho backend integration)
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface TranslationsApiResponse extends ApiResponse<Translations> {}

/**
 * Utility types
 */
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

/**
 * Color palette type
 */
export type ColorPalette = string[];

/**
 * Section type
 */
export interface Section {
  id: number;
  title: string;
  color: string;
  component?: React.ComponentType;
}