import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const tr = require("./locales/tr/translition.json");
const en = require("./locales/en/translition.json");

i18next.use(initReactI18next).init({
  debug: false,
  initImmediate: false,
  preload: ["tr", "en"],
  fallbackLng: "tr",
  lng: "tr",
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
});



export default i18next;
