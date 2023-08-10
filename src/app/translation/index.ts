import i18n from "i18next";
import ICU from "i18next-icu";
import { initReactI18next } from "react-i18next";

import en from "./langs/en.json";
import ru from "./langs/ru.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(ICU)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    lng: localStorage.getItem("lang") || "en", // if you're using a language detector, do not define the lng option

    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en,
      ru,
    },
  });
