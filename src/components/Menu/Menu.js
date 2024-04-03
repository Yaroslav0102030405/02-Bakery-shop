import React from 'react';
import styled from 'styled-components';

const Desktop = '1280px';

const List = styled.ul`
  display: none;
  @media screen and (min-width: ${Desktop}) {
    display: flex;
    flex-grow: 1;
    justify-content: end;
    gap: 64px;
  }
`;

const Link = styled.a`
  color: var(--color-primary-light);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #819b57;
  }
`;

const Menu = ({ props }) => {
  return (
    <>
      <List>
        <li>
          <Link href="#traditions">Наші традиції</Link>
        </li>
        <li>
          <Link href="#chefs">Шеф-кухарі</Link>
        </li>
        <li>
          <Link href="#formats">Формати</Link>
        </li>
        <li>
          <Link href="#contact">Контакти</Link>
        </li>
      </List>
    </>
  );
};

export default Menu;
