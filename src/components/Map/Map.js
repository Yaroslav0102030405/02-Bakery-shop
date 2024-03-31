import React from 'react';
// import './map.scss';

const Map = () => {
  return (
    <>
      <iframe
        // className="map"
        className="contact__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148784.80927513257!2d18.525220371973983!3d54.36117516719989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2z0pDQtNCw0L3RgdGM0LosINCf0L7Qu9GM0YnQsA!5e0!3m2!1suk!2sua!4v1701261627576!5m2!1suk!2sua"
        style={{ border: 0 }}
        // allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Map;
