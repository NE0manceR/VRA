import React, { useState, useRef } from 'react';
import './Gallery-3D.scss';
import { Link } from 'react-router-dom';
import WhiteBtn from '../buttons/white-btn/White-btn';
import { Fragment } from 'react';

const Gallery3D = () => {
  let count = 1;
  let [photoCount, setPhotoCount] = useState(3);
  let btn = useRef();

  function morePhoto() {
    console.log(photoCount);
    // console.log(count);
    if (photoCount >= photoArr.length - 1) {
      btn.current.style.display = 'none';

      return;
    }
    setPhotoCount(photoCount + 3);
  }

  let photoArr = [
    {
      id: 0,
      name: 'Яскрава візуалізація напою mmm... СмІлива гама кольорів для гламурного стилю. ',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 1,
      name: 'Візуалізація барабанів була створена для сайту. ',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle29.png',
    },
    {
      id: 2,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle28.png',
    },
    {
      id: 3,
      name: 'Яскрава візуалізація напою mmm... СмІлива гама кольорів для гламурного стилю. ',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 4,
      name: 'Візуалізація барабанів була створена для сайту. ',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle29.png',
    },
    {
      id: 5,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 6,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 7,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 8,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 9,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 10,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
    {
      id: 11,
      name:
        'Візуалізація автоматики італійського бренду FAAC, яка була розроблена спеціально для обкладинки каталогу у 2018 році.',
      link: '',
      img: '/img/3Dpage/PhotoSlider/Rectangle30.png',
    },
  ];

  return (
    <div className="Gallery3D Grid">
      <div className="Gallery3D__wrap">
        <p className="Gallery3D__title-1">Застосування</p>
        <p className="Gallery3D__title-2">Ми знаємо, як зробити вау.</p>
        <div className="Gallery3D__photos">
          {photoArr.map(({ id, name, link, img }) => {
            return (
              <Fragment key={id}>
                {count++ <= photoCount ? (
                  <div
                    style={{
                      animation: `showPhoto 0.3s forwards ${Math.random() * (0.6 - 0.4) + 0.1}s`,
                    }}
                    className="Gallery3D__item"
                  >
                    <div
                      style={{
                        background: `url(${img}) no-repeat`,
                      }}
                    ></div>
                    <span className="Gallery3D__name">{name}</span>
                    <Link to={link}>Переглянути проєкт в деталях</Link>
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
        <div ref={btn}>
          <WhiteBtn className="d3g-btn" morePhotoInLogo={morePhoto}>
            Більше прикладів
          </WhiteBtn>
        </div>
      </div>
    </div>
  );
};

export default Gallery3D;
