import { TFunction } from "i18next";
const ExperienceSection = ({ locale }: { locale: TFunction<"global"> }) => {
  const experiences: Array<string> = Object.keys(
    locale("experience", { returnObjects: true })
  );
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">{locale("section.experience")}</h2>

      <div className="experience__container bd-grid">
        <div className="experience__data bd-grid">
          {experiences.map((item, i) => {
            return (
              <div className="experience__content" key={i}>
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>

                <div className="experience__data bd-grid">
                  <h3 className="experience__title">
                    {locale(`experience.${item}.role`)}
                  </h3>
                  <span className="experience__company">
                    {locale(`experience.${item}.date`)} |{" "}
                    {locale(`experience.${item}.company`)}
                  </span>
                  <div className="experience__description">
                    <ul className="experience__data">
                      {locale(`experience.${item}.description`)
                        .split("|")
                        .map((item, i) => {
                          return (
                            <li className="experience__item" key={i}>
                              <span className="experience__circle"></span>
                              {item}
                            </li>
                          );
                        })}
                    </ul>
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
