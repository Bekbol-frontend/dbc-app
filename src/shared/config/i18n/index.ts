import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["ru", "uz"],
    fallbackLng: "ru",
    debug: import.meta.env.MODE !== "development", // waxitcha usilay qoydim negizi === blowi kerek !!!!

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
