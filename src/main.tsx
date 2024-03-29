import React from "react";
import ReactDOM from "react-dom/client";

import locale_enUS from "./locales/enUS/translation.json";
import locale_ptBR from "./locales/ptBR/translation.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";

let selectedLanguage = "enUS";
if (localStorage.getItem("selected-language") !== null) {
  selectedLanguage = localStorage.getItem("selected-language")!;
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  resources: {
    enUS: {
      global: locale_enUS,
    },
    ptBR: {
      global: locale_ptBR,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
