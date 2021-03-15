import React from 'react';
import './Requirements.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Requirements = () => {
  return (
    <div className="Requirements showPage">
      <div className="Hero Grid">
        <BreadCrumbs className="Hero__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/about'}>Про нас</Link>
          <span>/</span>
          <Link to={'/about'}>Вимоги до макету</Link>
        </BreadCrumbs>
        <h5 className="Title">
          <span>Вимоги</span> до <span> макетів</span>
        </h5>
        <div className="Requirements__text-wrap">
          <div>
            <p className="Requirements__second-title">
              Для друку приймаються файли наступних форматів
            </p>
            <p className="Requirements__text">
              <span>.TIFF</span>
            </p>
            <p className="Requirements__text">
              <span>.PSD </span>(Adobe Photoshop)
            </p>
            <p className="Requirements__text">
              <span>.EPS, .AI</span> (Adobe Illustrator з впровадженими лінками)
            </p>
            <p className="Requirements__text">
              <span>.CDR</span> (Corel Draw)
            </p>
          </div>
          <div>
            <p className="Requirements__second-title">Вимоги до векторних форматів:</p>
            <p className="Requirements__text">Масштаб зображення – 1:1</p>
            <p className="Requirements__text">
              Усі шрифти у файлах векторних форматів повинні бути переведеними в криві
            </p>
            <p className="Requirements__text">
              У макетах, підготовлених в COREL DRAW не допускається використання наступних ефектів:
              прозорість
            </p>
            <p className="Requirements__text">(Transparency), лінзи (Lens), тінь (Drop Shadow)</p>
          </div>
          <div>
            <p className="Requirements__second-title">Вимоги до кольорів:</p>
            <p className="Requirements__text">
              Критерієм визначення кольору служить процентне співвідношення кольору (CMYK) в кожній
              конкретній точці зображення. Це не принтерна роздруківка чи відображення макета на
              моніторі комп’ютера.
            </p>
            <br></br>
            <p className="Requirements__text">
              Рекомендуємо замовити безкоштовну кольоропробу, якщо маєте конкретні побажання щодо
              кольору. В іншому випадку, зауваження щодо кольорів не прийматимуться.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Requirements;
