import React from 'react';
import './footer.scss';
import Logo from '../../components/Logo/Logo';
import FooterBackround from '../../images/footer-background.png';
import ImageBread3 from '../../images/bread3.png';
import ImageBread1 from '../../images/bread1.png';
import ImageBread4 from '../../images/bread4.png';
import ImageBread2 from '../../images/bread2.png';

import styled from 'styled-components';

const Link = styled.a`
  color: #faf4ea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #819b57;
  }
`;

const FooterEl = styled.footer`
  position: relative;
  padding: 32px 0;
  background-color: #31261a;
  background-image: url(${FooterBackround});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;

  @media screen and (min-width: 786px) {
    text-align: justify;
  }

  &::before,
  &::after {
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;
    content: '';
  }

  &::before {
    width: 92.288px;
    height: 560px;
    left: 0;
    background-image: url(${ImageBread3});

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 120px;
      background-image: url(${ImageBread1});
    }
  }

  &::after {
    width: 104px;
    height: 91px;
    right: 0;
    background-image: url(${ImageBread4});

    @media screen and (min-width: 768px) {
      width: 380px;
      height: 187px;
      background-image: url(${ImageBread2});
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const AddressLink = styled.a`
  color: #faf4ea;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;

  &:hover {
    color: #819b57;
  }
`;

const FooterSocial = styled.ul`
  display: flex;
  gap: 22px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const AddressCopyright = styled.p`
  color: #a18268;
  font-size: 14px;
`;

const AddressIcon = styled.a`
  fill: #faf4ea;

  &:hover {
    fill: #819b57;
    border-radius: 50%;
    background-color: #faf4ea;
  }
`;

const AddressItem = styled.li`
  font-style: normal;
  margin-bottom: 16px;
`;

const Item = styled.li`
  margin-bottom: 0;
`;

const Footer = () => {
  return (
    <>
      <FooterEl>
        <div className="container">
          <FooterContainer>
            <Logo />
            <ul className="footer-menu">
              <li>
                <Link href="#traditions">Наші традиції</Link>
              </li>
              <li>
                <Link href="#chefs">Шеф-кухарі</Link>
              </li>
              <li>
                <Link href="#formats">Формати</Link>
              </li>
              <li>
                <Link href="#contact">Контакти</Link>
              </li>
            </ul>
            <address>
              <ul>
                <AddressItem>
                  <AddressLink href="tel:+380960000007">
                    + 38 (096) 000 00 07
                  </AddressLink>
                </AddressItem>
                <AddressItem>
                  <AddressLink href="mailto:shopbakery@gmail.com">
                    shopbakery@gmail.com
                  </AddressLink>
                </AddressItem>
                <AddressItem>
                  <AddressLink
                    href="https://maps.app.goo.gl/SvD66bGZupn16T4t5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Україна, м. Київ,
                    <br />
                    вул. Січових Стрільців 54
                  </AddressLink>
                </AddressItem>
              </ul>
              <FooterSocial>
                <Item>
                  <AddressIcon href="#">
                    <svg width="32" height="32">
                      <use href="./images/icons-svg.svg#icon-facebook"></use>
                    </svg>
                  </AddressIcon>
                </Item>
                <li>
                  <AddressIcon href="#">
                    <svg width="32" height="32">
                      <use href="./images/icons-svg.svg#icon-instagram"></use>
                    </svg>
                  </AddressIcon>
                </li>
              </FooterSocial>
            </address>

            <div className="footer__end">
              <AddressLink href="#" target="_blank">
                Політика конфіденційності
              </AddressLink>
              <AddressCopyright>&copy; 2022 Дані захищені</AddressCopyright>
            </div>
          </FooterContainer>
        </div>
      </FooterEl>
    </>
  );
};

export default Footer;
