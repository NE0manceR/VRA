import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import './Logotype.scss';
import Pricing from '../pricing/Pricing';
import Blocks from '../common/blocks/Blocks';
import axios from 'axios';

const Logotype = () => {
  let [logotype, setLogotype] = useState({});
  let [currentItem, setCurrentItem] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    let params = location.pathname.split('/');
    if (currentUrl !== params[params.length - 1]) {
      loadCases(params[params.length - 1]);
    }
  });

  function loadCases(url) {
    fetch(`https://admin.vra.com.ua/logotype`)
      .then((response) => response.json())
      .then((logotype) => {
        setLogotype(logotype);
      });

    setCurrentUrl(url);
    axios.get(`https://admin.vra.com.ua/case-categories/url/${url}`).then((res) => {
      const item = res.data;
      setCurrentItem(item);
    });
  }

  return (
    <div className="Logotype showPage">
      <div className="Logotype__hero-bcg">
        <div className="Logotype__hero-grid">
          <div className="Logotype_position">
            <BreadCrumbs>
              <Link to={'/'}>Головна</Link>
              <span>/</span>
              <Link to={'/services/design'}>Дизайн</Link>
              <span>/</span>
              <Link to={'/'}>Логотипи</Link>
            </BreadCrumbs>
          </div>
          <div className="Logotype__text">
            <h2>Розробка логотипів</h2>
            <span>У вас є бренд, але він не працює? </span>
            <span>Давайте це виправимо!</span>
          </div>
          <div className="Logotype__img"></div>
        </div>
      </div>
      <div className="Logotype__features Features">
        <div className="Features__title-wrap  title-style">
          <h2>Унікальний</h2> <h2>бренд</h2> <h2>VRA</h2>
        </div>
        <div className="Features__text">
          <img src="/img/logotype/lamp.png" alt="img" />
          <div className="Features__text-1">
            <h4>Аналіз ринку та конкурентів</h4>
            <span>Що вже існує на ринку?</span>
          </div>
          <div className="Features__text-2">
            <h4>Візуальний гайд</h4>
            <span>Фірмова колористика, шрифт, патерни та правила використання</span>
          </div>
          <div className="Features__text-3">
            <h4>Аналіз споживачів</h4>
            <span>Що потрібно вашиму клієнту?</span>
          </div>
          <div className="Features__text-4">
            <h4>Фірмовий стиль</h4>
            <span>Поліграфічна та сувенірна продукція</span>
          </div>
          <div className="Features__text-5">
            <h4>Позиціонування</h4>
            <span>Яким мають бачити ваш бренд?</span>
          </div>
          <div className="Features__text-6">
            <h4>Логотип</h4>
            <span>Обличчя вашого бренду</span>
          </div>
        </div>
      </div>

      <div className="Brand-bcg">
        <div className="Brand">
          <div className="Brand__title-wrap title-style">
            <h2>Бренд</h2> <h2>це обличчя</h2> <h2>продукту</h2>
          </div>
          <span className="Brand__description">{logotype?.BrandSubTitle}</span>
          <Blocks array={logotype.Brand} />
        </div>
      </div>
      <div className="Brand">
        <div className="Brand__title-wrap title-style">
          <h2>Вартість</h2> <h2>розробки</h2> <h2>логотипу</h2>
        </div>
        <span className="Brand__description">Оберіть послугу, яка вам найбільше пасує </span>
        <Pricing arr={logotype.Prices} />
      </div>

      <div className="Logotype__examples-bcg">
        {currentItem?.items ? (
          <div className="Logotype__examples">
            <h2 className="Logotype__examples-title">Приклади робіт</h2>
            <span className="Logotype__examples-description">Приклади логотипів</span>
            <Gallery
              link
              items={currentItem ? currentItem.items : []}
              className="Logotype__gallery"
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

export default Logotype;
