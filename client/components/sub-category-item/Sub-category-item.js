import React, { useEffect, useState } from 'react';
import './Sub-category-item.scss';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import Gallery from '../common/gallery/Gallery';
import axios from 'axios';

const SubCategoryItem = () => {
  let [currentItem, setCurrentItem] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    let params = location.pathname.split('/');
    if (currentUrl !== params[params.length - 1]) {
      loadCases(params[params.length - 1]);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function loadCases(url) {
    setCurrentUrl(url);
    if (location.href.includes('sub-categories')) {
      axios.get(`https://admin.vra.com.ua/case-categories/url/${url}`).then((res) => {
        const item = res.data;
        setCurrentItem(item);
      });
    } else {
      axios.get(`https://admin.vra.com.ua/items/cases/${url}`).then((res) => {
        const item = res.data;
        setCurrentItem(item);
      });
    }
  }

  return (
    <div className="SubCategory showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна </Link>{' '}
            <Link
              to={
                currentItem?.sub_menu?.Link !== undefined
                  ? '/case-category/' + currentItem?.sub_menu?.Link
                  : '/services/' + currentItem?.case?.Link
              }
            >
              {' '}
              / {`${currentItem?.sub_menu?.title || currentItem?.case.linkName} `}{' '}
            </Link>{' '}
            <Link to={'/'}>/ {currentItem?.title}</Link>
          </BreadCrumbs>
          <div className="Hero__text-wrap">
            <h2 className="Hero__title">{currentItem?.title}</h2>
            <span className="Hero__text">{currentItem?.description}</span>
          </div>
          <div className="Hero__img-wrap-sub">
            <img
              src={currentItem?.main_photo?.url}
              alt={currentItem?.main_photo?.alternativeText}
            />
          </div>
        </div>
      </div>

      <div className="Service Grid">
        <div className="Service__wrap">
          <h5>Послуги</h5>
          <ol>
            {currentItem?.service &&
              currentItem?.service.map((service) => {
                return <span key={service.title + service.id}>{service.title}</span>;
              })}
          </ol>
        </div>
      </div>
      <div className="Portfolio-bcg">
        <div className="Portfolio Grid">
          <div className="Portfolio__text">
            <h2 className="Portfolio__title">Приклади робіт</h2>
            <span className="Portfolio__text">{currentItem?.title}</span>
          </div>
          <Gallery btn={true} items={currentItem ? currentItem.items : []} />
        </div>
      </div>
      <Order />
      <Footer />
    </div>
  );
};

export default SubCategoryItem;
