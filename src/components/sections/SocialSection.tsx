import { TFunction } from "i18next";

interface SocialSectionProps {
  locale: TFunction<"global">;
}

const SocialSection: React.FC<SocialSectionProps> = ({ locale }) => {
  const socials: string[] = Object.keys(
    locale("social", { returnObjects: true })
  );
  return (
    <>
      <section className="social section">
        <h2 className="section-title">{locale("section.social")}</h2>

        <div className="social__container bd-grid">
          {socials.map((social, index) => (
            <a
              href={locale(`social.${social}.url`)}
              target="_blank"
              rel="noopener noreferrer"
              className="social__link"
              key={index}
              id={locale(`social.${social}.name`)}
              title={locale(`social.${social}.name`)}
            >
              <i
                className={locale(`social.${social}.icon`) + " social__icon"}
              ></i>
              {locale(`social.${social}.handler`)}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default SocialSection;
