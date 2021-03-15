import React from 'react';
import './Sub-category-item.scss';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import Gallery from '../common/gallery/Gallery';

let example = [
  {
    id: 0,
    blockClass: 'Gallery__photo-1',
    photo: '/img/HomePage/gallery/photo5.png',
    link: '/',
    category: 'textile',
  },
  {
    id: 1,
    blockClass: 'Gallery__photo-2',
    photo: '/img/HomePage/gallery/photo5.png',
    link: '/',
    category: 'textile',
  },
  {
    id: 2,
    blockClass: 'Gallery__photo-3',
    photo: '/img/HomePage/gallery/photo5.png',
    link: '/',
    category: 'textile',
  },
  {
    id: 3,
    blockClass: 'Gallery__photo-4',
    photo: '/img/HomePage/gallery/photo5.png',
    link: '/',
    category: 'textile',
  },
  {
    id: 4,
    blockClass: 'Gallery__photo-5',
    photo: '/img/HomePage/gallery/photo5.png',
    link: '/',
    category: 'textile',
  },
];

const SubCategoryItem = () => {
  return (
    <div className="SubCategory showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна</Link>
            <Link to={'/print'}>/ Друк</Link>
            <Link to={'/category'}>/ Друк на папері</Link>
            <Link to={'/'}>/ Візитки, флаєри</Link>
          </BreadCrumbs>
          <div className="Hero__text-wrap">
            <h2 className="Hero__title">
              <span>Візитки</span> <span>флаєри</span>
            </h2>
            <span className="Hero__text">
              Це візуальне представлення вашої компанії, її імідж та цілісне обличчя. Він показує
              унікальність, особливість та цінність бренду, а також є ключовим у побудові маркетингу
              та реклами
            </span>
          </div>
          <img src="/img/subCategory/BusinessCards.png" alt="img" />
        </div>
      </div>

      <div className="Service Grid">
        <div className="Service__wrap">
          <h5>Послуги</h5>
          <ol>
            <span>
              1.Виготовляємо візитки всіх видів, в тому числі на дизайнерському картоні і на
              пластику
            </span>
            <span>2.Флаєри друкуємо мінімальним тиражем від 50 шт.</span>
            <span>3.За необхідності організовуємо розповсюдження флаєрів</span>
          </ol>
        </div>
      </div>
      <div className="Portfolio-bcg">
        <div className="Portfolio Grid">
          <div className="Portfolio__text">
            <h2 className="Portfolio__title">Приклади робіт</h2>
            <span className="Portfolio__text">Приклади візиток, флаєрів</span>
          </div>
          <Gallery btn={false} addPhoto={example} />
        </div>
      </div>
      <Order />
      <Footer />
    </div>
  );
};

export default SubCategoryItem;
