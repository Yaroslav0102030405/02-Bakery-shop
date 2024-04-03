import React from 'react';
import './_formats.scss';
// import './_carousel.scss';
// import './_pagination.scss';
import Carusel from '../../components/Carusel/Carusel';
// import caruseljson from './../../datajson/carusel.json';
import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
    margin-bottom: 80px;
  }
`;

const Formats = () => {
  return (
    <>
      <section className="section formats" id="formats">
        <div className="container">
          <Title className="section__title section__title--centered">
            Формати
          </Title>
          <Carusel />
        </div>
      </section>
    </>
  );
};

export default Formats;
