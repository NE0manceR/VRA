import React from 'react';
import './Slider-card.scss';

const SliderCard = (props) => {
  return (
    <div className="Card__wrap-bcg">
      <div className="Card">
        <p className="Card__text">{props.text}</p>
        <div className="Card__img-wrap">
          <img className="Card__img" src={props.avatar} alt="img" />
          <p className="Card__title">{props.title}</p>
          <p className="Card__description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
