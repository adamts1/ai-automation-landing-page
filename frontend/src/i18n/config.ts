import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import heTranslations from './translations/he.json';

// Get saved language or default to 'he' (Hebrew)
const savedLanguage = localStorage.getItem('language') || 'he';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

