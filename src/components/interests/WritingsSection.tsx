import { TFunction } from "i18next";

interface WritingsSectionProps {
  locale: TFunction<"global">;
  handleToggleSection: (section: string) => void;
}

const WritingsSection: React.FC<WritingsSectionProps> = ({
  locale,
  handleToggleSection,
}) => {
  const writings: Array<string> = Object.keys(
    locale("writings", { returnObjects: true })
  );

  return (
    <section className="writings section masonry-section" id="writings">
      <h2 className="section-title">{locale("section.writings")}</h2>
      <i
        className="bx bx-left-arrow-alt writings__icon--close"
        onClick={() => handleToggleSection("")}
      ></i>

      <div className="masonry__container-large ">
        {writings.map((writing, i) => {
          const lines = locale(`writings.${writing}.description`)
            .split("|")
            .map((line, i) => (
              <p className="writings__lines" key={i}>
                {line}
              </p>
            ));
          return (
            <div className="writings__content container" key={i}>
              {/* <div className="writings__item">
                <img src={locale(`writings.${writing}.photo`)} alt={writing} />
              </div> */}
              <div className="writings__paper notepad">
                <div className="writings__lines">
                  <div className="writings__text paper">
                    <h2 className="writings__name">
                      {locale(`writings.${writing}.name`)}
                    </h2>
                    <div className="writings__detail">{lines}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default WritingsSection;
