import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import hi from './hi.json';

export const resources = {
  en: en,
  hi: hi,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
