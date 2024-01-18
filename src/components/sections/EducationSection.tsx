import { TFunction } from "i18next";

interface EducationSectionProps {
  locale: TFunction<"global">;
}

const EducationSection: React.FC<EducationSectionProps> = ({ locale }) => {
  const educationDetails: string[] = Object.keys(
    locale("education.details", { returnObjects: true })
  );

  return (
    <section className="education section" id="education">
      <h2 className="section-title">{locale("section.education")}</h2>

      <div className="education__container bd-grid">
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>

          <div className="education__data bd-grid">
            <h2 className="education__title">{locale("education.course")}</h2>
            <span className="education__studies">
              {locale("education.institution")}
            </span>
            <span className="education__year">{locale("education.date")}</span>
          </div>
        </div>

        {educationDetails.map((detail, index) => {
          return (
            <div className="education__content" key={index}>
              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div className="education__data bd-grid">
                <h3 className="education__title">
                  {locale(`education.details.${detail}.course`)}
                </h3>
                <span className="education__studies">
                  {locale(`education.details.${detail}.studies`)}
                </span>
                <span className="education__year">
                  {locale(`education.details.${detail}.date`)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
