import React, { useState } from 'react';
import './Slider-AR.scss';

const SliderAR = () => {
  let [active, setActive] = useState(0);

  function changeAr(id) {
    setActive(id);
  }

  let chairArr = [
    { id: 0, src: '/img/3Dpage/ARslider/AR-1.jpg' },
    { id: 1, src: '/img/3Dpage/ARslider/AR-2.jpg' },
    { id: 2, src: '/img/3Dpage/ARslider/AR-3.jpg' },
    { id: 3, src: '/img/3Dpage/ARslider/AR-4.jpg' },
    { id: 4, src: '/img/3Dpage/ARslider/AR-5.jpg' },
  ];

  return (
    <div className="ARslider">
      <div className="ARslider__chair">
        <img className="ARslider__help-element" src="/img/3Dpage/ARslider/AR-1.jpg" alt="img" />
        {chairArr.map(({ id, src }) => {
          return (
            <img
              className={`interior-chairs ${active === id ? 'active-chair' : 'no-active-chair'}`}
              key={id}
              src={src}
            />
          );
        })}
      </div>
      <div className="ARslider__text-wrap">
        <p>Ще більше магії з 3D</p>
        <img className="ARslider__cube" src="/img/3Dpage/ARslider/Group.svg" alt="img" />
        <p>AR Технології</p>
        <span>
          Використовуйте 3D та доповнену реальність ширше! В інтер'єрах, будівництві, брендуванні.
        </span>
        <div className="ARslider__btn-wrap">
          <div
            onClick={() => {
              changeAr(0);
            }}
          >
            <div className={`ARslider__circle  ${active === 0 ? 'circle-active' : ''}`}></div>
            <span>Сірий</span>
          </div>
          <div
            onClick={() => {
              changeAr(1);
            }}
          >
            <div
              className={`ARslider__circle circle-2 ${active === 1 ? 'circle-active' : ''}`}
            ></div>
            <span>Синій</span>
          </div>
          <div
            onClick={() => {
              changeAr(2);
            }}
          >
            <div
              className={`ARslider__circle circle-3 ${active === 2 ? 'circle-active' : ''}`}
            ></div>
            <span>Мідний</span>
          </div>
          <div
            onClick={() => {
              changeAr(3);
            }}
          >
            <div
              className={`ARslider__circle circle-4 ${active === 3 ? 'circle-active' : ''}`}
            ></div>
            <span>Бордо</span>
          </div>
          <div
            onClick={() => {
              changeAr(4);
            }}
          >
            <div
              className={`ARslider__circle circle-5 ${active === 4 ? 'circle-active' : ''}`}
            ></div>
            <span>Бежевий</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderAR;
