import React from 'react';
import './footer.scss';
import Logo from '../../components/Logo/Logo';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <Logo />
            {/* <div className="footer__logo">
              <a href="#">
                <img src="./images/logo.svg" slot="Логотип сучасної пекарні" />
              </a>
            </div> */}

            <ul className="footer-menu">
              <li>
                <a className="link" href="#traditions">
                  Наші традиції
                </a>
              </li>
              <li>
                <a className="link" href="#chefs">
                  Шеф-кухарі
                </a>
              </li>
              <li>
                <a className="link" href="#formats">
                  Формати
                </a>
              </li>
              <li>
                <a className="link" href="#contact">
                  Контакти
                </a>
              </li>
            </ul>
            <address className="address">
              <ul>
                <li>
                  <a className="address__link" href="tel:+380960000007">
                    + 38 (096) 000 00 07
                  </a>
                </li>
                <li>
                  <a
                    className="address__link"
                    href="mailto:shopbakery@gmail.com"
                  >
                    shopbakery@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="address__link"
                    href="https://maps.app.goo.gl/SvD66bGZupn16T4t5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Україна, м. Київ,
                    <br />
                    вул. Січових Стрільців 54
                  </a>
                </li>
              </ul>
              <ul className="footer__social">
                <li>
                  <a href="#">
                    <svg className="address__icon" width="32" height="32">
                      <use href="./images/icons-svg.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className="address__icon" width="32" height="32">
                      <use href="./images/icons-svg.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </address>

            <div className="footer__end">
              <a className="address__link" href="#" target="_blank">
                Політика конфіденційності
              </a>
              <p className="address__copyright">&copy; 2022 Дані захищені</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
