import { TFunction } from "i18next";

const SkillsSection = ({ locale }: { locale: TFunction<"global"> }) => {
  const skills: Array<string> = Object.keys(
    locale("skills", { returnObjects: true })
  );

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">{locale("section.skills")}</h2>
      <div className="skills__container bd-grid">
        <ul className="skills__data">
          {skills.map((item, i) => {
            return (
              <li className="skills__name" key={i}>
                <span className="skills__circle"></span>
                {locale(`skills.${item}.group`)}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default SkillsSection;
