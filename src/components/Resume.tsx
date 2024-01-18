import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import MainContent from "./MainContent";
import ScrollTopButton from "./ScrollTopButton";
import CookiesConsent from "./CookiesConsent";
import "../assets/css/style.css";

function Resume() {
  const [locale, i18n, ready] = useTranslation("global", {
    useSuspense: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.getElementById("scroll-top");
      if (scrollY >= 560) scrollTop?.classList.add("show-scroll");
      else scrollTop?.classList.remove("show-scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selected-language", lang);
  };

  if (!ready) {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div>
      <CookiesConsent key="cookies-consent" />
      <Header key="header" locale={locale} />
      <MainContent
        key="main-content"
        locale={locale}
        handleLanguageChange={handleLanguageChange}
      />
      <ScrollTopButton key="scroll-top-button" />
    </div>
  );
}

export default Resume;
