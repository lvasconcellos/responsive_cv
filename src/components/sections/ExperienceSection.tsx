import { TFunction } from "i18next";

interface ExperienceSectionProps {
  locale: TFunction<"global">;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ locale }) => {
  const experiences: string[] = Object.keys(
    locale("experience", { returnObjects: true })
  );

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">{locale("section.experience")}</h2>

      <div className="experience__container bd-grid">
        <div className="experience__data bd-grid">
          {experiences.map((item, index) => {
            const role = locale(`experience.${item}.role`);
            const date = locale(`experience.${item}.date`);
            const company = locale(`experience.${item}.company`);
            const description = locale(`experience.${item}.description`)
              .split("|")
              .map((details, i) => (
                <li className="experience__item" key={i}>
                  <span className="experience__circle"></span>
                  {details}
                </li>
              ));

            return (
              <div className="experience__content" key={index}>
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>

                <div className="experience__data bd-grid">
                  <h3 className="experience__title">{role}</h3>
                  <span className="experience__company">
                    {date} | {company}
                  </span>
                  <div className="experience__description">
                    <ul className="experience__data">{description}</ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
