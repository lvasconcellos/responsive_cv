import { TFunction } from "i18next";

interface PetsSectionProps {
  locale: TFunction<"global">;
  handleToggleSection: (section: string) => void;
}

const PetsSection: React.FC<PetsSectionProps> = ({
  locale,
  handleToggleSection,
}) => {
  const pets: Array<string> = Object.keys(
    locale("pets", { returnObjects: true })
  );

  return (
    <section className="pets section masonry-section" id="pets">
      <h2 className="section-title">{locale("section.pets")}</h2>
      <i
        className="bx bx-left-arrow-alt pets__icon--close"
        onClick={() => handleToggleSection("")}
      ></i>

      <div className="masonry__container">
        {pets.map((pet, i) => {
          return (
            <article className="masonry__content" key={i}>
              <div className="masonry__item">
                <img src={locale(`pets.${pet}.photo`)} alt={pet} />
              </div>
              <div className="pets__data">
                <h2 className="pets__title">{locale(`pets.${pet}.name`)}</h2>
                <span className="pets__description">
                  {locale(`pets.${pet}.description`)}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default PetsSection;
