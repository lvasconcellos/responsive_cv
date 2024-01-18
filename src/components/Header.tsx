import { TFunction } from "i18next";
import React, { useState } from "react";

interface HeaderProps {
  locale: TFunction<"global">;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const menu = Object.keys(locale("menu", { returnObjects: true }));
  const [activeLink, setActiveLink] = useState(0);

  const handleNavItemClick = (index: number) => {
    setActiveLink(index);
  };

  const handleShowMenu = (toggleId: string, menuClass: string) => {
    document.getElementById(toggleId)?.classList.toggle(menuClass);
  };

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="!#" className="nav__logo">
          Leticia
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {menu.map((item, index) => (
              <li className="nav__item" key={index}>
                <a
                  href={`#${locale(`menu.${item}.id`)}`}
                  className={`nav__link ${
                    index === activeLink ? "active-link" : ""
                  }`}
                  onClick={() => handleNavItemClick(index)}
                >
                  <i className={locale(`menu.${item}.icon`)}></i>{" "}
                  {locale(`menu.${item}.item`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="nav__toggle"
          onClick={() => handleShowMenu("nav-menu", "show-menu")}
        >
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
