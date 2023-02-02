import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./languages/index";

i18n.use(LanguageDetector);
i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});
const language = localStorage.getItem("lang");
i18n.changeLanguage(language);

export default i18n;
