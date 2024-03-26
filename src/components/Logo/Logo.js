import React from 'react';
import { ReactComponent as IconLogo } from './../../Icons/icon-logo.svg';
// import './Logo.scss';

const Logo = () => {
  return (
    <>
      <a className="menu__logo" href="/">
        <IconLogo />
      </a>
    </>
  );
};

export default Logo;
