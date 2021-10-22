import React, { useEffect, useState } from 'react';
import './Print.scss';
import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import axios from 'axios';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    let params = location.pathname.split('/');

    if (currentUrl !== params[params.length - 1]) {
      loadService(params[params.length - 1]);
    }
  });

  let [currentItem, setCurrentItem] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);

  function loadService(url) {
    setCurrentUrl(url);
    axios.get(`https://admin.vra.com.ua/case-categories/url/${url}`).then((res) => {
      const item = res.data;
      setCurrentItem(item);
    });
  }

  return (
    <div className="Category showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна</Link>
            <span>/</span>
            <Link to={`/services/${currentItem?.case.Link}`}>{currentItem?.description}</Link>
            <span>/</span>
            <Link to={'/'}>{currentItem?.title}</Link>
          </BreadCrumbs>
          <h2 className="Hero__title">{currentItem?.name}</h2>
          <div className="Hero__services-wrap">
            {currentItem?.sub_menu_lists.map((subItem) => {
              return (
                <Link
                  key={subItem?.id}
                  className="Hero__services"
                  to={`/sub-category/${subItem?.Link}`}
                >
                  <img src={subItem?.main_photo?.url} alt="img" />
                  {subItem?.title}
                </Link>
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
