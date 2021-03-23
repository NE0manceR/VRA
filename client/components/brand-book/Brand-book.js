import React from 'react';
import { Link } from 'react-router-dom';
import './Brand-book.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Blocks from '../common/blocks/Blocks';
import Gallery from '../common/gallery/Gallery';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';

const BrandBook = () => {
  let brandBookArr = [
    {
      id: 0,
      number: 1,
      title: 'Використання логотипу',
      text:
        'Опис та оформлення логотипу – візуальне сприйняття, способи використання і варіанти відтворення.',
    },
    {
      id: 1,
      number: 2,
      title: 'Використання типографіки',
      text:
        'Обґрунтування доцільності використаних шрифтів, представлення та оформлення тексту на різноманітних носіях та продукції.',
    },
    {
      id: 2,
      number: 3,
      title: 'Використання колористики',
      text:
        'Підбір та демонстрація кольорів у продукції різного виду. Правила та доцільність поєднання кольорів у рекламі, соцмережах тощо.',
    },
    {
      id: 3,
      number: 4,
      title: 'Використання фірмових елементів',
      text:
        'Приклади створення візиток, ділової документації, бланків, папок тощо. Сувенірна продукція – пакети, ручки, щоденники, записники.',
    },
    {
      id: 4,
      number: 5,
      title: 'Поради',
      text:
        'Приклади та рекомендації щодо створення і побудови рекламних публікацій, зовнішньої реклами, білбордів та сітілайтів, оформлення корпоративного транспорту, точок продажу та вивісок.Наявність брендбуку у вашій компанії  є безумовним свідченням сучасного відповідального підходу до ведення бізнесу і його успішності!',
    },
  ];

  let photoExample = [
    {
      id: 0,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 1,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 2,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 3,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 4,
      photo: '/img/HomePage/gallery/photo2.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 5,
      photo: '/img/HomePage/gallery/photo4.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 6,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 7,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 8,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 9,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 10,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 11,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 12,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 13,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 14,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 16,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 17,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 18,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 19,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
    {
      id: 20,
      photo: '/img/HomePage/gallery/photo1.png',
      link: '/',
      category: 'printing',
    },
  ];

  return (
    <div className="BrandBook showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="BrandBook__bread">
            <Link to={'/'}>Головна</Link>
            <span>/</span>
            <Link to={'/'}>Дизайн</Link>
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
            <div className="Text-wrap">
              <span>1.</span>
              <span>
                Брендбук охоплює всі аспекти використання бренду та систематизує всі його елементи
              </span>
            </div>
            <div className="Text-wrap">
              <span>2.</span>
              <span>
                У брендбуці прописують правила згідно з якими відбувається виготовлення всієї
                реклами, фірмової продукції, оформлення публікацій тощо
              </span>
            </div>
            <div className="Text-wrap">
              <span>3.</span>
              <span>
                Стане в нагоді абсолютно всім працівникам компанії - керівникам, маркетологам чи
                рекламникам, для того, аби будувати та підтримувати цілісність і вартість бренду
              </span>
            </div>
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
        <Blocks array={brandBookArr}></Blocks>
      </div>

      <div className="How-bcg">
        <div className="How Grid">
          <div className="Title-wrap How__wrap">
            <h5>Як</h5>
            <h5>ми</h5>
            <h5>працюємо</h5>
          </div>

          <div className="How__text">
            <div className="Text-wrap">
              <span>1.</span>
              <span>Виявлення потреб</span>
              <span>
                Опрацьовуємо ваш запит та спільно детально обговорюємо ваш досвід, ідеї, бажання та
                потреби, щоб не пропустити навіть найдрібнішої деталі.
              </span>
            </div>

            <div className="Text-wrap">
              <span>2.</span>
              <span>Аналіз середовища</span>
              <span>
                Досліджуємо ваш ринок та його тренди, аналізуємо цільову аудиторію та будуємо
                портрет потенційного клієнта, щоб правильно представити світові ваш бренд
              </span>
            </div>

            <div className="Text-wrap">
              <span>3.</span>
              <span>Розробка наповнення</span>
              <span>
                Враховуємо всі нюанси та особливості вашого бізнесу та бренду та визначаємо складові
                брендбуку та їхню доцільність у використанні.{' '}
              </span>
            </div>

            <div className="Text-wrap">
              <span>4.</span>
              <span>Розробка дизайну</span>
              <span>
                Розробляємо прототипи та обираємо найкращий, поєднуємо всі деталі та елементи в
                єдине ціле для того, щоб представити вам цілісну концепцію вашого брендбуку!{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="Portfolio Grid">
        <div className="Portfolio__wrap">
          <span className="Portfolio__title">Приклади брендбуків</span>
          <span className="Portfolio__descr">Приклади візиток, флаєрів</span>
        </div>
        <Gallery btn addPhoto={photoExample} className="Portfolio__photos" />
      </div>
      <Order />
      <Footer />
    </div>
  );
};

export default BrandBook;
