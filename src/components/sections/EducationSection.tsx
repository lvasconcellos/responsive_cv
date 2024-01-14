import { TFunction } from "i18next";

const EducationSection = ({ locale }: { locale: TFunction<"global"> }) => {
  const details: Array<string> = Object.keys(
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

        {details.map((item, i) => {
          return (
            <div className="education__content" key={i}>
              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div className="education__data bd-grid">
                <h3 className="education__title">
                  {locale(`education.details.${item}.course`)}
                </h3>
                <span className="education__studies">
                  {locale(`education.details.${item}.studies`)}
                </span>
                <span className="education__year">
                  {locale(`education.details.${item}.date`)}
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
