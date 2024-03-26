import React from 'react';
// import React, { Component } from 'react';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import Slider from 'react-slick';

const Carusel = ({ props }) => {
  //   const settings = {
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
      {/* <div className="slider-container"> */}

      {/* <div className="formats__slider formats"> */}
      {/* <div className="swiper swiper-container formats__container"> */}
      {/* <div className="slider-container"> */}
      {/* <Slider {...settings}> */}
      <ul className="flex">
        {props.map(({ img, title, text1, text2, text3, text4 }) => (
          <li key={title}>
            {/* <article className="format-card"> */}
            <img
              className="img"
              // className="format-card__image"
              // src="./images/carusel1.jpg"
              srcSet={img}
              alt="Walrus format"
            />
            {/* <h3 className="format-card__title" lang="en">
                {title}
              </h3> */}
            {/* <div className="format-card__text">
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
              </div> */}
            {/* </article> */}
          </li>
        ))}
        {/* </Slider> */}
      </ul>
      {/* </Slider> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* </div> */}
    </>
  );
};

export default Carusel;
