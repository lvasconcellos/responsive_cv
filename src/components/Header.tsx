const Header = () => {
  const handleShowMenu = (toggleId: string, navId: string) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  };
  return (
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

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => handleShowMenu("nav-toggle", "nav-menu")}
        >
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
