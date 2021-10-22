import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Brand-book.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Blocks from '../common/blocks/Blocks';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import axios from 'axios';

const BrandBook = () => {
  let [brandInfo, setBrandInfo] = useState({});
  let brendNumber = 1;
  let howWork = 1;

  let [currentItem, setCurrentItem] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    let params = location.pathname.split('/');
    if (currentUrl !== params[params.length - 1]) {
      loadCases(params[params.length - 1]);
    }
  });

  function loadCases(url) {
    fetch(`https://admin.vra.com.ua/brandbook`)
      .then((response) => response.json())
      .then((brand) => {
        setBrandInfo(brand);
      });

    setCurrentUrl(url);
    axios.get(`https://admin.vra.com.ua/case-categories/url/${url}`).then((res) => {
      const item = res.data;
      setCurrentItem(item);
    });
  }

  return (
    <div className="BrandBook showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="BrandBook__bread">
            <Link to={'/'}>Головна</Link>
            <span>/</span>
            <Link to={'/services/design'}>Дизайн</Link>
            <span>/</span>
            <Link to={'/'}>Брендбук</Link>
          </BreadCrumbs>
          <h2 className="Hero__title">Розробка брендбуку</h2>
          <span className="Hero__text">
            Брендбук – це “книга бренду”. Вона охоплює всі аспекти використання бренду, в ній
            прописані правила згідно з якими відбувається виготовлення всієї реклами, фірмової
            продукції, оформлення публікацій.
          </span>
          <img src="/img/BrandBook/2b.png" alt="img" />
        </div>
      </div>

      <div className="Why-bcg">
        <div className="Why Grid">
          <div className="Title-wrap">
            <h5>Для чого</h5>
            <h5>мені</h5>
            <h5>брендбук?</h5>
          </div>
          <div className="Why__text">
            {brandInfo.WhyList?.map(({ id, title }) => {
              return (
                <div key={id} className="Text-wrap">
                  <span>{brendNumber++}.</span>
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
          <img src="/img/BrandBook/Images.png" alt="img" />
        </div>
      </div>

      <div className="Development Grid">
        <div className="Title-wrap Development__wrap">
          <h5>Що</h5>
          <h5>входить в розробку </h5>
          <h5>брендбуку?</h5>
        </div>
        <Blocks array={brandInfo.DevelopmentList}></Blocks>
      </div>

      <div className="How-bcg">
        <div className="How Grid">
          <div className="Title-wrap How__wrap">
            <h5>Як</h5>
            <h5>ми</h5>
            <h5>працюємо</h5>
          </div>

          <div className="How__text">
            {brandInfo.HowWorkList?.map(({ id, description, title }) => {
              return (
                <div key={id} className="Text-wrap">
                  <span>{howWork++}.</span>
                  <span>{title}</span>
                  <span>{description}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {currentItem?.items ? (
        <div className="Portfolio Grid">
          <div className="Portfolio__wrap">
            <span className="Portfolio__title">Приклади робіт</span>
            <span className="Portfolio__descr">Приклади брендбуків</span>
          </div>
          <Gallery
            link
            items={currentItem ? currentItem.items : []}
            className="Portfolio__photos"
          />
        </div>
      ) : (
        ''
      )}
      <Order />
      <Footer />
    </div>
  );
};

export default BrandBook;
