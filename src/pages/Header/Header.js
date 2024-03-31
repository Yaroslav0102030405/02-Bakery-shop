import React, { useState } from 'react';
import Logo from './../../components/Logo/Logo';
import menujsons from './../../datajson/menu.json';
import Menu from './../../components/Menu/Menu';
import MobileMenu from './../../components/MobalMenu/MobalMenu';
import { ReactComponent as IconBurger } from './../../Icons/icon-burger.svg';
import './Header.scss';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Logo />
            <nav className="header__nav">
              <Menu props={menujsons} />
            </nav>

            <button
              onClick={() => setMenuActive(true)}
              className="header__burger menu-btn-open js-open-modal"
              type="button"
            >
              <IconBurger />
            </button>

            <MobileMenu active={menuActive} setMenuActive={setMenuActive} />
            {/* <button
                className="mobile-menu__btn-close menu-btn-close js-close-modal"
                type="button"
                onClick={() => setMenuActive(false)}
              >
                <IconClose />
              </button>
              <Logo />
              <ul className="mobile">
                <li>
                  <a
                    className="mobile__link"
                    href="#traditions"
                    onClick={() => setMenuActive(false)}
                  >
                    Наші традиції
                  </a>
                </li>
                <li>
                  <a
                    className="mobile__link"
                    href="#chefs"
                    onClick={() => setMenuActive(false)}
                  >
                    Шеф-кухарі
                  </a>
                </li>
                <li>
                  <a
                    className="mobile__link"
                    href="#formats"
                    onClick={() => setMenuActive(false)}
                  >
                    Формати
                  </a>
                </li>
                <li>
                  <a
                    className="mobile__link"
                    href="#contact"
                    onClick={() => setMenuActive(false)}
                  >
                    Контакти
                  </a>
                </li>
              </ul> */}
            {/* </MobileMenu> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
