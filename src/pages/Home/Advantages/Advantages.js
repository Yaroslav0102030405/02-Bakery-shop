import React from 'react';
import './advantages.scss';
import ribbonjson from './../../../datajson/Ribbon.json';
import Ribbon from '../../../components/Ribbon/Ribbon';

const Advantages = () => {
  return (
    <>
      <section class="advantages">
        <div class="container">
          <h2 class="visually-hidden">Наші переваги</h2>
          <Ribbon props={ribbonjson} />
        </div>
      </section>
    </>
  );
};

export default Advantages;
