import React from 'react';
import Slider from 'react-slick';
import './carusel.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './../../images/carusel1.jpg';
import image2 from './../../images/carusel2.jpg';
import image3 from './../../images/carusel3.jpg';

import styled from 'styled-components';

const Carusel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const App = styled.div`
    width: 100%;
    margin: 0 auto;
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  return (
    <>
      <App className="slider-container ">
        <Slider {...settings}>
          <div className="slider__item">
            <Image src={image1} alt="" width="349"></Image>
          </div>
          <div className="slider__item">
            <Image src={image2} alt="" width="349"></Image>
          </div>
          <div className="slider__item">
            <Image src={image3} alt="" width="349"></Image>
          </div>
          <div className="slider__item">
            <Image src={image1} alt="" width="349"></Image>
          </div>
          <div className="slider__item">
            <Image src={image2} alt="" width="349"></Image>
          </div>
          <div className="slider__item">
            <Image src={image3} alt="" width="349"></Image>
          </div>
        </Slider>
      </App>
    </>
  );
};

export default Carusel;
