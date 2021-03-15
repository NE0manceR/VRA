import React, { useState, useEffect, useRef } from 'react';
import './About.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import PartnersSlider from '../common/Partners-slider/Partners-slider';

const About = () => {
  let totalNumbers = [
    {
      status: true,
      advertising: 0,
      customers: 0,
      projects: 0,
    },
  ];
  const numbersBlock = useRef();

  function animation() {
    if (numbersBlock.current.getBoundingClientRect().top < window.innerHeight) {
      showNumbers();
    }
  }

  useEffect(() => {
    if (window.innerWidth > 700) {
      showNumbers();
    } else {
      window.addEventListener('scroll', animation);
    }

    return () => {
      window.removeEventListener('scroll', animation);
    };
  }, []);

  const showNumbers = () => {
    if (numbAnim[0].status === true) {
      numbAnim[0].status = false;
      const addNumbers = setInterval(() => {
        let newNumb = numbAnim.slice();
        if (newNumb[0].advertising < 25) {
          newNumb[0].advertising += 1.5;
        }
        if (newNumb[0].customers < 13000) {
          newNumb[0].customers += 500;
          if (newNumb[0].customers === 12000) {
            clearInterval(addNumbers);
          }
        }
        if (newNumb[0].projects < 3000) {
          newNumb[0].projects += 200;
        }
        setNumAnim(newNumb);
      }, 50);
    }
  };

  let [numbAnim, setNumAnim] = useState(totalNumbers);

  return (
    <div className="About">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна</Link>
            <span>/</span>
            <Link to={'/'}>Про нас</Link>
          </BreadCrumbs>
          <h2 className="Title">
            <span>Ми команда,</span> яка яка працює на <span>результат</span>
          </h2>
          <span className="Text">
            Наша історія розпочалася у 1996 році зі створення ТзОВ ”Престиж Інформ” та реєстрації
            торгової марки рекламного журналу “Панорама Ринку”. Журнал видавався накладом 15000
            екземплярів, а паралельно із ним реалізувався проект “Великий телефонний довідник”.
            Оперативна поліграфія і візуальна реклама спочатку виникли як супутні напрямки, які уже
            згодом переросли в окремі фірми. Розширення продовжується і досі, утворюючи ряд
            структур, що займаються рекламою на білл бордах, сувенірною продукцією, декоруванням
            посуду. Враховуючи численні запити клієнтів, у 2016 році було створено дільницю
            нанесення зображень та виробництва текстильних виробів. І вже у 2020 році відбулась
            інсталяція та запуск устаткування для лазерного гравіювання.
          </span>
        </div>
      </div>

      <div className="Slider">
        <div className="Slider__numbers Grid">
          <div ref={numbersBlock} className="Slider__number-wrap">
            <div>
              <span className="Slider__number">{Math.floor(numbAnim[0].advertising)}+</span>
              <span className="Slider__text">років на ринку реклами</span>
            </div>
            <div>
              <span className="Slider__number">{numbAnim[0].customers}+</span>
              <span className="Slider__text">років на ринку реклами</span>
            </div>
            <div>
              <span className="Slider__number">{numbAnim[0].projects}+</span>
              <span className="Slider__text">років на ринку реклами</span>
            </div>
          </div>
        </div>
        <PartnersSlider className="Partner-bcg" />
      </div>
      <div className="Contacts-bcg">
        <div className="Contacts Grid">
          <h5 className="Title">
            <span>Яке наше</span>
            <span> бачення</span>
          </h5>
          <span id="contacts" className="Text">
            Довкола нас – багатогранний світ дизайну і реклами. Креативні простори спонукають нас
            творити неповторні образи, а відтворення цих образів грунтується на досвіді та
            технологіях. У VRA ми пропонуємо і те й інше!
            <br />
            <br />
            Ми не забуваємо про індивідуальність кожного клієнта, не пропускаємо жодного етапу
            дослідження та підготовки, і все це, аби саме ваш бренд був досконалим!
          </span>
          <h5 className="Title">
            <span>Наші</span>
            <span> контакти</span>
          </h5>
          <span className="Text">
            79005 м.Львів , вул. Шота Руставелі, 8а кв.2
            <br />
            vra.com.ua@gmail.com
            <a className="Text" href="tel:+38(050)3155531">
              +38 (050) 31-555-31
            </a>
            <a className="Text" href="tel:+38(068)1104063">
              +38 (068) 11-040-63
            </a>
            <a className="Text" href="tel:+38(032)29701971">
              +38 (032) 297-01-971
            </a>
          </span>
        </div>
      </div>
      <Order />
      <Footer />
    </div>
  );
};

export default About;
