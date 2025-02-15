import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ru } from "../translations/ru";
import { uz } from "../translations/uz";

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: localStorage.getItem("i18nextLng") || "uz", 
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

// Экспортируем весь `i18n`-инстанс
export default i18n;