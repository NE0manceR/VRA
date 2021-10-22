import React, { useState, useRef, useEffect } from 'react';
import './slider-3D.scss';

const Slider3D = () => {
  let [active, setActive] = useState(0);

  const circleBtn = [
    {
      id: 0,
      src: '/img/3Dpage/Slider/btn-circle/Group 29.svg',
      pineapple: [
        '/img/3Dpage/Slider/pineapples/white-1.jpg',
        '/img/3Dpage/Slider/pineapples/white-2.jpg',
      ],
    },
    {
      id: 1,
      src: '/img/3Dpage/Slider/btn-circle/Group 30.svg',
      pineapple: [
        '/img/3Dpage/Slider/pineapples/green-1.jpg',
        '/img/3Dpage/Slider/pineapples/green-2.jpg',
      ],
    },
    {
      id: 2,
      src: '/img/3Dpage/Slider/btn-circle/Group 31.svg',
      pineapple: [
        '/img/3Dpage/Slider/pineapples/blue-1.jpg',
        '/img/3Dpage/Slider/pineapples/blue-2.jpg',
      ],
    },
    {
      id: 3,
      src: '/img/3Dpage/Slider/btn-circle/Group 32.svg',
      pineapple: [
        '/img/3Dpage/Slider/pineapples/yellow-1.jpg',
        '/img/3Dpage/Slider/pineapples/yellow-2.jpg',
      ],
    },
    {
      id: 4,
      src: '/img/3Dpage/Slider/btn-circle/Group 33.svg',
      pineapple: [
        '/img/3Dpage/Slider/pineapples/red-1.jpg',
        '/img/3Dpage/Slider/pineapples/red-2.jpg',
      ],
    },
  ];

  function changeImg(id) {
    setActive(id);
  }

  return (
    <div className="Slider-3D Grid">
      <div className="Slider-3D__wrap">
        <div className="Slider-3D__title-wrap">
          <span className="Slider-3D__title">П'ять кольорів. Все, що завгодно аби вражати.</span>
          <div className="Slider-3D__circles-wrap">
            {circleBtn.map(({ id, src }) => {
              return (
                <div
                  onClick={() => {
                    changeImg(id);
                  }}
                  className={active === id ? 'active-circle' : ''}
                  key={id}
                >
                  <img src={src} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="Slider-3D__img">
          <div className="Slider-3D__img-wrap">
            <div>
              <img className="helpElement" src={circleBtn[4].pineapple[0]} alt="img" />
              <img
                className={active === 4 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[4].pineapple[0]}
                alt="img"
              />
              <img
                className={active === 3 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[3].pineapple[0]}
                alt="img"
              />
              <img
                className={active === 2 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[2].pineapple[0]}
                alt="img"
              />
              <img
                className={active === 1 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[1].pineapple[0]}
                alt="img"
              />
              <img
                className={active === 0 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[0].pineapple[0]}
                alt="img"
              />
            </div>
            <div>
              <img className="helpElement" src={circleBtn[4].pineapple[1]} alt="img" />

              <img
                className={active === 4 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[4].pineapple[1]}
                alt="img"
              />
              <img
                className={active === 3 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[3].pineapple[1]}
                alt="img"
              />
              <img
                className={active === 2 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[2].pineapple[1]}
                alt="img"
              />
              <img
                className={active === 1 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[1].pineapple[1]}
                alt="img"
              />
              <img
                className={active === 0 ? 'active-pineapple' : 'no-active-pin'}
                src={circleBtn[0].pineapple[1]}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3D;
