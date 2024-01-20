import { TFunction } from "i18next";
import ReactGA from "react-ga";

interface SocialSectionProps {
  locale: TFunction<"global">;
}

const SocialSection: React.FC<SocialSectionProps> = ({ locale }) => {
  function handleClick(link: string) {
    ReactGA.event({
      category: "Button Click",
      action: `Clicked on ${link}`,
      label: "Social Page",
    });
  }

  return (
    <>
      <section className="social section">
        <h2 className="section-title">{locale("section.social")}</h2>

        <div className="social__container bd-grid">
          <a
            href={locale("social.0.url")}
            className="social__link"
            onClick={() => handleClick(locale("social.0.name"))}
          >
            <i className={locale("social.0.icon") + " social__icon"}></i>{" "}
            {locale("social.0.handler")}
          </a>

          <a href={locale("social.1.url")} className="social__link">
            <i className={locale("social.1.icon") + " social__icon"}></i>{" "}
            {locale("social.1.handler")}
          </a>

          <a href={locale("social.2.url")} className="social__link">
            <i className={locale("social.2.icon") + " social__icon"}></i>{" "}
            {locale("social.2.handler")}
          </a>
        </div>
      </section>
    </>
  );
};

export default SocialSection;
