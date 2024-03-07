import React from "react";
import PropTypes from "prop-types";

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>{quantity < 10 ? "Заканчиваеться товар" : "Есть в наличии"}</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

// Рекомендуеться ствить его для картинки
// специальное свойство Painting - которое по дефолту отобразит что-то если не заргузиться
Painting.defaultProps = {
  url: "https://cdn.pixabay.com/photo/2017/06/23/16/15/pencil-2435137_1280.jpg",
};

// для каждого пропса описал тип его значения
Painting.propTypes = {
  url: PropTypes.string, // необязательный
  title: PropTypes.string.isRequired, // обязательный
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
