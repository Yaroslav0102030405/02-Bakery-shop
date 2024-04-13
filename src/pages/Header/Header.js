import React, { useState } from 'react';
import Logo from './../../components/Logo/Logo';
import menujsons from './../../datajson/menu.json';
import Menu from './../../components/Menu/Menu';
import MobileMenu from './../../components/MobalMenu/MobalMenu';
import { ReactComponent as IconBurger } from './../../Icons/icon-burger.svg';
// import './Header.scss'
import styled from 'styled-components';

const Desktop = '1280px';

const HeaderTag = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 16px;

  @media screen and (min-width: ${Desktop}) {
    padding-top: 32px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const HeaderBurger = styled.button`
  margin: 0;
  background-color: transparent;
  border: none;
  padding: 0;

  @media screen and (min-width: ${Desktop}) {
    display: none;
  }
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <HeaderTag className="header">
        <div className="container">
          <HeaderContainer>
            <Logo />
            <HeaderNav aria-label="main navigation">
              <Menu props={menujsons} />
            </HeaderNav>

            <HeaderBurger onClick={() => setMenuActive(true)} type="button">
              <IconBurger />
            </HeaderBurger>

            <MobileMenu active={menuActive} setMenuActive={setMenuActive} />
          </HeaderContainer>
        </div>
      </HeaderTag>
    </>
  );
};

export default Header;
