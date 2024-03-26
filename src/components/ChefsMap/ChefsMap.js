import React from 'react';
// import ImageNastya from './../../images/nastya-shef.jpg';
// import ImageVlad from './../../images/vlad-chef.jpg';

const ChefsMap = ({ props }) => {
  return (
    <>
      <ul className="chefs__list">
        {props.map(({ title, descktitle, text1, text2, image }) => (
          <li key={title} className="chefs__item">
            <article className="chef-card">
              <img
                className="chef-card__photo"
                // srcSet={ImageNastya}
                // src="./images/nastya-shef.jpg"
                src={image}
                alt="Nastya-chef"
              />
              <div>
                <h3 className="chef-card__title">{title}</h3>
                <div className="chef-card__text">
                  <p>{descktitle}</p>
                  <p>{text1}</p>
                  <p>{text2}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChefsMap;
