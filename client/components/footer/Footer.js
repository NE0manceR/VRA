import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { Link as NavLink } from 'react-router-dom';
import { subscriberDataHeaders } from '../../services/dataService';

const Footer = () => {
  const [footerLink, setFooterLink] = useState();

  useEffect(() => {
    subscriberDataHeaders.subscribe((res) => {
      setFooterLink(res);
    });
  }, []);

  return (
    <div className="Footer-bcg">
      <div className="Footer">
        <div className="Footer__logo-wrap">
          <img src="/img/HomePage/footerLogo.svg" alt="img" />
          <div className="Footer__social-wrap">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/vra.com.ua">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM4.5026 8.75163C4.4879 8.86421 4.47319 8.97679 4.45728 9.08917V14.9084C4.46604 14.9682 4.4761 15.0279 4.48617 15.0876L4.48617 15.0876C4.50787 15.2163 4.52958 15.345 4.53821 15.4744C4.68451 17.6655 6.19659 19.2885 8.38397 19.3707C10.8028 19.4615 13.23 19.4593 15.649 19.372C17.8364 19.2931 19.4197 17.6739 19.488 15.4861C19.5607 13.1631 19.5607 10.8343 19.488 8.51129C19.4197 6.32354 17.8359 4.70416 15.6489 4.62542C13.2299 4.53827 10.8032 4.54266 8.38379 4.62579C6.37439 4.695 4.96906 6.04559 4.60889 8.03064C4.56558 8.26953 4.53409 8.51055 4.5026 8.75161L4.5026 8.75163ZM13.0297 18.0818C12.6871 18.0786 12.3445 18.0754 12.002 18.0754C11.6639 18.0754 11.3257 18.0786 10.9875 18.0817H10.9875H10.9873C10.232 18.0888 9.47673 18.0958 8.72272 18.0677C7.00299 18.004 5.93365 16.9907 5.88696 15.2785C5.82764 13.0933 5.82764 10.9043 5.88696 8.71911C5.93365 7.00671 7.00299 5.96942 8.72253 5.93335C10.9218 5.8872 13.1235 5.88684 15.3228 5.93335C17.0555 5.97015 18.1224 7.02887 18.1629 8.76031C18.2131 10.9184 18.2131 13.0792 18.1629 15.2371C18.1224 16.9689 17.0562 18.0035 15.3228 18.0677C14.5593 18.0959 13.7946 18.0889 13.03 18.0818H13.0298H13.0297ZM8.15576 12C8.15576 9.87708 9.87695 8.15607 11.9999 8.15607C14.123 8.15607 15.844 9.87708 15.844 12C15.844 14.1231 14.123 15.8441 11.9999 15.8441C9.87695 15.8441 8.15576 14.1231 8.15576 12ZM9.47925 12C9.47925 13.3922 10.6077 14.5206 11.9999 14.5206C13.392 14.5206 14.5205 13.3922 14.5205 12C14.5205 10.6078 13.392 9.47937 11.9999 9.47937C10.6077 9.47937 9.47925 10.6078 9.47925 12ZM16.9828 7.98065C16.9828 8.48566 16.5734 8.89508 16.0684 8.89508C15.5634 8.89508 15.1538 8.48566 15.1538 7.98065C15.1538 7.47546 15.5634 7.06604 16.0684 7.06604C16.5734 7.06604 16.9828 7.47546 16.9828 7.98065Z"
                  fill="url(#paint0_radial)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(4.91986 20.9741) scale(26.4678)"
                  >
                    <stop stopColor="#FAE100" />
                    <stop offset="0.0544" stopColor="#FADC04" />
                    <stop offset="0.1167" stopColor="#FBCE0E" />
                    <stop offset="0.1829" stopColor="#FCB720" />
                    <stop offset="0.2514" stopColor="#FE9838" />
                    <stop offset="0.3054" stopColor="#FF7950" />
                    <stop offset="0.4922" stopColor="#FF1C74" />
                    <stop offset="1" stopColor="#6C1CD1" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/vra.com.ua/?hl=en">
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.9787 12.4875H14.7584L14.994 10.2009H12.9789V8.85384C12.9789 8.34861 13.3131 8.22998 13.5508 8.22998H15V6.00835L13.0027 6C10.7861 6 10.2824 7.6585 10.2824 8.71763V10.1987H9V12.4875H10.2824V19H12.9787V12.4875Z"
                  fill="#3B5998"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="Footer__links">
          <div className="Footer__link-wrap">
            <NavLink className="Footer__link-title" to={'/case'}>
              Кейси
            </NavLink>
            <NavLink className="Footer__link" to={'/services/design'}>
              Дизайн
            </NavLink>
            <NavLink className="Footer__link" to={'/services/druk'}>
              Друк
            </NavLink>
            <NavLink className="Footer__link" to={'/services/promo-suveniri'}>
              Промо-сувеніри
            </NavLink>
            <NavLink className="Footer__link" to={'/services/vizualna-reklama'}>
              Візуальна реклама
            </NavLink>
            <NavLink className="Footer__link" to={'/services/tekstil'}>
              Текстиль
            </NavLink>
          </div>
          {footerLink?.map((item) => {
            return (
              <div key={item.id} className="Footer__link-wrap">
                {item.linkName === 'Кейси' ? (
                  <NavLink className="Footer__link-title" to={'/case'}>
                    Кейси
                  </NavLink>
                ) : (
                  <NavLink className="Footer__link-title" to={`/services/${item.Link}`}>
                    {item.linkName}
                  </NavLink>
                )}

                {item.case_categories.map((it) => {
                  return (
                    <NavLink
                      className="Footer__link"
                      key={it.id}
                      to={
                        it.description === 'Дизайн'
                          ? `/design/${it.Link}`
                          : `/sub-categories/${it.Link} `
                      }
                    >
                      {it.title}
                    </NavLink>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="Under">
        <div className="Under__footer-wrap">
          <NavLink className="Under__link" to="/about/payment">
            Способи оплати
          </NavLink>
          <NavLink className="Under__link" to="/about/payment">
            Вимоги до макету
          </NavLink>
          <NavLink className="Under__link" to="/about/faq">
            FAQ
          </NavLink>
          <NavLink className="Under__link" to="/about#contacts">
            Контакти
          </NavLink>
          <span className="Right">© Copyright 2021. VRA All Right Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
