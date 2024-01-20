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
            <div className="masonry__content" key={i}>
              <div className="masonry__item">
                <img src={locale(`pets.${pet}.photo`)} alt={pet} />
              </div>
              <div className="pets__data">
                <h3 className="pets__name">{locale(`pets.${pet}.name`)}</h3>
                <p className="pets__detail">
                  {locale(`pets.${pet}.description`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default PetsSection;
