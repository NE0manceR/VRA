import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Pricing from '../pricing/Pricing';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import './Corporate.scss';
import axios from 'axios';

const Corporate = () => {
  let [corporate, setCorporate] = useState({});
  let listNumber = 1;
  let [currentItem, setCurrentItem] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    let params = location.pathname.split('/');
    if (currentUrl !== params[params.length - 1]) {
      loadCases(params[params.length - 1]);
    }
  });

  function loadCases(url) {
    fetch(`https://admin.vra.com.ua/corporate`)
      .then((response) => response.json())
      .then((corporate) => {
        setCorporate(corporate);
      });

    setCurrentUrl(url);
    axios.get(`https://admin.vra.com.ua/case-categories/url/${url}`).then((res) => {
      const item = res.data;
      setCurrentItem(item);
    });
  }

  return (
    <div className="Corporate showPage">
      <div className="Hero Grid">
        <BreadCrumbs className="Corporate__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/services/design'}>Дизайн</Link>
          <span>/</span>
          <Link to={'/'}>Фірмовий стиль</Link>
        </BreadCrumbs>
        <h2 className="Hero__title">Фірмовий стиль</h2>
        <span className="Hero__text">
          Це візуальне представлення вашої компанії, її імідж та цілісне обличчя. Він показує
          унікальність, особливість та цінність бренду, а також є ключовим у побудові маркетингу та
          реклами
        </span>
        <img src="/img/corporate/corporate.png" alt="img" />
      </div>
      <div className="Style-bcg">
        <div className="Style Grid">
          <h5 className="Style Title">
            <span>Основні</span> елементи фірмового <span>стилю</span>
          </h5>
          <div className="Style__icons">
            {corporate.StylesList?.map(({ icon, id, title }) => {
              return (
                <div key={id}>
                  <img src={icon.url} alt="img" />
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Step Grid">
        <h5 className="Step__title">Розробка фірмового стилю передбачає:</h5>
        <div className="Step__text-wrap">
          {corporate.StepStyleList?.map(({ id, title }) => {
            return (
              <div key={id}>
                <div className="Step__number-wrap">
                  <span></span>
                  <span>{listNumber++}.</span>
                </div>
                <span className="Step__text">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Pricing-bcg">
        <div className="Pricing Grid">
          <h5 className="Pricing__title Title">
            <span>Вартість</span> розробки <span>фірмового</span> стилю
          </h5>
          <Pricing arr={corporate.PricesList} classNames="Pricing__pricing" />
        </div>
      </div>
      <div className="Corporate__examples-bcg">
        {currentItem?.items ? (
          <div className="Corporate__examples">
            <h2 className="Corporate__examples-title">Приклади робіт</h2>
            <span className="Corporate__examples-description">Приклади фірмового стилю</span>
            <Gallery
              btn
              items={currentItem ? currentItem.items : []}
              className="Corporate__gallery"
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <Order></Order>
      <Footer />
    </div>
  );
};

export default Corporate;
