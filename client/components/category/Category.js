import React, { useEffect } from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let categoryArr = [
    { id: 0, src: '/img/category/print/1.png', link: '/subcategoryitem', text: 'Друк на папері' },
    {
      id: 1,
      src: '/img/category/print/2.png',
      link: '/subcategoryitem',
      text: 'Широкоформатний друк',
    },
    {
      id: 2,
      src: '/img/category/print/3.png',
      link: '/subcategoryitem',
      text: 'Друк Лого на одязі/тканині',
    },
    {
      id: 3,
      src: '/img/category/print/4.png',
      link: '/subcategoryitem',
      text: 'Друк на пластику/металі',
    },
    {
      id: 4,
      src: '/img/category/print/4.png',
      link: '/subcategoryitem',
      text: 'Друк на пластику/металі',
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
