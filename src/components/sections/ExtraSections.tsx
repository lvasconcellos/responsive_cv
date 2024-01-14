import { TFunction } from "i18next";

const ExtraSections = ({ locale }: { locale: TFunction<"global"> }) => {
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
            {languages.map((item, i) => {
              return (
                <li className="languages__name" key={i}>
                  <span className="languages__circle"></span>{" "}
                  {locale(`languages.${item}.language`)} -{" "}
                  {locale(`languages.${item}.level`)}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="interests section" id="interests">
        <h2 className="section-title">{locale("section.interest")}</h2>

        <div className="interests__container bd-grid">
          {interests.map((item, i) => {
            return (
              <div className="interests__content" key={i}>
                <i
                  className={
                    locale(`interests.${item}.icon`) + " interests__icon"
                  }
                ></i>
                <span className="interests__name">
                  {locale(`interests.${item}.interest`)}
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
