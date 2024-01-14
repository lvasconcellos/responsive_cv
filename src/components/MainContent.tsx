import { useTranslation } from "react-i18next";
import ProfileSection from "./sections/ProfileSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificationSection from "./sections/CertificationSection";
import ExtraSections from "./sections/ExtraSections";

const MainContent = () => {
  const [locale, i18n, ready] = useTranslation("global", {
    useSuspense: false,
  });

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  if (!ready) return "...";
  return (
    <main className="l-main bd-container">
      <div className="resume" id="area-cv">
        <div className="resume__left">
          <ProfileSection
            locale={locale}
            handleLanguageChange={handleLanguageChange}
          />
          <EducationSection locale={locale} />
          <SkillsSection locale={locale} />
        </div>
        <div className="resume__right">
          <ExperienceSection locale={locale} />
          <CertificationSection locale={locale} />
          <ExtraSections locale={locale} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
