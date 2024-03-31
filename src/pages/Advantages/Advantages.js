import React from 'react';
import './advantages.scss';
import ribbonjson from './../../datajson/Ribbon.json';
import Ribbon from './../../components/Ribbon/Ribbon';

const Advantages = () => {
  return (
    <>
      <section className="advantages">
        <div className="container">
          <h2 className="visually-hidden">Наші переваги</h2>
          <Ribbon props={ribbonjson} />
        </div>
      </section>
    </>
  );
};

export default Advantages;
