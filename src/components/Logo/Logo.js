import React from 'react';
import { ReactComponent as IconLogo } from './../../Icons/icon-logo.svg';
// import './Logo.scss';

const Logo = () => {
  return (
    <>
      <a href="/" aria-label="logo">
        <IconLogo />
      </a>
    </>
  );
};

export default Logo;
