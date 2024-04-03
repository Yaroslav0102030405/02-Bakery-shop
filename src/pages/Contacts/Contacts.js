import React from 'react';
// import './contacts.scss';
import Form from '../../components/Form/Form';
import Map from '../../components/Map/Map';

import styled from 'styled-components';

const ContactEl = styled.section`
  @media screen and (min-width: 768px) {
    padding-bottom: 96px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Contacts = () => {
  return (
    <>
      <ContactEl className="section contact" id="contact">
        <div className="container">
          <Container>
            <div className="contact__form">
              <Form />
            </div>
            <Map />
          </Container>
        </div>
      </ContactEl>
      {/* <Form /> */}
    </>
  );
};

export default Contacts;
