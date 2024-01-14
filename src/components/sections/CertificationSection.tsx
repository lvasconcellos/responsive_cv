import { TFunction } from "i18next";

const CertificationSection = ({ locale }: { locale: TFunction<"global"> }) => {
  const certifications: Array<string> = Object.keys(
    locale("certification", { returnObjects: true })
  );

  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title">{locale("section.certification")}</h2>
      <div className="certificates__container bd-grid">
        {certifications.map((item, i) => {
          return (
            <div className="certificates__content" key={i}>
              <h3 className="certificates__title">
                {locale(`certification.${item}.course`)},{" "}
                {locale(`certification.${item}.date`)}
              </h3>
              <p className="certificates__description">
                {locale(`certification.${item}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CertificationSection;
