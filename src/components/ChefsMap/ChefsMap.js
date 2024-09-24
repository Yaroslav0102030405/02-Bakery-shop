import React from 'react';
import ImageNastya from './../../images/nastya-shef.jpg';
import ImageVlad from './../../images/vlad-chef.jpg';

import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 60px 60px;
  }
`;

const Item = styled.li`
  @media screen and (min-width: 1280px) {
    flex-basis: calc(100% - 30px / 2);
  }
`;

const ChefCard = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

const Photo = styled.img`
  width: 140px;
  border-radius: 4px 4px 4px 200px;
  box-shadow:
    -10px 10px 0 0 #faf4ea,
    -10px 10px 0 1px #a18268;

  @media screen and (min-width: 768px) {
    width: 240px;
    box-shadow:
      -16px 16px 0 0 #faf4ea,
      -16px 16px 0 1px #a18268;
  }
`;

const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

const ChefsMap = ({ props }) => {
  return (
    <>
      <List>
        {props.map(({ title, descktitle, text1, text2, image }) => (
          <Item key={title}>
            <ChefCard>
              <Photo
                srcSet={ImageNastya}
                // src="./images/nastya-shef.jpg"
                // src={ImageNastya}
                alt="Nastya-chef"
              />
              <div>
                <Title>{title}</Title>
                <div className="chef-card__text">
                  <p>{descktitle}</p>
                  <p>{text1}</p>
                  <p>{text2}</p>
                </div>
              </div>
            </ChefCard>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ChefsMap;
