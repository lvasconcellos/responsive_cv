import ProfileSection from "./sections/ProfileSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import CertificationSection from "./sections/CertificationSection";
import ExtraSections from "./sections/ExtraSections";
import { TFunction } from "i18next";

interface MainContentProps {
  locale: TFunction<"global">;
  handleLanguageChange: (lang: string) => void;
  handleToggleSection: (section: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  locale,
  handleLanguageChange,
  handleToggleSection,
}) => {
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
          <ExtraSections
            locale={locale}
            handleToggleSection={handleToggleSection}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
