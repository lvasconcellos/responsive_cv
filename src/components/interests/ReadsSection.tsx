import { TFunction } from "i18next";

interface ReadsSectionProps {
  locale: TFunction<"global">;
  handleToggleSection: (section: string) => void;
}

const ReadsSection: React.FC<ReadsSectionProps> = ({
  locale,
  handleToggleSection,
}) => {
  const reads: Array<string> = Object.keys(
    locale("reads", { returnObjects: true })
  );
  return (
    <section className="reads section masonry-section" id="reads">
      <h2 className="section-title">{locale("section.reads")}</h2>
      <i
        className="bx bx-left-arrow-alt reads__icon--close"
        onClick={() => handleToggleSection("")}
      ></i>

      <div className="masonry__container-small">
        {reads.map((read, i) => {
          return (
            <article className="masonry__content" key={i}>
              <div className="masonry__item">
                <img src={locale(`reads.${read}.photo`)} alt={read} />
              </div>
              <div className="reads__data">
                <h2 className="reads__title">{locale(`reads.${read}.name`)}</h2>
                <span className="reads__description">
                  {locale(`reads.${read}.description`)}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default ReadsSection;
