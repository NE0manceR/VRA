import React, { useEffect, useRef, useState } from 'react';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import './Order-page.scss';
import { Link } from 'react-router-dom';
import GradientBtn1 from '../common/buttons/gradient-btn/Gradient-btn';
import MateBtn from '../common/buttons/mate-btn/Mate-btn';
import Footer from '../footer/Footer';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let inputName = useRef();
  let inputMail = useRef();
  let inputArea = useRef();
  let next = useRef();
  let [name, setName] = useState(false);
  let [mail, setMail] = useState(false);
  let [textArea, setTextArea] = useState(false);
  let [anim, setAnim] = useState(false);
  let [nameErr, setNameErr] = useState(false);
  let [mailErr, setMailErr] = useState(false);
  let [areaErr, setAreaErr] = useState(false);

  function scrollAni() {
    if (next.current.getBoundingClientRect().y < 500) {
      setAnim(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollAni);

    return () => {
      window.removeEventListener('scroll', scrollAni);
    };
  });

  function blur() {
    if (inputName.current.value === '') {
      setName(false);
      setNameErr(false);
      inputName.current.placeholder = 'Ваше ім’я';
    } else {
      setName(true);
    }

    if (inputMail.current.value === '') {
      setMailErr(false);
      setMail(false);
      inputMail.current.placeholder = 'Ваш email';
    } else {
      setMail(true);
    }
    if (inputArea.current.value === '') {
      setAreaErr(false);
      setTextArea(false);
      inputArea.current.placeholder = 'Розкажіть про вашу ідею';
    } else {
      setTextArea(true);
    }
  }

  function focus(inputKey) {
    if (inputKey === 'mail') {
      setMail(true);
      inputMail.current.placeholder = '';
    }
    if (inputKey === 'name') {
      setName(true);
      inputName.current.placeholder = '';
    }

    if (inputKey === 'textarea') {
      setTextArea(true);
      inputArea.current.placeholder = '';
    }
  }

  function inputErr() {
    if (inputName.current.value === '') {
      setNameErr(true);
    }

    if (inputMail.current.value === '') {
      setMailErr(true);
    }

    if (inputArea.current.value === '') {
      setAreaErr(true);
    }
  }

  let orderArr = [
    {
      id: 0,
      number: 1,
      text: 'Наш представник зв’язується з вами найближчим часом',
    },
    {
      id: 1,
      number: 2,
      text: 'Обговорюємо деталі та отримуємо від вас всі необхідні вимоги та матеріали',
    },

    { id: 2, number: 3, text: 'Наша команда оцінює час виконання замовлення та його вартість' },
    { id: 3, number: 4, text: 'Спільно усе погоджуємо та розпочинаємо роботу над вашим проєктом!' },
  ];

  return (
    <div className="Order-wrap">
      <div className="Hero__bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна</Link>
            <Link to={'/'}>/ Замовити</Link>
          </BreadCrumbs>
          <div className="Hero__text-wrap">
            <div className="Hero__text">
              <h5 className="Hero__title">Розкажіть детальніше про ваш проєкт </h5>
              <span className="Hero__descr">
                Чекаємо на ваші найшаленіші ідеї та найяскравіші замовлення на нашій електронній
                скринці
              </span>
              <img src="/img/OrderImg.png" alt="img" />
            </div>
            <form action="">
              <p>
                Заповніть стару добру контактну форму, щоб повідомити нам, як ми можемо бути для вас
                корисними
              </p>
              <div
                className={`Input-border ${name ? 'input-active' : ''} ${
                  nameErr ? 'input-err' : ''
                } `}
              >
                <input
                  onBlur={() => {
                    blur();
                  }}
                  onFocus={() => {
                    focus('name');
                  }}
                  type="text"
                  placeholder="Ваше ім’я"
                  ref={inputName}
                />
              </div>
              <div
                className={`Input-border ${mail ? 'input-active' : ''} ${
                  mailErr ? 'input-err' : ''
                } `}
              >
                <input
                  type="text"
                  placeholder="Ваш email"
                  onBlur={() => {
                    blur();
                  }}
                  onFocus={() => {
                    focus('mail');
                  }}
                  ref={inputMail}
                />
              </div>

              <div
                className={`Input-border text-area ${textArea ? 'input-active' : ''} ${
                  areaErr ? 'input-err' : ''
                } `}
              >
                <textarea
                  onFocus={() => {
                    focus('textarea');
                  }}
                  ref={inputArea}
                  name="message"
                  id=""
                  placeholder="Розкажіть про вашу ідею"
                  onBlur={() => {
                    blur();
                  }}
                />
              </div>
              <div className="btn-wrap">
                <div className="items-wrap">
                  <div className="file-wrap">
                    <svg
                      width="14"
                      height="24"
                      viewBox="0 0 14 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5V17C12 19.757 9.757 22 7 22C4.243 22 2 19.757 2 17V5C2 3.346 3.346 2 5 2C6.654 2 8 3.346 8 5V14C8 14.551 7.551 15 7 15C6.449 15 6 14.551 6 14V6H4V14C4 15.657 5.343 17 7 17C8.657 17 10 15.657 10 14V5C10 2.239 7.761 0 5 0C2.239 0 0 2.239 0 5V17C0 20.866 3.134 24 7 24C10.866 24 14 20.866 14 17V5H12Z"
                        fill="black"
                        fillOpacity="0.6"
                      />
                    </svg>
                    <span>Прикріпити файл</span>
                    <input type="file" />
                  </div>
                  <div className="info-block-wrap">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 8C10.5128 8 10.9355 8.22519 10.9933 8.5153L11 8.58333V14.4167C11 14.7388 10.5523 15 10 15C9.48716 15 9.06449 14.7748 9.00673 14.4847L9 14.4167V8.58333C9 8.26117 9.44772 8 10 8ZM10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5Z"
                        fill="black"
                        fillOpacity="0.38"
                      />
                    </svg>
                    <div className="info-block">
                      <span> Приймаємо макети у форматі PSD, PDF, Ai, CDR, EPS</span>
                      <Link to={''}>Детальніше</Link>
                    </div>
                  </div>
                </div>
                <MateBtn checkInput={inputErr} className="OrderBtn">
                  Надіслати
                </MateBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div ref={next} className="Next Grid">
        <div className="Next__content">
          <h5>Що відбувається після того, як ви надішлете заявку:</h5>
          <div className="Next__numbers-grid">
            {orderArr.map(({ number, id, text }) => {
              return (
                <div key={id} className={`Next__number ${anim ? 'animation' : ''}`}>
                  <div className="Next__number-wrap">
                    <span>{number}</span>
                    <div className="Next__circle">
                      <div />
                      <div />
                    </div>
                    <div className={`Next__line ${anim ? 'animationLine' : ''}`}>
                      <div />
                    </div>
                    <div className="Next__circle">
                      <div />
                      <div />
                    </div>
                  </div>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
