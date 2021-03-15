import React from 'react';
import WhiteBtn from '../common/buttons/white-btn/White-btn';
import './Pricing.scss';

const Pricing = (props) => {
  return (
    <div className={`Pricing__price-wrap ${props.classNames}`}>
      {props.arr.map(
        ({ logo, id, options, fonts, time, designers, edits, plan, price, popular }) => {
          return (
            <div
              key={id}
              className={`Pricing__price-card-bcg-gradient ${popular ? 'Pricing__popular' : ''} `}
            >
              <div className={`Pricing__price-card-bcg-white `}>
                <span className="Pricing__price">
                  {price}
                  <span>грн</span>
                </span>
                <span className="Pricing__plan">{plan}</span>
                {logo[1] ? <span className="Pricing__work-plan">{logo[0]}</span> : null}
                <span className="Pricing__work-plan">{options}</span>
                <span className="Pricing__work-plan">{time}</span>
                <span className="Pricing__work-plan">{designers}</span>
                <span className="Pricing__work-plan">{edits}</span>
                {fonts[1] ? <span className="Pricing__work-plan">{fonts[0]}</span> : null}
                <WhiteBtn className="Pricing__btn">Замовити</WhiteBtn>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Pricing;
