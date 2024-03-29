import React from 'react';
import './mobile-menu.scss';
import { ReactComponent as IconClose } from './../../Icons/icon-close.svg';
import Logo from '../Logo/Logo';
import MobileImage from './../../images/mbadvn.png';

const MobileMenu = ({ active, setMenuActive }) => {
  return (
    <>
      <div
        className={active ? 'menu active' : 'menu'}
        onClick={() => setMenuActive(false)}
      >
        <div
          className={active ? 'menu__content active' : 'menu__content'}
          onClick={e => e.stopPropagation()}
        >
          {/* {children} */}
          <button
            // onClick={() => setActive(false)}
            className="mobile-menu__btn-close menu-btn-close js-close-modal"
            type="button"
            // onClick={() => setActive(false)}
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
                // onClick={() => setActive(true)}
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
          </ul>
          <img className="mobile__image" src={MobileImage} />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
