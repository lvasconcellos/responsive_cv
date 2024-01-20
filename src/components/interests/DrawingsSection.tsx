import { TFunction } from "i18next";

interface DrawingsSectionProps {
  locale: TFunction<"global">;
  handleToggleSection: (section: string) => void;
}

const DrawingsSection: React.FC<DrawingsSectionProps> = ({
  locale,
  handleToggleSection,
}) => {
  const drawings: Array<string> = Object.keys(
    locale("drawings", { returnObjects: true })
  );

  return (
    <section className="drawings section masonry-section" id="drawings">
      <h2 className="section-title">{locale("section.drawings")}</h2>
      <i
        className="bx bx-left-arrow-alt drawings__icon--close"
        onClick={() => handleToggleSection("")}
      ></i>

      <div className="masonry__container-small">
        {drawings.map((drawing, i) => {
          return (
            <div className="drawings__content" key={i}>
              <div className="masonry__item">
                <img src={locale(`drawings.${drawing}.photo`)} alt={drawing} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default DrawingsSection;
