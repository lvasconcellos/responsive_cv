import { TFunction } from "i18next";

interface SkillsSectionProps {
  locale: TFunction<"global">;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ locale }) => {
  const skills: Array<string> = Object.keys(
    locale("skills", { returnObjects: true })
  );

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">{locale("section.skills")}</h2>
      <div className="skills__container bd-grid">
        <ul className="skills__data">
          {skills.map((skill, i) => {
            return (
              <li className="skills__name" key={i}>
                <span className="skills__circle"></span>
                {locale(`skills.${skill}.group`)}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;
