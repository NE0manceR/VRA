import React, { useEffect, useRef, useState } from 'react';
import './Page-3D.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import { Link } from 'react-router-dom';
import Slider3D from '../common/slider-3D/Slider-3D';
import SliderAR from '../common/slider-AR/Slider-AR';
import { Fragment } from 'react';
import Gallery3D from '../common/gallery-3D/Gallery-3D';
import OrderForm from '../common/order/Order';
import Footer from '../footer/Footer';
import axios from 'axios';

const Page3D = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pineapple = useRef();
  const hero = useRef();
  const text = useRef();

  let y = 1;
  let textY = 1;
  let scrollY = 0;
  let scrollYtext = 0;
  let textArr = [
    {
      id: 1,
      title: 'Старт і оцінка',
      text1:
        'Перш за все, ми допомагаємо вам зрозуміти тривимірний процес, коли ми визначаємо вашу кінцеву мету. ',
      text2:
        'Потім ми надаємо вам відповідні приклади, які відповідають бюджету, щоб ви мали реальне уявлення про те, що є можливим.',
      text3:
        'Оцінки базуються на щоденних та тижневих годинах студії, а також на основі ставок за проектами.',
      class: 'block-1',
    },
    {
      id: 2,
      title: 'Збір активів',
      text1:
        'Залежно від типу 3D проєкту, який вам потрібен, нам може знадобитися запит деяких ваших робочих файлів. Прикладом можуть бути 3D-моделі та посилання на матеріали, генеральні плани, плани поверхів та прототипи фото.',
      text2:
        'Потім ми детально аналізуємо ці файли та визначаємо, чи містять вони все необхідне для тривимірного проєкту, який ви плануєте.',
      text3: '',
    },
    {
      id: 3,
      title: 'Попередній перегляд',
      text1:
        'А ось тут починається магія! Ми досліджуємо простір для роботи, розміщення елементів та камери',
      text2:
        'На цьому етапі реалізовуємо підґрунтя для головної композиції та візуалізації низької якості.',
      text3:
        'Після визначення загальної композиції, ми переходимо до освітлення, текстур та більш тонких деталей.',
    },
    {
      id: 4,
      title: 'Внесення правок',
      text1:
        'Після того, як основний напрям композиції задано, заздалегідь визначена кількість підходів дозволяє налаштувати дрібні деталі, включаючи освітлення, матеріали та загальну естетику.',
      text2: '',
      text3: '',
    },
    {
      id: 5,
      title: 'Остаточне затвердження',
      text1:
        'Перед тим, як видати ваші остаточні зображення, ми забезпечуємо попередній перегляд робочих сцен з великою роздільною здатністю...',
      text2:
        'На цьому етапі ми приймаємо останні домовленості, щоб розпочати остаточне завершення візуалізації ',
      text3: '',
    },
    {
      id: 6,
      title: 'Остаточні рендери',
      text1:
        'Після остаточного відтворення ми, як правило, використовуємо інші програми, щоб внести окремі деталі, для того, щоб ваш продукт або сцена виглядали якомога красивішими та реалістичнішими!',
      text2: '',
      text3: '',
    },
  ];

  function pineappleScroll() {
    if (scrollY <= window.scrollY) {
      if (y > 1.1) {
        y = 1.1;

        return;
      }
      y += 0.01;
    } else {
      if (y < 1) {
        y = 1;

        return;
      }
      y -= 0.01;
    }

    scrollY = window.scrollY;

    if (window.innerWidth <= 500) {
      pineapple.current.style.transform = `matrix(${y}, 0, 0, ${y}, 0, 0) translateY(0)`;

      return;
    }

    pineapple.current.style.transform = `matrix(${y}, 0, 0, ${y}, 0, 0) translateY(-48px)`;
  }

  function textScroll() {
    if (scrollYtext <= window.scrollY) {
      if (textY < 0.7) {
        textY = 0.8;

        return;
      }
      textY -= 0.01;
      text.current.style.transform = `matrix(${textY}, 0, 0, ${textY}, 0, 0) translateY(${200}px)`;
    } else {
      if (textY > 1) {
        textY = 1;

        return;
      }
      textY += 0.01;
      text.current.style.transform = `matrix(${textY}, 0, 0, ${textY}, 0, 0)`;
    }
    scrollYtext = window.scrollY;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', pineappleScroll);
    window.addEventListener('scroll', textScroll);
    text.current.style.transform = ` matrix(1, 0, 0, 1, 0, 0) translateY(0)`;

    return () => {
      window.removeEventListener('scroll', pineappleScroll);
      window.addEventListener('scroll', textScroll);
    };
  });

  let [items, setItems] = useState();

  useEffect(() => {
    axios.get(`https://admin.vra.com.ua/case-categories/url/3d`).then((res) => {
      console.log(res?.data?.items);

      setItems(res);
    });
  }, []);

  return (
    <div className="D3">
      <div ref={hero} className="Hero Grid">
        <BreadCrumbs className="Hero__bread ">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={`/services/${items?.data?.case?.Link}`}>{items?.data?.description}</Link>
          <span>/</span>
          <Link to={'/'}>3D Дизайн</Link>
        </BreadCrumbs>
        <div className="Hero__text-wrap">
          <span ref={text} className="Hero__text">
            3D дизайн
          </span>
          <img
            ref={pineapple}
            className="Hero__Pineapple"
            src="/img/3Dpage/pineapple.png"
            alt="img"
          />
          <span className="Hero__description">
            Забудьте про правила та шаблони. Виходьте за межі плоских уявлень. Пориньте в реальність
            у кожному елементі. ЗD – те, що вражає насправді.
          </span>
        </div>
      </div>
      <div className="Zero-bcg">
        <div className="Zero">
          <div className="Zero__text-block-1">
            <span>3D дизайн</span>
            <span>Нуль фотографії 100% 3D.</span>
          </div>
          <div className="Zero__text-block-2">
            <span>
              Ера фото закінчилась. В сучасному світі 3D захоплює майже будь яку індустрію і
              пропонує нешаблонні рішення від талановитих дизайнерів. Тримай хвилю сучасності.
            </span>
          </div>
        </div>
      </div>
      <div className="Photo Grid">
        <div className="Photo__block">
          <div className="Photo__photo-block-1">
            <div>
              <img src={items?.data?.items[1]?.photo?.url} alt="img" />
              <span className="Photo__title">
                Кольори, що здатні підкреслити витонченість та індивідуальність продукту.{' '}
              </span>
              <Link to={`/case/${items?.data?.items[1]?.Link}`} className="Photo__description">
                Переглянути проєкт в деталях
              </Link>
            </div>
          </div>
          <div className="Photo__photo-block-2">
            <div>
              <img src={items?.data?.items[2]?.photo?.url} alt="img" />
              <span className="Photo__title">
                Природність форм та текстур, тонкощі та легкість кожної деталі для гармонійної
                композиції.{' '}
              </span>
              <Link to={`/case/${items?.data?.items[2]?.Link}`} className="Photo__description">
                Переглянути проєкт в деталях
              </Link>
            </div>
            <div className="Photo__img-2">
              <div className="Photo__img-cover">
                <img src={items?.data?.items[0]?.photo?.url} alt="img" />
              </div>
              <span className="Photo__title">
                Деталі, що довершують індивідуальність. Стиль, що розповість про продукт з першого
                погляду.{' '}
              </span>
              <Link to={`/case/${items?.data?.items[0]?.Link}`} className="Photo__description">
                Переглянути проєкт в деталях
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Slider3D />
      <div className="Realism-bcg">
        <div className="Realism Grid">
          <div className="Realism__content">
            <p>Якість</p>
            <p>Неймовірний фотореалізм.</p>

            <p>
              Гарно відтворене середовище, реалістичні візуалізації продуктів, пейзажі віртуальної
              реальності та елегантно виконані 3D-анімації. Речі, які змушують вас сказати ВАУ.
            </p>
            <div className="Realism__glass">
              <img src="/img/3Dpage/glass.png" alt="img" />
            </div>

            <div>
              <img className="coma" src="/img/3Dpage/“”.svg" alt="img" />
              <span>
                Хлопці ... це абсолютний успіх. Думаю, нам більше ніколи не доведеться робити
                фотосесію
              </span>
              <img className="coma" src="/img/3Dpage/“” (1).svg" alt="img" />
              <span className="aisma">Співзасновник AISMA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Photo-bcg">
        <div className="Photo Grid">
          <div className="Photo__block">
            <div className="Photo__photo-block-1">
              <div className="Photo__wrap-1">
                <div>
                  <img src={items?.data?.items[8]?.photo?.url} alt="img" />
                </div>
                <span className="Photo__title">
                  Стиль Eco-Loft – втілення концептуальної ідеї та використання в архітектурних і
                  технічних рішеннях{' '}
                </span>
                <Link to={`/case/${items?.data?.items[8]?.Link}`} className="Photo__description">
                  Переглянути проєкт в деталях
                </Link>
              </div>
            </div>
            <div className="Photo__photo-block-2">
              <div>
                <img src={items?.data?.items[10]?.photo?.url} alt="img" />
                <span className="Photo__title">
                  Пастельна гама кольорів для підкреслення нестандарності продукту.{' '}
                </span>
                <Link to={`/case/${items?.data?.items[10]?.Link}`} className="Photo__description">
                  Переглянути проєкт в деталях
                </Link>
              </div>
              <div>
                <img src={items?.data?.items[9]?.photo?.url} alt="img" />

                <span className="Photo__title">
                  Точність пропрацювання кожного елементу – коли деталі надважливі{' '}
                </span>
                <Link to={`/case/${items?.data?.items[9]?.Link}`} className="Photo__description">
                  Переглянути проєкт в деталях
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Pepsi ">
        <img src="/img/3Dpage/HightResolution/pepsi_2322х1536.png" alt="img" />
        <div className="Pepsi__text-wrap Grid">
          <span>
            Твій колір, твій вибір, твій стиль! Кожна ідея повинна бути втіленою.
            <br></br>
            <br></br>
            Зрозумій свій потенціал та нашаровуй довіру клієнтів.
          </span>
        </div>
      </div>

      <div className="Absolute Grid">
        <p className="Absolute__section-name">3D у веб та додатках</p>
        <p className="Absolute__trend">
          Aбсолютний <br></br>тренд<br></br>2021.
        </p>
        <img className="Absolute__man" src="/img/3Dpage/man.png" alt="img" />
        <p className="Absolute__description">
          Стиль 3D є фаворитом у сучасних додатках та на сайтах. Максимум фантазії, персоналізоване
          відображення бренду та візуальне задоволення користувачів.
        </p>
        <div className="Absolute__to-do">
          <span>To Do List</span>
          <span>Додаток зі списком задач.</span>
          <Link to={'/'}>Переглянути кейс</Link>
        </div>
      </div>
      <SliderAR />
      <div className="Absolute-bcg">
        <div className="Absolute Grid">
          <p className="Absolute__section-name">3D у веб та додатках</p>
          <p className="Absolute__trend">
            Ми знаємо,<br></br> що 3D може <br></br> бути складним.
          </p>
          <p className="Absolute__description">
            Нашою метою у ВРА є спрощення процесу. Ми робимо його приємним, захоплюючим, а головне
            успішним для всієї вашої команди.
          </p>
        </div>

        <div className="Block-text ">
          {textArr.map(({ id, text1, text2, text3, title }) => {
            return (
              <div key={id} className={`block block-${id}`}>
                <span className="step">Крок {id}</span>
                <div>
                  <span>{title}</span>
                  <span>
                    {text1}
                    {text2.length === 0 ? null : (
                      <Fragment>
                        <br></br>
                        <br></br>
                      </Fragment>
                    )}
                    {text2}
                    {text3.length === 0 ? null : (
                      <Fragment>
                        <br></br>
                        <br></br>
                      </Fragment>
                    )}
                    {text3}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="block-line"></div>
        </div>
      </div>
      <Gallery3D />
      <div className="Form-bcg">
        <OrderForm newText>Готові вразити світ з 3D ідеєю?</OrderForm>
      </div>
      <Footer />
    </div>
  );
};

export default Page3D;
