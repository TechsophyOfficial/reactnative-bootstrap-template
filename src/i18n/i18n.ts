import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from '../locales/en.json';
import translationFR from '../locales/fr.json';
import translationES from '../locales/es.json';

// i18n configuration
i18n
  .use(initReactI18next) // Passes i18n down to React components
  .init({
    fallbackLng: 'EN', // Default language
    lng: 'EN', // Initial language
    resources: {
      EN: {translation: translationEN},
      FR: {translation: translationFR},
      ES: {translation: translationES},
    },
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
