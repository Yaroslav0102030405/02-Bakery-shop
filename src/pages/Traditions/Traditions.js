import React from 'react';
// import './traditions.scss';

import ImageMan from './../../images/baker-man.jpg';
// import ImageMan1 from './../../../images/baker-man@1x.jpg';
import styled from 'styled-components';

const SectionTraditions = styled.section`
  padding-top: 24px;

  @media screen and (min-width: 1280px) {
    padding-top: 96px;
  }
`;

const TraditionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: flex-start;
`;

const TContent = styled.div`
  max-width: 710px;
`;

const Ttitle = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    margin-bottom: 42px;
  }
`;

const Timage = styled.img`
  display: none;
  border-radius: 400px 400px 0px 0px;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const TtextUperCase = styled.span`
  text-transform: uppercase;
  color: #819b57;
  font-weight: 600;
`;

const Ttext = styled.p`
  max-width: 640px;
`;

const Ttext2 = styled.p`
  max-width: 336px;
`;

const Tbrand = styled.span`
  color: #819b57;
  font-weight: 600;
`;

const Traditions = () => {
  return (
    <>
      <SectionTraditions className="traditions section" id="traditions">
        <div className="container">
          <TraditionsContainer>
            <TContent>
              <Ttitle className="traditions__title section__title">
                Новий формат традицій
              </Ttitle>
              <Ttext>
                <TtextUperCase>shop bakery</TtextUperCase>— це пекарня, яка
                взяла все найкраще, і зберегла смак традиційної випічки та
                натуральність інгредієнтів.
              </Ttext>
              <Ttext2>
                Ми працюємо як найвідоміші мережі —
                <Tbrand>5 хвилин і замовлення готове</Tbrand>. А ще у наших
                пекарень стильний дизайн та висока якість обслуговування!
              </Ttext2>
            </TContent>
            <Timage srcSet={ImageMan} alt="Чоловік пекарь дивится на хліб" />
          </TraditionsContainer>
        </div>
      </SectionTraditions>
    </>
  );
};

export default Traditions;
