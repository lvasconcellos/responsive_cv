import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import MainContent from "./MainContent";
import ScrollTopButton from "./ScrollTopButton";
import CookiesConsent from "./CookiesConsent";

function Resume() {
  const [locale, i18n, ready] = useTranslation("global", {
    useSuspense: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.getElementById("scroll-top");
      if (scrollY >= 560) scrollTop?.classList.add("show-scroll");
      else scrollTop?.classList.remove("show-scroll");
    });

    const lang = localStorage.getItem("selected-language");
    if (lang) i18n.changeLanguage(lang);
  }, [i18n]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selected-language", lang);
  };

  if (!ready) return "...";

  return (
    <div>
      <CookiesConsent />
      <Header locale={locale} />
      <MainContent
        locale={locale}
        handleLanguageChange={handleLanguageChange}
      />
      <ScrollTopButton />
    </div>
  );
}

export default Resume;
