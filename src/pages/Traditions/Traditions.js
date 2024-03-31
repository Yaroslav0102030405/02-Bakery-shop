import React from 'react';
import './traditions.scss';
import ImageMan from './../../images/baker-man.jpg';
// import ImageMan1 from './../../../images/baker-man@1x.jpg';

const Traditions = () => {
  return (
    <>
      <section className="traditions section" id="traditions">
        <div className="container">
          <div className="traditions__container">
            <div className="traditions__content">
              <h2 className="traditions__title section__title">
                Новий формат традицій
              </h2>
              <p className="tranditions__text">
                <span className="traditions__text--brand tranditions__text--uppercase">
                  shop bakery
                </span>
                — це пекарня, яка взяла все найкраще, і зберегла смак
                традиційної випічки та натуральність інгредієнтів.
              </p>
              <p className="tranditions__text">
                Ми працюємо як найвідоміші мережі —
                <span className="traditions__text--brand">
                  5 хвилин і замовлення готове
                </span>
                . А ще у наших пекарень стильний дизайн та висока якість
                обслуговування!
              </p>
            </div>
            <img
              className="traditions__baker"
              //   srcset="
              //     ./images/baker-man@1x.jpg 1x,
              //     ./images/baker-man@2x.jpg 2x
              //   "
              //   src="./images/baker-man.jpg"
              //   srcSet=(ImageMan1)
              srcSet={ImageMan}
              //   srcSet=<ImageMan />

              alt="Чоловік пекарь дивится на хліб"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Traditions;
