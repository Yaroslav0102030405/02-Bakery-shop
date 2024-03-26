import React from 'react';
import './ribbon.scss';

const Ribbon = ({ props }) => {
  return (
    <>
      <ul className="advantages__list">
        {props.map(({ title }) => (
          <li key={title} className="advantages__item">
            {title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ribbon;
