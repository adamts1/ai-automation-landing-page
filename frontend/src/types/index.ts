// API Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface ContactSubmitResponse {
  name: string;
  email: string;
}

// Component Types
export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TechnologyItem {
  name: string;
  color: string;
}

export interface ReasonItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface CardItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Form Status
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Language Types
export type SupportedLanguage = 'en' | 'he';

export interface LanguageContextType {
  language: SupportedLanguage;
  isRTL: boolean;
  changeLanguage: (lang: SupportedLanguage) => void;
}

