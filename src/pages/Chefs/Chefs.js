import React from 'react';
import './_chefs.scss';
import ChefsMap from '../../components/ChefsMap/ChefsMap';
import chefsjsom from './../../datajson/chefs.json';

// import styled from 'styled-components';

const Chefs = () => {
  return (
    <>
      <section className="section chefs" id="chefs">
        <div className="container">
          <h2 className="section__title chefs__title section__title--centered">
            Наші найкращі <span>шеф -кухарі</span>
          </h2>
          <ChefsMap props={chefsjsom} />
        </div>
      </section>
    </>
  );
};

export default Chefs;
