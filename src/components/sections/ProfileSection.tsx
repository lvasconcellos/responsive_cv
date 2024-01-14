import { TFunction } from "i18next";
import profileImg from "../../assets/img/profile.png";

const ProfileSection = ({
  locale,
  handleLanguageChange,
}: {
  locale: TFunction<"global">;
  handleLanguageChange: (lang: string) => void;
}) => {
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
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      document.getElementById("theme-toogle")?.classList.contains(iconTheme)
        ? "bx-moon"
        : "bx-sun";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      document
        .getElementById("theme-toogle")
        ?.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
    }

    document.body.classList.toggle(darkTheme);
    document.getElementById("theme-toogle")?.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
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
              className="home__item enUS-button"
              onClick={() => handleLanguageChange("enUS")}
            >
              EN
            </div>
            <div
              className="home__item ptBR-button"
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
              <i className="bx bx-moon" title="Theme" id="theme-toogle"></i>
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
