import React, { useEffect, useState } from 'react';
import './Faq.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Faq = () => {
  let [questionArr, setQuestionArr] = useState([]);
  useEffect(() => {
    fetch(`https://admin.vra.com.ua/faqs`)
      .then((response) => response.json())
      .then((search) => {
        setQuestionArr(search);
      });
  }, []);

  return (
    <div className="Faq-bcg Faq showPage">
      <div className="Hero Grid">
        <BreadCrumbs className="Hero__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/about'}>Найпоширеніші запитання</Link>
        </BreadCrumbs>
        <h5 className="Title">
          <span>Найпоширеніші</span> <span> запитання</span>
        </h5>
        <div className="Faq__wrap">
          {questionArr?.map(({ title, description, id }) => {
            return <Accordion key={id} question={title} answer={description} id={id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
