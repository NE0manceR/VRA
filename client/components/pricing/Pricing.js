import React, { useState } from 'react';
import WhiteBtn from '../common/buttons/white-btn/White-btn';
import './Pricing.scss';

const Pricing = (props) => {
  let [priceName, setPriceName] = useState('Оптимальний');

  function priseStyle(name) {
    setPriceName(name);
  }

  return (
    <div className={`Pricing__price-wrap ${props.classNames}`}>
      {props.arr?.map(({ price, name, id, PricePlan }) => {
        return (
          <div
            key={id}
            onMouseEnter={() => {
              priseStyle(name);
            }}
            onMouseLeave={() => {
              priseStyle('Оптимальний');
            }}
            className={`Pricing__price-card-bcg-gradient ${
              name === priceName ? 'Pricing__popular' : ''
            } `}
          >
            <div className={`Pricing__price-card-bcg-white White__popular `}>
              <span className="Pricing__price">
                {price}
                <span>грн</span>
              </span>
              <span className="Pricing__plan">{name}</span>
              {PricePlan?.map(({ title, id }) => {
                return (
                  <span key={id} className="Pricing__work-plan">
                    {title}
                  </span>
                );
              })}
              <WhiteBtn link order className="Pricing__btn">
                Замовити
              </WhiteBtn>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pricing;
