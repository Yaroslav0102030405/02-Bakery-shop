import React from 'react';
import './_formats.scss';
// import './_carousel.scss';
// import './_pagination.scss';
import Carusel from '../../components/Carusel/Carusel';
// import caruseljson from './../../datajson/carusel.json';

const Formats = () => {
  return (
    <>
      <section className="section formats" id="formats">
        <div className="container">
          <h2 className="section__title formats__title section__title--centered">
            Формати
          </h2>
          <Carusel />
        </div>
      </section>
    </>
  );
};

export default Formats;
