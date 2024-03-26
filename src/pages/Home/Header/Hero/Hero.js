import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">
          <span className="accent">Сучасна</span> пекарня
        </h1>
        <button className="hero__button" type="button">
          Замовити дзвінок
        </button>
      </section>
    </>
  );
};

export default Hero;
