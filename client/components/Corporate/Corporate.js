import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Pricing from '../pricing/Pricing';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import './Corporate.scss';

const Corporate = () => {
  let priceArrCorporate = [
    {
      id: 1,
      price: 5000,
      plan: 'Стандарт',
      logo: ['Логотип від замовника', true],
      options: '2 варіанти фірмового стилю',
      time: 'Термін виконання від 2 до 5 днів',
      designers: 'Працює 1 дизайнер',
      edits: 'Передбачено 2 правки',
      fonts: ['Підбір кольору та шрифта', false],
      popular: false,
    },
    {
      id: 2,
      price: 10000,
      plan: 'Оптимальний',
      logo: ['3 варіанти логотипу', true],
      options: '2 варіанти фірмового стилю',
      time: 'Термін виконання 4-9 днів',
      designers: 'Працює 2 дизайнери',
      edits: 'Передбачено 3 правки',
      fonts: ['Підбір кольору та шрифта', false],
      popular: true,
    },
    {
      id: 3,
      price: 15000,
      plan: 'Преміум',
      logo: ['5 варіантів логотипу', true],
      options: '2 варіанти фірмового стилю',
      time: 'Термін виконання від 6 до 15 днів',
      designers: 'Працює три дизайнери',
      edits: 'Передбачено 3 правки',
      fonts: ['Підбір кольору та шрифта', true],
      popular: false,
    },
  ];

  let photoExample = [
    {
      id: 0,
      blockClass: 'Gallery__photo-1',
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 1,
      blockClass: 'Gallery__photo-2',
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 2,
      blockClass: 'Gallery__photo-3',
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 3,
      blockClass: 'Gallery__photo-4',
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 4,
      blockClass: 'Gallery__photo-5',
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
  ];

  let iconsArr = [
    { id: 1, icon: '/img/Style/1.svg', text: 'Логотипи' },
    { id: 2, icon: '/img/Style/2.svg', text: 'Візитки' },
    { id: 3, icon: '/img/Style/3.svg', text: 'Кольори та шрифти' },
    { id: 4, icon: '/img/Style/4.svg', text: 'Блокноти, щоденники' },
    { id: 5, icon: '/img/Style/5.svg', text: 'Сувенірна продукція' },
    { id: 6, icon: '/img/Style/6.svg', text: 'Фірмовий одяг, посуд' },
  ];

  return (
    <div className="Corporate showPage">
      <div className="Hero Grid">
        <BreadCrumbs className="Corporate__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/'}>Дизайн</Link>
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
            {iconsArr.map(({ icon, id, text }) => {
              return (
                <div key={id}>
                  <img src={icon} alt="img" />
                  <span>{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="Step Grid">
        <h5 className="Step__title">Розробка фірмового стилю передбачає:</h5>
        <div className="Step__text-wrap">
          <div>
            <div className="Step__number-wrap">
              <span></span>
              <span>1.</span>
            </div>
            <span className="Step__text">Розбір бренду та визначення потреб</span>
          </div>
          <div>
            <div className="Step__number-wrap">
              <span></span>
              <span>2.</span>
            </div>
            <span className="Step__text">Аналіз ринку та трендів</span>
          </div>
          <div>
            <div className="Step__number-wrap">
              <span></span>
              <span>3.</span>
            </div>
            <span className="Step__text">Аналіз конкурентів та цільової аудиторії</span>
          </div>
          <div>
            <div className="Step__number-wrap">
              <span></span>
              <span>4.</span>
            </div>
            <span className="Step__text">Послідовну розробку усіх елементів фірмового стилю </span>
          </div>
        </div>
      </div>

      <div className="Pricing-bcg">
        <div className="Pricing Grid">
          <h5 className="Pricing__title Title">
            <span>Вартість</span> розробки <span>фірмового</span> стилю
          </h5>
          <Pricing arr={priceArrCorporate} classNames="Pricing__pricing" />
        </div>
      </div>
      <div className="Corporate__examples-bcg">
        <div className="Corporate__examples">
          <h2 className="Corporate__examples-title">Приклади робіт</h2>
          <span className="Corporate__examples-description">Приклади логотипів</span>
          <Gallery addPhoto={photoExample} className="Corporate__gallery"></Gallery>
        </div>
      </div>
      <Order></Order>
      <Footer />
    </div>
  );
};

export default Corporate;
