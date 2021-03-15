import React from 'react';
import './Print-technology.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import { Link } from 'react-router-dom';
import MateBtn from '../common/buttons/mate-btn/Mate-btn';
import Footer from '../footer/Footer';
import Order from '../common/order/Order';

const PrintTechnology = (props) => {
  let techArr = [
    {
      id: 0,
      hashLink: 'offset',
      title: 'Поліграфічні технології',
      text:
        'Наша компанія застосовує широкий спектр технології, що гарантують якісне відтворення інформації на різноманітних поверхнях та матеріалах.',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 1,
      hashLink: 'digital',
      title: 'Цифровий друк',
      text:
        'Цифровий друк – це процес прямого нанесення тонера або чорнила на поверхню, найчастіше папір або картон. Існують два основних принципи подачі фарби в цифрових пристроях – струменевий та лазерний (електрографічний). Оптимальне застосування при невеликих  тиражах від 1 шт.',
      order: false,
      bcg: false,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },

    {
      id: 2,
      hashLink: 'solvent',
      title: 'Сольвентний друк',
      text:
        'Цифровий друк – це процес прямого нанесення тонера або чорнила на поверхню, найчастіше папір або картон. Існують два основних принципи подачі фарби в цифрових пристроях – струменевий та лазерний (електрографічний). Оптимальне застосування при невеликих  тиражах від 1 шт.',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },

    {
      id: 3,
      hashLink: 'eco',
      title: 'Еко сольвентний друк',
      text:
        'Використовується екосольвентний спосіб нанесення зображення для друку дрібних деталей, наприклад, тексту малого розміру. Максимальна ширина друку – 1,6 м.',
      order: false,
      bcg: false,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 4,
      hashLink: 'stencil',
      title: 'Трафаретний друк (шовкографія)',
      text:
        'Шовкографія – це високотехнологічний вид друку, який застосовується у різних областях діяльності. Завдяки особливостям технології, шовкографія дозволяє наносити зображення, практично, на поверхні будь-якої форми та будь-які матеріали (при цьому повинна бути підібрана відповідна фарба). \n' +
        '\n' +
        'Зараз трафаретний друк застосовується не тільки в поліграфії, але і в текстильній, електронній, автомобільній, скляній, керамічній та інших галузях промисловості.',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 5,
      hashLink: 'tampon',
      title: 'Тампонний друк (тамподрук)',
      text:
        'Тампонний друк (тамподрук) — спосіб нанесення, в процесі якого невелике кліше з гнучкого матеріалу переносить фарбу з рельєфної пластини , на друковану поверню. Даний вид друку використовується для брендування різноманітних сувенірів (ручки, брелоки, ялинкові іграшки). За допомогою такої технології як тамподрук, зручно робити нанесення логотипу на сувеніри невеликого розміру.',
      order: false,
      bcg: false,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 6,
      hashLink: 'sublimation',
      title: 'Сублімація друк',
      text:
        'Сублімаційний друк — це процес нанесення фарби, під час якого вона нагрівається настільки, щоб у формі газу глибоко проникати безпосередньо в структуру друкованого матеріалу.\n' +
        '\n' +
        'Такий друк використовується для брендування синтетичних футболок, блуз, суконь, курток, шапок, бандан, спортивного одягу, подушок, сумок, скатертин, прапорів, рулонних полотен з синтетичних матеріалів (поліестер, нейлон).\n',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 7,
      hashLink: 'termo',
      title: 'Термо трансферний друк',
      text:
        'Термотрансферний друк – це процес перенесення зображення надрукованого спеціальними фарбами під дією температури та тиску, використовуючи проміжний носій (ним може бути плівка або папір). Матеріалом на який наносять зображення, найчастіше, є тканина. Нанесення відбувається із застосуванням спеціального пресу, та використовується при невеликих тиражах від 1 шт.',
      order: false,
      bcg: false,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 8,
      hashLink: 'pressure',
      title: 'Тиснення',
      text:
        'Тиснення – створення зображення на папері, картоні, шкірі, пластику та інших палітурних матеріалах (ледерин, коленкор, бумвініл) за допомогою кліше (форми). Кліше нагрівають до певної температури та натискають, використовуючи фольгу чи фарбу, або нічого. Найчастіше застосовується для брендування ділових щоденників, меню, посвідчень тощо.\n',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 9,
      hashLink: 'embroidery',
      title: 'Вишивка',
      text:
        'Вишивання виконується машинним засобом, з використанням комп’ютерних програм та спеціального обладнання. Послуга необхідна для персоніфікації закладів, візуалізації приналежності речей, аксесуарів до певної торговельної марки чи бренду, готелю, салону, медичного центру тощо.',
      order: false,
      bcg: false,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 10,
      hashLink: 'trav',
      title: 'Хімічне травлення, гальванічна обробка,  емалювання',
      text:
        'Хімічне травлення, гальванічна обробка,  емалювання – методи, які зазвичай використовують для обробки кольорових металів та виробів з металу. Найчастіше сюди відносять бейджі, значки, нагороди, дипломи. Ці вироби з металу вирізняються своєю презентативністю та  закінченістю.',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 11,
      hashLink: 'lazer',
      title: 'Лазерне гравіювання',
      text:
        'Лазерне гравіювання – це промінь лазера, який розігріває поверхню  до високої температури, викликаючи випалювання, в результаті якого утворюється малюнок.\n' +
        '\n' +
        'Можливість змінювати характеристики лазера дозволяє виконувати гравірування на різноманітних поверхнях. Переважно застосовується для брендування металевих поверхонь, ручок, пляшок, брелоків, ліхтариків.\n',
      order: false,
      bcg: false,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
    {
      id: 12,
      hashLink: 'dekol',
      title: 'Деколь',
      text:
        'Деколь – метод нанесення зображення на скляний, фарфоровий і керамічний посуд (горнятка, бокали, тарілки, склянки, попільнички) методом випалювання у печі при високій температурі. За температури вищої від 800°С фаба вплавляється в поверхню виробу, утворюючи надзвичайно стійке зображення.',
      order: true,
      bcg: true,
      img: [
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
        '/img/printTechnology/example.png',
      ],
    },
  ];

  return (
    <div id="hero" className="Print-technology">
      <div className="Hero-bcg-color">
        <div className="Hero-bcg-img">
          <div className="Hero Grid">
            <BreadCrumbs className="Hero__bread ">
              <Link to={'/'}>Головна</Link>
              <span>/</span>
              <Link to={'/'}>Друк</Link>
              <span>/</span>
              <Link to={'/'}>Технології друку</Link>
            </BreadCrumbs>
            <div className="Hero__text-wrap">
              <h2 className="Hero__title">Поліграфічні технології</h2>
              <span className="Hero__text">
                Наша компанія застосовує широкий спектр технології, що гарантують якісне відтворення
                інформації на різноманітних поверхнях та матеріалах.
              </span>
              <img className="Hero__img" src="/img/printTechnology/g.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {techArr.map(({ hashLink, id, text, title, bcg, order, img }) => {
        return (
          <div
            key={id}
            id={hashLink}
            className={`Techno-bcg ${bcg ? 'Techno-white-grey ' : 'Techno-white-bcg '}`}
          >
            <div className="Techno Grid">
              <div className="Techno__wrap">
                <div className="Techno__text-wrap">
                  <div className="Techno__title">{title}</div>
                  <span className="Techno__text">{text}</span>
                  <MateBtn link={true} to={'/order'}>
                    Замовити
                  </MateBtn>
                </div>
                <div className={`Techno__photo ${order ? 'Techno__order' : ''}  `}>
                  <div style={{ background: `url(${img[0]})` }} />
                  <div style={{ background: `url(${img[1]})` }} />
                  <div style={{ background: `url(${img[2]})` }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Order />
      <Footer />
    </div>
  );
};

export default PrintTechnology;
