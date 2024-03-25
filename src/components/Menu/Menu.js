import React from 'react';

const Menu = ({ props }) => {
  return (
    <>
      <ul className="header__list">
        {props.map(({ id, link }) => (
          <li key={id}>
            <a className="link" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
