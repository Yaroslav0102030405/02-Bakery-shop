import React from 'react';
// import './hero.scss';
import styled from 'styled-components';
import Button from './../../components/Button/Button';

import ImageBackgroundMobile from '../../images/hero-background-mobile.jpg';
import ImageBackround from '../../images/hero-background.jpg';

const SectionHero = styled.section`
  background-image: linear-gradient(
      103deg,
      rgba(18, 18, 17, 0.78) 2.03%,
      rgba(18, 18, 17, 0.6) 58.46%,
      rgba(18, 18, 17, 0) 90.36%
    ),
    url(${ImageBackgroundMobile});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  /* Дєкоративний ефект */
  background-attachment: fixed;
  padding: 122px 0;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        103deg,
        rgba(18, 18, 17, 0.78) 2.03%,
        rgba(18, 18, 17, 0.6) 58.46%,
        rgba(18, 18, 17, 0) 90.36%
      ),
      url(${ImageBackround});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    /* Дєкоративний ефект */
    background-attachment: fixed;
    padding: 122px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 272px 0;
  }
`;

const Title = styled.h1`
  margin-bottom: 48px;
  color: #faf4ea;
  text-align: center;
  font-size: 67px;
  line-height: 1;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 128px;
    line-height: 1.5;
    font-weight: 900;
  }
`;

const HeroSpan = styled.span`
  color: #819b57;
`;
const Hero = () => {
  return (
    <>
      <SectionHero>
        <Title>
          <HeroSpan>Сучасна</HeroSpan> пекарня
        </Title>
        <Button />
      </SectionHero>
    </>
  );
};

export default Hero;
