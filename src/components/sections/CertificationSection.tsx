import { TFunction } from "i18next";

interface CertificationSectionProps {
  locale: TFunction<"global">;
}

const CertificationSection: React.FC<CertificationSectionProps> = ({
  locale,
}) => {
  const certifications: string[] = Object.keys(
    locale("certification", { returnObjects: true })
  );

  return (
    <section className="certificate section" id="certification">
      <h2 className="section-title">{locale("section.certification")}</h2>
      <div className="certificates__container bd-grid">
        {certifications.map((certification, index) => (
          <div className="certificates__content" key={index}>
            <h3 className="certificates__title">
              {locale(`certification.${certification}.course`)},{" "}
              {locale(`certification.${certification}.date`)}
            </h3>
            <p className="certificates__description">
              {locale(`certification.${certification}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
