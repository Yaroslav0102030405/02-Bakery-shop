import React from 'react';

const Menu = ({ props }) => {
  return (
    <>
      {/* <ul className="header__list">
        {props.map(({ id, link }) => (
          <li key={id}>
            <a className="link" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul> */}
      <ul className="header__list">
        <li>
          <a className="link" href="#traditions">
            Наші традиції
          </a>
        </li>
        <li>
          <a className="link" href="#chefs">
            Шеф-кухарі
          </a>
        </li>
        <li>
          <a className="link" href="#formats">
            Формати
          </a>
        </li>
        <li>
          <a className="link" href="#contact">
            Контакти
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
