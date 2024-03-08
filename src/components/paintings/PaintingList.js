import React from "react";
import PropTypes from "prop-types";
import MurkupPainting from "./MurkupPainting";

// передача динамических пропсов
const PaintingList = ({ datapaintings }) => (
  // деструктуризация деномических пропсов
  <ul>
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
    })
  ).isRequired,
};

export default PaintingList;
