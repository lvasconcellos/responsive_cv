import { TFunction } from "i18next";
import { useEffect } from "react";

const Header = ({ locale }: { locale: TFunction<"global"> }) => {
  const menu: Array<string> = Object.keys(
    locale("menu", { returnObjects: true })
  );

  useEffect(() => {
    document.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        document
          .querySelectorAll(".nav__link")
          .forEach((element) => element.classList.remove("active-link"));

        link.classList.add("active-link");
        link.setAttribute("aria-current", "page");
      });
    });
  }, []);

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
            {menu.map((item, i) => {
              return (
                <li className="nav__item" key={i}>
                  <a
                    href={"#" + locale(`menu.${item}.id`)}
                    className={
                      item == "0" ? " nav__link active-link" : "nav__link"
                    }
                  >
                    <i className={locale(`menu.${item}.icon`)}></i>{" "}
                    {locale(`menu.${item}.item`)}
                  </a>
                </li>
              );
            })}
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
