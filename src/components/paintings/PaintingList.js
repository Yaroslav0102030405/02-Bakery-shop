import React from 'react';
import PropTypes from 'prop-types';
import MurkupPainting from './MurkupPainting';
import './PaintingList.scss';

// передача динамических пропсов
const PaintingList = ({ datapaintings }) => (
  // деструктуризация деномических пропсов
  <ul className="Flex">
    {datapaintings.map(({ id, url, title, price, author, quantity }) => (
      <li key={id}>
        <MurkupPainting
          url={url}
          title={title}
          price={price}
          profileUrl={author.url}
          tag={author.tag}
          quantity={quantity}
        />
      </li>
    ))}
  </ul>
);

PaintingList.propTypes = {
  datapaintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PaintingList;
