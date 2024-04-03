import React from 'react';
// import './advantages.scss';
import ribbonjson from './../../datajson/Ribbon.json';
import Ribbon from './../../components/Ribbon/Ribbon';

import styled from 'styled-components';

const Desktop = '1280px';

const SectionAdventures = styled.section`
  padding: 16px 0;

  @media screen and (min-width: ${Desktop}) {
    background-color: #819b57;
  }
`;

const Advantages = () => {
  return (
    <>
      <SectionAdventures>
        <div className="container">
          <h2 className="visually-hidden">Наші переваги</h2>
          <Ribbon props={ribbonjson} />
        </div>
      </SectionAdventures>
    </>
  );
};

export default Advantages;
