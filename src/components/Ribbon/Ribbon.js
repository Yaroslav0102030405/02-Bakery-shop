import React from 'react';
// import './ribbon.scss';

import styled from 'styled-components';

const Desktop = '1280px';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 40px;
  background-color: #cfcfbc;
  border-radius: 24px;

  @media screen and (min-width: ${Desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    background-color: transparent;
    color: #faf4ea;
    padding: 0;
  }
`;

const Item = styled.li`
  font-size: 14px;
  font-weight: 300;

  @media screen and (min-width: ${Desktop}) {
    font-size: 20px;
  }
`;

const Ribbon = ({ props }) => {
  return (
    <>
      <List>
        {props.map(({ title }) => (
          <Item key={title}>{title}</Item>
        ))}
      </List>
    </>
  );
};

export default Ribbon;
