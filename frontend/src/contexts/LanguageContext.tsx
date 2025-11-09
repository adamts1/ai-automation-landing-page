import { createContext, useContext, useEffect, useState, ReactNode, FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { LanguageContextType, SupportedLanguage } from '../types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<SupportedLanguage>(i18n.language as SupportedLanguage);
  const [isRTL, setIsRTL] = useState<boolean>(i18n.language === 'he');

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  const changeLanguage = (lang: SupportedLanguage): void => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setIsRTL(lang === 'he');
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, isRTL, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

