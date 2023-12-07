import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly', // Обязательная настройка, иначе будут грузиться переводы еще по дефолтным путям /ru-RU/ и т.д. И будут спамить 404 ошибками
    fallbackLng: ['ru', 'en'], // Указываем названия папок, в public/locales
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
