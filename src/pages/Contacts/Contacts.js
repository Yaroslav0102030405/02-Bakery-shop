import React from 'react';
import './contacts.scss';
import Form from '../../components/Form/Form';
import Map from '../../components/Map/Map';

const Contacts = () => {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="container">
          <div className="contact__container">
            <div className="contact__form">
              <Form />
            </div>
            <Map />
          </div>
        </div>
      </section>
      {/* <Form /> */}
    </>
  );
};

export default Contacts;
