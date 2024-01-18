import { TFunction } from "i18next";
import profileImg from "../../assets/img/profile.png";
import { useEffect, useState } from "react";

interface ProfileSectionProps {
  locale: TFunction<"global">;
  handleLanguageChange: (lang: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  locale,
  handleLanguageChange,
}) => {
  const [theme, setTheme] = useState<string>(() => {
    const selectedTheme = localStorage.getItem("selected-theme");
    return selectedTheme || "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  const handleDownloadPDF = () => {
    import(`../../assets/pdf/${locale("lng")}/lvasconcellosCV.pdf`).then(
      (pdf) => {
        const link = document.createElement("a");
        link.download = "lvasconcellos - CV";
        link.href = pdf.default;
        link.click();
      }
    );
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="profile__container">
        <img src={profileImg} alt="profile pic" className="profile__img" />
      </div>

      <section className="home" id="home">
        <div className="home__container">
          <div className="home__button">
            <div
              className="home__item locale-button"
              onClick={() => handleLanguageChange("enUS")}
            >
              EN
            </div>
            <div
              className="home__item locale-button"
              onClick={() => handleLanguageChange("ptBR")}
            >
              BR
            </div>

            <div
              className="home__item pdf-button"
              title="Download PDF"
              id="resume-button"
              onClick={() => handleDownloadPDF()}
            >
              <i className="bx bx-download"></i>
            </div>

            <div
              className="home__item theme-button"
              onClick={() => handleThemeChange()}
            >
              <i
                className={`bx bx-${theme === "dark" ? "sun" : "moon"}`}
                title="Theme"
                id="theme-toggle"
              ></i>
            </div>
          </div>
          <div className="home__data bd-grid">
            <h1 className="home__title">{locale("profile.name")}</h1>
            <h3 className="home__profession">{locale("profile.profession")}</h3>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleDownloadPDF()}
                className="home__button-mobile"
              >
                Download
              </a>
            </div>

            <div className="home__address bd-grid">
              <span className="home__information">
                <i
                  className={locale(`profile.location_icon`) + " home__icon"}
                ></i>{" "}
                {locale("profile.location")}
              </span>
              <span className="home__information">
                <i className={locale(`profile.email_icon`) + " home__icon"}></i>{" "}
                {locale("profile.email")}
              </span>
              <span className="home__information">
                <i className={locale(`profile.phone_icon`) + " home__icon"}></i>{" "}
                {locale("profile.phone")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="social section">
        <h2 className="section-title">{locale("section.social")}</h2>

        <div className="social__container bd-grid">
          <a href={locale("social.0.url")} className="social__link">
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

      <section className="profile section" id="profile">
        <h2 className="section-title"> {locale("section.profile")}</h2>
        {locale("profile.summary")
          .split("|")
          .map((item, i) => {
            return (
              <p className="profile__description my-3" key={i}>
                {item}
              </p>
            );
          })}
      </section>
    </>
  );
};

export default ProfileSection;
