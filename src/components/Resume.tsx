import { useTranslation } from "react-i18next";
import profileImg from "../assets/img/profile.png";

function Resume() {
  const [locale, i18n] = useTranslation("global", { useSuspense: false });
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleDownloadPDF = () => {
    import(`../assets/pdf/${locale("lng")}/lvasconcellosCV.pdf`).then((pdf) => {
      const link = document.createElement("a");
      link.download = "lvasconcellosCV";
      link.href = pdf.default;
      link.click();
    });
  };

  const handleThemeChange = () => {
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      document.getElementById("theme-button")?.classList.contains(iconTheme)
        ? "bx-moon"
        : "bx-sun";

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      document
        .getElementById("theme-button")
        ?.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
    }

    document.body.classList.toggle(darkTheme);
    document.getElementById("theme-button")?.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  return (
    <div>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="!#" className="nav__logo">
            Leticia
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="bx bx-door-open"></i>Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#profile" className="nav__link">
                  <i className="bx bx-user-pin"></i>Profile
                </a>
              </li>

              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <i className="bx bxs-book-open"></i>Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="bx bx-receipt"></i>Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  <i className="bx bx-desktop"></i>Experience
                </a>
              </li>

              <li className="nav__item">
                <a href="#certificates" className="nav__link">
                  <i className="bx bx-award"></i>Certificates
                </a>
              </li>

              <li className="nav__item">
                <a href="#references" className="nav__link">
                  <i className="bx bx-link-external"></i>Reference
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>
      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <div className="profile__container">
              <img
                src={profileImg}
                alt="profile pic"
                className="profile__img"
              />
            </div>

            <section className="home" id="home">
              <div className="home__container">
                <div className="home__button">
                  <div
                    className="home__item enUS"
                    onClick={() => handleLanguageChange("enUS")}
                  >
                    EN
                  </div>
                  <div
                    className="home__item ptBR"
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
                    className="home__item change-theme"
                    onClick={() => handleThemeChange()}
                  >
                    <i
                      className="bx bx-moon change-theme"
                      title="Theme"
                      id="theme-button"
                    ></i>
                  </div>
                </div>
                <div className="home__data bd-grid">
                  <h1 className="home__title">
                    LETICIA <b>VASCONCELLOS</b>
                  </h1>
                  <h3 className="home__profession">
                    {locale("profile.profession")}
                  </h3>

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
                      <i className="bx bxs-map-pin home__icon"></i>
                      {locale("profile.location")}
                    </span>
                    <span className="home__information">
                      <i className="bx bx-envelope home__icon"></i>{" "}
                      leticiavasconcellos@yahoo.com
                    </span>
                    <span className="home__information">
                      <i className="bx bx-phone home__icon"></i>{" "}
                      {locale("profile.phone")}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="social section">
              <h2 className="section-title">{locale("section.social")}</h2>

              <div className="social__container bd-grid">
                <a
                  href="https://www.linkedin.com/in/leticiavasconcellos"
                  className="social__link"
                >
                  <i className="bx bxl-linkedin-square social__icon"></i>{" "}
                  @leticiavasconcellos
                </a>

                <a
                  href="https://github.com/lvasconcellos"
                  className="social__link"
                >
                  <i className="bx bxl-github social__icon"></i> @lvasconcellos
                </a>

                <a
                  href="https://discord.com/users/717408919714267199"
                  className="social__link"
                >
                  <i className="bx bxl-discord-alt social__icon"></i>{" "}
                  @lvasconcellos
                </a>
              </div>
            </section>

            <section className="profile section" id="profile">
              <h2 className="section-title"> {locale("section.profile")}</h2>

              <p className="profile__description my-3">
                {locale("profile.summary")}
              </p>
            </section>

            <section className="education section" id="education">
              <h2 className="section-title">{locale("section.education")}</h2>

              <div className="education__container bd-grid">
                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h2 className="education__title">
                      {locale("education.0.course")}
                    </h2>
                    <span className="education__studies">
                      {locale("education.0.institution")}
                    </span>
                    <span className="education__year">
                      {locale("education.0.date")}
                    </span>
                  </div>
                </div>

                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      {locale("education.1.course")}
                    </h3>
                    <span className="education__studies">
                      {locale("education.1.institution")}
                    </span>
                    <span className="education__year">
                      {locale("education.1.date")}
                    </span>
                  </div>
                </div>

                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      {locale("education.2.course")}
                    </h3>
                    <span className="education__studies">
                      {locale("education.2.institution")}
                    </span>
                    <span className="education__year">
                      {locale("education.2.date")}
                    </span>
                  </div>
                </div>

                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      {locale("education.3.course")}
                    </h3>
                    <span className="education__studies">
                      {locale("education.3.institution")}
                    </span>
                    <span className="education__year">
                      {locale("education.3.date")}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="skills section" id="skills">
              <h2 className="section-title">{locale("section.skills")}</h2>

              <div className="skills__container bd-grid">
                <ul className="skills__data">
                  <li className="skills__name">
                    <span className="skills__circle"></span> C#, VB.NET
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> ASP.NET Web API,
                    .NET Core
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> MS SQL, MySQL,
                    PostgreSQL, Oracle, MongoDB
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> JavaScript, JQuery,
                    TypeScript, Angular, React
                  </li>
                </ul>
                <ul className="skills__data">
                  <li className="skills__name">
                    <span className="skills__circle"></span> Unit Testing, CI/CD
                    (GitLab)
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> Agile Scrum, Kanban
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> Power BI, ETL
                    Integration
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="resume__right">
            <section className="experience section" id="experience">
              <h2 className="section-title">{locale("section.experience")}</h2>

              <div className="experience__container bd-grid">
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">
                      {locale("experience.0.role")}
                    </h3>
                    <span className="experience__company">
                      {locale("experience.0.date")} |{" "}
                      {locale("experience.0.company")}
                    </span>
                    <p className="experience__description">
                      {locale("experience.0.description")}
                    </p>
                  </div>
                </div>

                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">
                      {locale("experience.1.role")}
                    </h3>
                    <span className="experience__company">
                      {locale("experience.1.date")} |{" "}
                      {locale("experience.1.company")}
                    </span>
                    <p className="experience__description">
                      {locale("experience.1.description")}
                    </p>
                  </div>
                </div>

                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">
                      {locale("experience.2.role")}
                    </h3>
                    <span className="experience__company">
                      {locale("experience.2.date")} |{" "}
                      {locale("experience.2.company")}
                    </span>
                    <p className="experience__description">
                      {locale("experience.2.description")}
                    </p>
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">
                      {locale("experience.3.role")}
                    </h3>
                    <span className="experience__company">
                      {locale("experience.3.date")} |{" "}
                      {locale("experience.3.company")}
                    </span>
                    <p className="experience__description">
                      {locale("experience.3.description")}
                    </p>
                  </div>
                </div>
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">
                      {locale("experience.4.role")}
                    </h3>
                    <span className="experience__company">
                      {locale("experience.4.date")} |{" "}
                      {locale("experience.4.company")}
                    </span>
                    <p className="experience__description">
                      {locale("experience.4.description")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="certificate section" id="certificates">
              <h2 className="section-title">
                {locale("section.certification")}
              </h2>

              <div className="certificates__container bd-grid">
                <div className="certificates__content">
                  <h3 className="certificates__title">
                    {locale("certification.0.course")},
                    {locale("certification.0.date")}
                  </h3>
                  <p className="certificates__description">
                    {locale("certification.0.description")}
                  </p>
                </div>
                <div className="certificates__content">
                  <h3 className="certificates__title">
                    {locale("certification.1.course")},{" "}
                    {locale("certification.1.date")}
                  </h3>
                  <p className="certificates__description">
                    {locale("certification.1.description")}
                  </p>
                </div>
                <div className="certificates__content">
                  <h3 className="certificates__title">
                    {locale("certification.2.course")},{" "}
                    {locale("certification.2.date")}
                  </h3>
                  <p className="certificates__description">
                    {locale("certification.2.description")}
                  </p>
                </div>
                <div className="certificates__content">
                  <h3 className="certificates__title">
                    {locale("certification.3.course")},{" "}
                    {locale("certification.3.date")}
                  </h3>
                  <p className="certificates__description">
                    {locale("certification.3.description")}
                  </p>
                </div>
                <div className="certificates__content">
                  <h3 className="certificates__title">
                    {locale("certification.4.course")},{" "}
                    {locale("certification.4.date")}
                  </h3>
                  <p className="certificates__description">
                    {locale("certification.4.description")}
                  </p>
                </div>
                <div className="certificates__content">
                  <h3 className="certificates__title">
                    {locale("certification.5.course")},{" "}
                    {locale("certification.5.date")}
                  </h3>
                  <p className="certificates__description">
                    {locale("certification.5.description")}
                  </p>
                </div>
              </div>
            </section>

            <section className="references section" id="references">
              <h2 className="section-title">{locale("section.reference")}</h2>

              <div className="references__container bd-grid">
                <div className="references__content bd-grid">
                  <span className="references__subtitle">
                    {locale("reference.0.company")}
                  </span>
                  <h3 className="references__title">
                    {locale("reference.0.name")}
                  </h3>
                  <ul className="references__contact">
                    <li>
                      <i className="bx bx-phone references__icon"></i>{" "}
                      {locale("reference.0.phone")}
                    </li>
                    <li>
                      <i className="bx bx-envelope references__icon"></i>{" "}
                      {locale("reference.0.email")}
                    </li>
                  </ul>
                </div>

                <div className="references__content bd-grid">
                  <div className="references__content bd-grid">
                    <span className="references__subtitle">
                      {locale("reference.1.company")}
                    </span>
                    <h3 className="references__title">
                      {locale("reference.1.name")}
                    </h3>

                    <ul className="references__contact">
                      <li>
                        <i className="bx bx-phone references__icon"></i>{" "}
                        {locale("reference.1.phone")}
                      </li>
                      <li>
                        <i className="bx bx-envelope references__icon"></i>{" "}
                        {locale("reference.1.email")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="languages section">
              <h2 className="section-title">{locale("section.language")}</h2>

              <div className="languages__container bd-grid">
                <ul className="languages__data">
                  <li className="languages__name">
                    <span className="languages__circle"></span>{" "}
                    {locale("languages.0.language")} -{" "}
                    {locale("languages.0.level")}
                  </li>
                  <li className="languages__name">
                    <span className="languages__circle"></span>{" "}
                    {locale("languages.1.language")} -{" "}
                    {locale("languages.1.level")}
                  </li>
                </ul>
              </div>
            </section>

            <section className="interests section">
              <h2 className="section-title">{locale("section.interest")}</h2>

              <div className="interests__container bd-grid">
                <div className="interests__content">
                  <i className="bx bxs-cat interests__icon"></i>
                  <span className="interests__name">
                    {locale("interests.0.interest")}
                  </span>
                </div>
                <div className="interests__content">
                  <i className="bx bxs-book interests__icon"></i>
                  <span className="interests__name">
                    {locale("interests.1.interest")}
                  </span>
                </div>
                <div className="interests__content">
                  <i className="bx bxs-paint interests__icon"></i>
                  <span className="interests__name">
                    {locale("interests.2.interest")}
                  </span>
                </div>
                <div className="interests__content">
                  <i className="bx bxs-music interests__icon"></i>
                  <span className="interests__name">
                    {locale("interests.3.interest")}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
