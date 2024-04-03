import React from 'react';
import './mobile-menu.scss';
import { ReactComponent as IconClose } from './../../Icons/icon-close.svg';
import Logo from '../Logo/Logo';
import MobileImage from './../../images/mbadvn.png';

import styled from 'styled-components';

const MobileLink = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  color: #31261a;

  &:hover {
    color: #819b57;
  }
`;

const Image = styled.img`
  margin-top: 215px;
  margin-left: auto;
`;

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
              <MobileLink
                href="#traditions"
                onClick={() => setMenuActive(false)}
                // onClick={() => setActive(true)}
              >
                Наші традиції
              </MobileLink>
            </li>
            <li>
              <MobileLink href="#chefs" onClick={() => setMenuActive(false)}>
                Шеф-кухарі
              </MobileLink>
            </li>
            <li>
              <MobileLink href="#formats" onClick={() => setMenuActive(false)}>
                Формати
              </MobileLink>
            </li>
            <li>
              <MobileLink href="#contact" onClick={() => setMenuActive(false)}>
                Контакти
              </MobileLink>
            </li>
          </ul>
          <Image src={MobileImage} />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
