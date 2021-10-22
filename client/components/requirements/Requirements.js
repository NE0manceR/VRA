import React, { useEffect, useState } from 'react';
import './Requirements.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Requirements = () => {
  const [req, setReq] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://admin.vra.com.ua/about-requirements`)
      .then((response) => response.json())
      .then((reqInfo) => {
        setReq(reqInfo);
      });
  }, []);

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

            {req.ForPrintList?.map(({ id, title }) => {
              return (
                <p key={id} className="Requirements__text">
                  <span>{title}</span>
                </p>
              );
            })}
          </div>
          <div>
            <p className="Requirements__second-title">Вимоги до векторних форматів:</p>
            {req.FromatsList?.map(({ id, title }) => {
              return (
                <p key={id} className="Requirements__text">
                  {title}
                </p>
              );
            })}
          </div>
          <div>
            <p className="Requirements__second-title">Вимоги до кольорів:</p>
            {req.ColorsList?.map(({ id, title }) => {
              return (
                <p key={id} className="Requirements__text  req-position">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Requirements;
