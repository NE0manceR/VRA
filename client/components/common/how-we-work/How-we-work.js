import React, { Fragment, useState, useEffect, useRef } from 'react';
import './How-we-work.scss';
import { data } from '../../../../public/data';

import { HashLink as Link } from 'react-router-hash-link';

function HowWeWork() {
  let item = data.howWeWork;
  let [cardItem, setItem] = useState(data.howWeWorkCard);
  let [card, setCard] = useState(0);
  let [active, setActive] = useState(false);
  let [selected, setSelected] = useState(0);
  let tab = useRef();

  let tabName = [
    { id: 0, name: 'Вивчаємо та аналізуємо' },
    { id: 1, name: 'Проектування та дизайн' },
    { id: 2, name: 'Вивчаємо та аналізуємо' },
  ];

  let [mobTabName, setMobTabName] = useState(tabName[card].name);

  function changeCard(cardKey) {
    setTimeout(() => {
      setActive(true);
      setCard((card = cardKey));
    }, 500);
  }

  function sliderDown(numb) {
    if (numb === 0) {
      return;
    }
    numb--;
    let mobtab = tabName[numb].name;

    setCard(numb);
    setMobTabName(mobtab);
  }

  function sliderUp(numb) {
    if (numb === 2) {
      return;
    }
    numb++;
    let mobtab = tabName[numb].name;

    setCard(numb);
    setMobTabName(mobtab);
  }

  return (
    <div className="HowWeWork-bcg">
      <div className="HowWeWork Grid">
        <div className="HowWeWork__text">
          <h2 className="Title ">
            <span>Ми допоможемо</span> вам створити, покращити та втілити в життя ваш{' '}
            <span> продукт</span>
          </h2>
        </div>
        <span id={`${window.screen.width <= 700 ? 'tab' : ''}`} className="how-we-work">
          Як ми працюємо
        </span>
        <div
          style={{ height: active ? tab.current.clientHeight : 'auto' }}
          className="HowWeWork__list"
        >
          <div
            ref={tab}
            className={`HowWeWork__tab-list ${active ? 'active-tab' : 'dis-active-tab'}`}
          >
            <div className={`Work-card__nav ${active ? 'active-nav' : ''}`}>
              <div className="Tab-slider">
                <span className="Tab-slider-name">{mobTabName}</span>
                <div
                  onClick={() => {
                    sliderDown(card);
                  }}
                >
                  <svg
                    className={`${card !== 0 ? 'active-arrow' : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.11997 1.29L5.99997 5.17L9.87997 1.29C10.27 0.899998 10.9 0.899998 11.29 1.29C11.68 1.68 11.68 2.31 11.29 2.7L6.69997 7.29C6.30997 7.68 5.67997 7.68 5.28997 7.29L0.699971 2.7C0.309971 2.31 0.309971 1.68 0.699971 1.29C1.08997 0.909998 1.72997 0.899998 2.11997 1.29Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    sliderUp(card);
                  }}
                >
                  <svg
                    className={`${card !== 2 ? 'active-arrow' : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.11997 1.29L5.99997 5.17L9.87997 1.29C10.27 0.899998 10.9 0.899998 11.29 1.29C11.68 1.68 11.68 2.31 11.29 2.7L6.69997 7.29C6.30997 7.68 5.67997 7.68 5.28997 7.29L0.699971 2.7C0.309971 2.31 0.309971 1.68 0.699971 1.29C1.08997 0.909998 1.72997 0.899998 2.11997 1.29Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>

              {tabName.map(({ id, name }) => {
                return (
                  <Fragment key={id}>
                    <span
                      className={`tabs ${selected === id ? 'active-section' : ''}`}
                      onClick={() => {
                        setSelected(id);
                        setCard((card = id));
                      }}
                      key={id}
                    >
                      {name}
                    </span>
                  </Fragment>
                );
              })}
            </div>
            <div className="shadow-wrap">
              <div className={`Work-card ${active ? 'show-content' : 'hide-content'}`}>
                <div className="Work-card__close">
                  <svg
                    onClick={() => {
                      setActive(false);
                    }}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2929 13.0369C15.6834 13.4274 15.6834 14.0606 15.2929 14.4511L14.4511 15.2929C14.0606 15.6834 13.4274 15.6834 13.0369 15.2929L8 10.256L2.96311 15.2929C2.57258 15.6834 1.93942 15.6834 1.54889 15.2929L0.707106 14.4511C0.316582 14.0606 0.316582 13.4274 0.707107 13.0369L5.744 8L0.707107 2.96311C0.316582 2.57258 0.316582 1.93942 0.707107 1.54889L1.54889 0.707106C1.93942 0.316582 2.57258 0.316582 2.96311 0.707107L8 5.744L13.0369 0.707107C13.4274 0.316582 14.0606 0.316582 14.4511 0.707107L15.2929 1.54889C15.6834 1.93942 15.6834 2.57258 15.2929 2.96311L10.256 8L15.2929 13.0369Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>

                <div className="Work-card__title-block">
                  <div className="Work-card__wrap">
                    <img src={data.howWeWork[card].icon} alt="img" />
                    <h6>{cardItem[card].title}</h6>
                  </div>
                </div>
                <div className="Work-card__descr-wrap">
                  <div>
                    <span className="Work-card__descr-title">{cardItem[card].blockName1}</span>
                    {cardItem[card].blockText1.map(({ text, id }) => {
                      return (
                        <span key={id} className="Work-card__descr">
                          {text}
                        </span>
                      );
                    })}
                  </div>
                  <div>
                    <span className="Work-card__descr-title">{cardItem[card].blockName2}</span>
                    {cardItem[card].blockText2.map(({ text, id }) => {
                      return (
                        <span key={id} className="Work-card__descr">
                          {text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`HowWeWork__list-wrap ${active ? 'dis-active-list ' : 'active-wrap'}`}>
            {item.map(({ id, icon, title, description }) => {
              return (
                <div key={id} className="HowWeWork__list-item">
                  <img className="HowWeWork__icon" src={icon} alt="img" />
                  <p className="HowWeWork__title">{title}</p>
                  <p className="HowWeWork__description">{description}</p>
                  <Link
                    smooth
                    to={`/#tab`}
                    onClick={() => {
                      setSelected(id);
                      changeCard(id);
                    }}
                    className="HowWeWork__more"
                  >
                    Більше
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
