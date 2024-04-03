import React from 'react';
// import './contacts.scss';
import Form from '../../components/Form/Form';
import Map from '../../components/Map/Map';

import styled from 'styled-components';

const Tablet = '768px';

const ContactEl = styled.section`
  @media screen and (min-width: ${Tablet}) {
    padding-bottom: 96px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${Tablet}) {
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
