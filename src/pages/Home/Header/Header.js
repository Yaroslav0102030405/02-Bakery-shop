import React from 'react';
import Logo from './../../../components/Logo/Logo';
import menujsons from './../../../datajson/menu.json';
import Menu from '../../../components/Menu/Menu';

import './Header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Logo />
            <nav className="header__nav">
              <Menu props={menujsons} />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
