import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../../components/footer/Footer';
import './Logotype.scss';
import Pricing from '../pricing/Pricing';
import Blocks from '../common/blocks/Blocks';

const Logotype = () => {
  let brandArr = [
    {
      id: 0,
      number: 1,
      title: 'Ідея і концепція бренду',
      text:
        'Ви розповідаєте про вашу ідею і ми ретельно пропрацювуємо бриф, обговорюємо референси та можливі варіанти айдентики.',
    },
    {
      id: 2,
      number: 2,
      title: 'Аналіз ринку та цільової аудиторії.',
      text:
        'Виділяємо топ-конкурентів та проводимо глибинне інтервю з вашим існуючим або потенційним споживачем.',
    },
    {
      id: 3,
      number: 3,
      title: 'Розробка позиціонування.',
      text:
        'Побудова портрета вашого споживача. Побудова відмінностей при визначенні свого позиціонування.',
    },
    {
      id: 4,
      number: 4,
      title: 'Розробка логотипу.',
      text:
        'Презентація варіантів логотипу. Після узгодження допрацьовуємо логотип, айдентику та формуємо гайд.',
    },
    {
      id: 5,
      number: 5,
      title: 'Створюємо макети вашого фірмового стилю',
      text: 'Готуємо макети поліграфічної та сувенірної продукції.',
    },
  ];

  let priceArr = [
    {
      id: 1,
      price: 2500,
      plan: 'Стандарт',
      logo: ['', false],
      options: '1 варіанти логотипу',
      time: '2-4 дні',
      designers: 'Працює 1 дизайнер та менеджер',
      edits: 'Передбачено 3 правки',
      fonts: ['Підбір кольору та шрифта', true],
      fontsStatus: true,
      popular: false,
    },
    {
      id: 2,
      price: 5000,
      plan: 'Оптимальний',
      logo: ['', false],
      options: '3 варіантів логотипу',
      time: '4-7 днів',
      designers: 'Працює 2 дизайнери та менеджер',
      edits: 'Передбачено 5 правок',
      fonts: ['Підбір кольору та шрифта', true],
      popular: true,
    },
    {
      id: 3,
      price: 9000,
      plan: 'Преміум',
      logo: ['', false],
      options: '5 варіантів логотипу',
      time: '7-10 днів',
      designers: 'Працює 3 дизайнери та менеджер',
      edits: 'Передбачено 8 правки',
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

  return (
    <div className="Logotype showPage">
      <div className="Logotype__hero-bcg">
        <div className="Logotype__hero-grid">
          <div className="Logotype_position">
            <BreadCrumbs>
              <Link to={'/'}>Головна</Link>
              <span>/</span>
              <Link to={'/'}>Дизайн</Link>
              <span>/</span>
              <Link to={'/'}>Логотипи</Link>
            </BreadCrumbs>
          </div>
          <div className="Logotype__text">
            <h2>Розробка логотипів</h2>
            <span>У вас є бренд, але він не працює? Тож давайте це виправимо</span>
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
          <span className="Brand__description">
            Створюємо і узгоджуємо кожну деталь на всіх етапах розробки разом з вами.
          </span>
          <Blocks array={brandArr} />
        </div>
      </div>
      <div className="Brand">
        <div className="Brand__title-wrap title-style">
          <h2>Вартість</h2> <h2>розробки</h2> <h2>логотипу</h2>
        </div>
        <span className="Brand__description">Оберіть послугу, яка вам найбільше пасує </span>
        <Pricing arr={priceArr} />
      </div>

      <div className="Logotype__examples-bcg">
        <div className="Logotype__examples">
          <h2 className="Logotype__examples-title">Приклади робіт</h2>
          <span className="Logotype__examples-description">Приклади логотипів</span>
          <Gallery addPhoto={photoExample} className="Logotype__gallery"></Gallery>
        </div>
      </div>
      <Order></Order>
      <Footer />
    </div>
  );
};

export default Logotype;
