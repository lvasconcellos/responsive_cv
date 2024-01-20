import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import MainContent from "./MainContent";
import ScrollTopButton from "./ScrollTopButton";
import CookiesConsent from "./CookiesConsent";
import PetsSection from "./interests/PetsSection";
import ReadsSection from "./interests/ReadsSection";
import WritingsSection from "./interests/WritingsSection";
import DrawingsSection from "./interests/DrawingsSection";

function Resume() {
  const [locale, i18n, ready] = useTranslation("global", {
    useSuspense: false,
  });
  const [showSection, setShowSection] = useState("");
  const ConsentMode = JSON.parse(localStorage.getItem("consentMode") || "{}");

  const handleScroll = () => {
    const scrollTop = document.getElementById("scroll-top");
    if (scrollY >= 560) scrollTop?.classList.add("show-scroll");
    else scrollTop?.classList.remove("show-scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
    if (ConsentMode.personalization === "granted") {
      localStorage.setItem("selected-language", selectedLanguage);
    }
  };

  const toggleSection = (section: string) => {
    if (showSection === section) {
      setShowSection("");
    } else {
      setShowSection(section);
    }
  };

  if (!ready) {
    return (
      <div className="lds-ellipsis">
        {[...Array(4)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }

  const sectionProps = {
    locale,
    handleToggleSection: toggleSection,
  };

  switch (showSection) {
    case "pets-section":
      return <PetsSection key="pets-section" {...sectionProps} />;
    case "reads-section":
      return <ReadsSection key="reads-section" {...sectionProps} />;
    case "writings-section":
      return <WritingsSection key="writings-section" {...sectionProps} />;
    case "drawings-section":
      return <DrawingsSection key="drawings-section" {...sectionProps} />;
    default:
      return (
        <div>
          <CookiesConsent key="cookies-consent" />
          <Header key="header" locale={locale} />
          {showSection === "pets-section" ? (
            <PetsSection {...sectionProps} />
          ) : (
            <MainContent
              key="main-content"
              locale={locale}
              handleLanguageChange={handleLanguageChange}
              handleToggleSection={toggleSection}
            />
          )}
          <ScrollTopButton key="scroll-top-button" />
        </div>
      );
  }
}

export default Resume;
