import React from 'react';
import Slider from 'react-slick';
import './carusel.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './../../images/carusel1.jpg';
import image2 from './../../images/carusel2.jpg';
import image3 from './../../images/carusel3.jpg';

// import Slider from 'react-slick';

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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         centerPadding: '10px',
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  return (
    <>
      <div className="slider-container app">
        <Slider {...settings}>
          <div className="slider__item">
            <img src={image1} alt="" width="349"></img>
            {/* <h3>1</h3> */}
          </div>
          <div className="slider__item">
            <img src={image2} alt="" width="349"></img>
            {/* <h3>2</h3> */}
          </div>
          <div className="slider__item">
            <img src={image3} alt="" width="349"></img>
            {/* <h3>3</h3> */}
          </div>
          <div className="slider__item">
            <img src={image1} alt="" width="349"></img>
            {/* <h3>4</h3> */}
          </div>
          <div className="slider__item">
            <img src={image2} alt="" width="349"></img>
            {/* <h3>5</h3> */}
          </div>
          <div className="slider__item">
            <img src={image3} alt="" width="349"></img>
            {/* <h3>6</h3> */}
          </div>
          {/* <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default Carusel;
