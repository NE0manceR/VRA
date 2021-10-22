import React, { useEffect, useState } from 'react';
import './Category.scss';
import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import axios from 'axios';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentUrl !== url) {
      loadService();
    }
  });
  let { url } = useParams();

  let [currentItem, setCurrentItem] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);

  function loadService() {
    setCurrentUrl(url);
    axios.get(`https://admin.vra.com.ua/menu/${url}`).then((res) => {
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
            <Link to={'/'}>{currentItem?.linkName}</Link>
          </BreadCrumbs>
          <h2 className="Hero__title">
            {currentItem?.title_page} {currentItem?.linkName}
          </h2>
          <div className="Hero__services-wrap">
            {currentItem?.case_categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  className="Hero__services"
                  to={
                    currentItem?.Link === 'design'
                      ? `/${currentItem?.Link}/${category?.Link}`
                      : currentItem?.Link === 'about'
                      ? `/${category?.Link}`
                      : currentItem.Link === 'druk'
                      ? `/case-category/${category?.Link}`
                      : `/sub-categories/${category?.Link}`
                  }
                >
                  <img src={category?.main_photo?.url} alt="img" />

                  {category?.title}
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
