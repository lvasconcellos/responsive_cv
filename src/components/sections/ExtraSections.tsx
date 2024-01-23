import { TFunction } from "i18next";

interface ExtraSectionsProps {
  locale: TFunction<"global">;
  handleToggleSection: (section: string) => void;
}

const ExtraSections: React.FC<ExtraSectionsProps> = ({
  locale,
  handleToggleSection,
}) => {
  const languages: Array<string> = Object.keys(
    locale("languages", { returnObjects: true })
  );
  const interests: Array<string> = Object.keys(
    locale("interests", { returnObjects: true })
  );

  return (
    <>
      <section className="languages section" id="languages">
        <h2 className="section-title">{locale("section.language")}</h2>

        <div className="languages__container bd-grid">
          <ul className="languages__data">
            {languages.map((language, i) => {
              return (
                <li className="languages__name" key={i}>
                  <span className="languages__circle"></span>{" "}
                  {locale(`languages.${language}.language`)} -{" "}
                  {locale(`languages.${language}.level`)}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="interests section" id="interests">
        <h2 className="section-title">{locale("section.interest")}</h2>

        <div className="interests__container bd-grid">
          {interests.map((interest, i) => {
            let section = locale(`interests.${interest}.interest`);
            switch (locale(`interests.${interest}.interest`)) {
              case "Pets":
              case "Animais de Estimação":
                section = "pets-section";
                break;
              case "Books":
              case "Livros":
                section = "books-section";
                break;
              case "Writing":
              case "Escrever":
                section = "writings-section";
                break;
              case "Drawing":
              case "Desenhar":
                section = "drawings-section";
                break;
              default:
                break;
            }
            return (
              <div className="interests__content" key={i}>
                <i
                  className={
                    locale(`interests.${interest}.icon`) + " interests__icon"
                  }
                  id={section}
                  onClick={() => handleToggleSection(section)}
                ></i>
                <span className="interests__name">
                  {locale(`interests.${interest}.interest`)}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default ExtraSections;
