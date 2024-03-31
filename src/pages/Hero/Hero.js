import React from 'react';
import './hero.scss';
import Button from './../../components/Button/Button';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">
          <span className="accent">Сучасна</span> пекарня
        </h1>
        <Button />
      </section>
    </>
  );
};

export default Hero;
