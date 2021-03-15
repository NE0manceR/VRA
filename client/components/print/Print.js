import React, { useEffect } from 'react';
import './Print.scss';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let categoryArr = [
    {
      id: 0,
      src: '/img/category/PrintCategory/1.png',
      link: '/print',
      text: 'Візитки, флаєри',
    },
    {
      id: 1,
      src: '/img/category/PrintCategory/22.png',
      link: '/print',
      text: 'Каталоги, буклети',
    },
    {
      id: 2,
      src: '/img/category/PrintCategory/33.png',
      link: '/print',
      text: 'Кробки, упаковка',
    },
    {
      id: 3,
      src: '/img/category/PrintCategory/44.png',
      link: '/print',
      text: 'Наклейки, етикетки',
    },
    {
      id: 4,
      src: '/img/category/PrintCategory/55.png',
      link: '/print',
      text: 'Афіші, плакати, квитки',
    },
    {
      id: 5,
      src: '/img/category/PrintCategory/66.png',
      link: '/print',
      text: 'Папки, меню, сети',
    },
    {
      id: 6,
      src: '/img/category/PrintCategory/77.png',
      link: '/print',
      text: 'Календарі, календарики',
    },
    {
      id: 7,
      src: '/img/category/PrintCategory/88.png',
      link: '/print',
      text: 'Пакети паперові',
    },
    {
      id: 8,
      src: '/img/category/PrintCategory/99.png',
      link: '/print',
      text: 'Карти туристичні',
    },
  ];

  return (
    <div className="Category showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна</Link>
            <span>/</span>
            <Link to={'/'}>Друк</Link>
          </BreadCrumbs>
          <h2 className="Hero__title">Послуги друку</h2>
          <div className="Hero__services-wrap">
            {categoryArr.map(({ id, src, link, text }) => {
              return (
                <div key={id} className="Hero__services">
                  <div style={{ background: `url(${src})`, backgroundSize: 'cover' }}></div>
                  <Link to={link}>{text}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Order></Order>
      <Footer />
    </div>
  );
};

export default Category;
