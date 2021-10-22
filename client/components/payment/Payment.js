import React, { useEffect, useState } from 'react';
import './Payment.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Payment = () => {
  let [payment, setPayment] = useState({});
  let [cash, setCash] = useState({});
  let [card, setCArd] = useState({});
  let [bancAcc, setBancAcc] = useState({});

  useEffect(() => {
    fetch(`https://admin.vra.com.ua/about-payments`)
      .then((response) => response.json())
      .then((payments) => {
        setCash(payments.AboutPayment[0]);
        setCArd(payments.AboutPayment[1]);
        setBancAcc(payments.AboutPayment[2]);
        setPayment(payments);
      });
  }, []);

  return (
    <div className="Payment showPage">
      <div className="Hero-bcg">
        <div className="Hero Grid">
          <BreadCrumbs className="Hero__bread">
            <Link to={'/'}>Головна</Link>
            <span>/</span>
            <Link to={'/about'}>Про нас</Link>
            <span>/</span>
            <Link to={'/about'}>Способи оплати</Link>
          </BreadCrumbs>
          <h5 className="Title">
            <span>Способи </span> <span> оплати</span>
          </h5>

          <div className="Payment__text-wrap">
            <p className="Payment__main-title">{payment.Title}</p>
            <div>
              <p className="Payment__second-title">1. {cash.title}</p>
              {cash.ItemList?.map(({ title, id }) => {
                return (
                  <p key={id} className="Payment__text">
                    <span className="text-dot"></span>
                    {title}
                  </p>
                );
              })}
            </div>
            <div>
              <p className="Payment__second-title">2. {card.title}</p>
              {card.ItemList?.map(({ title, id }) => {
                return (
                  <p key={id} className="Payment__text">
                    {id !== 70 ? <span className="text-dot"></span> : null}
                    {title}
                  </p>
                );
              })}
            </div>
            <div>
              <p className="Payment__second-title">3. {bancAcc.title}</p>
              <p className="Payment__text">{bancAcc.AfterListTitle}</p>
            </div>
            <div className="Payment__block-wrap">
              <div className="Payment__block">
                <p className="Payment__block-title">{payment.PaySecurely?.title}</p>
                {payment.PaySecurely?.List.map(({ title, id }) => {
                  return (
                    <p key={id} className="Payment__block-text">
                      {title}
                    </p>
                  );
                })}
              </div>
              <div className="Payment__block">
                <p className="Payment__block-title">{payment.GetFast?.title}</p>
                {payment.GetFast?.List.map(({ title, id }) => {
                  return (
                    <p key={id} className="Payment__block-text">
                      {title}
                    </p>
                  );
                })}
              </div>
              <div className="Payment__block">
                <p className="Payment__block-title">Приєднуйтесь до спільноти</p>
                <a target="__blank" href="https://www.facebook.com/vra.com.ua">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.0988 0C10.7902 0 0 10.7902 0 24.0988C0 37.4073 10.7902 48.1975 24.0988 48.1975C37.4073 48.1975 48.1975 37.4073 48.1975 24.0988C48.1975 10.7902 37.4073 0 24.0988 0ZM24.0978 4.01649C35.1712 4.01649 44.1801 13.0254 44.1801 24.0988C44.1801 35.1722 35.1712 44.1811 24.0978 44.1811C13.0244 44.1811 4.01548 35.1722 4.01548 24.0988C4.01548 13.0254 13.0244 4.01649 24.0978 4.01649ZM16.0649 20.0823H20.0813V16.6844C20.0813 13.6399 21.6839 12.0494 25.2947 12.0494H30.1225V17.07H27.2266C26.2988 17.07 26.106 17.4495 26.106 18.4094V20.0823H30.1225L29.761 24.0988H26.106V36.1481H20.0813V24.0988H16.0649V20.0823Z"
                      fill="#333333"
                    />
                  </svg>
                </a>
                <a target="__blank" href="https://www.instagram.com/vra.com.ua/?hl=en">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.9015 0C11.593 0 0.802734 10.7902 0.802734 24.0988C0.802734 37.4073 11.593 48.1975 24.9015 48.1975C38.21 48.1975 49.0003 37.4073 49.0003 24.0988C49.0003 10.7902 38.21 0 24.9015 0ZM24.9005 4.01649C35.9739 4.01649 44.9828 13.0254 44.9828 24.0988C44.9828 35.1722 35.9739 44.1811 24.9005 44.1811C13.8271 44.1811 4.81821 35.1722 4.81821 24.0988C4.81821 13.0254 13.8271 4.01649 24.9005 4.01649ZM29.7716 14.2926C28.5004 14.2344 28.1188 14.2223 24.9016 14.2223C21.6844 14.2223 21.3029 14.2324 20.0337 14.2906C16.7643 14.4392 15.242 15.9876 15.0934 19.2308C15.0372 20.5 15.0231 20.8816 15.0231 24.0988C15.0231 27.316 15.0372 27.6975 15.0934 28.9667C15.244 32.202 16.7602 33.7564 20.0337 33.907C21.3029 33.9652 21.6844 33.9773 24.9016 33.9773C28.1208 33.9773 28.5004 33.9632 29.7716 33.907C33.041 33.7584 34.5612 32.206 34.7118 28.9667C34.768 27.6975 34.7801 27.316 34.7801 24.0988C34.7801 20.8816 34.768 20.5021 34.7118 19.2308C34.5612 15.9896 33.039 14.4412 29.7716 14.2926ZM24.9015 12.0494C21.6281 12.0494 21.2204 12.0634 19.9331 12.1237C15.5552 12.3245 13.1252 14.7525 12.9244 19.1304C12.8662 20.4177 12.8521 20.8274 12.8521 24.0988C12.8521 27.3722 12.8662 27.7819 12.9244 29.0671C13.1252 33.4431 15.5552 35.875 19.9331 36.0759C21.2204 36.1341 21.6281 36.1481 24.9015 36.1481C28.1749 36.1481 28.5846 36.1341 29.8719 36.0759C34.2418 35.875 36.6818 33.4471 36.8786 29.0671C36.9368 27.7819 36.9509 27.3722 36.9509 24.0988C36.9509 20.8274 36.9368 20.4177 36.8786 19.1304C36.6818 14.7585 34.2498 12.3225 29.8719 12.1237C28.5846 12.0634 28.1749 12.0494 24.9015 12.0494ZM18.715 24.0988C18.715 20.6808 21.4864 17.9115 24.9024 17.9115C28.3184 17.9115 31.0897 20.6828 31.0897 24.0988C31.0897 27.5168 28.3184 30.2862 24.9024 30.2862C21.4864 30.2862 18.715 27.5168 18.715 24.0988ZM24.9025 28.1152C22.6834 28.1152 20.886 26.3178 20.886 24.0987C20.886 21.8816 22.6834 20.0823 24.9025 20.0823C27.1196 20.0823 28.9209 21.8796 28.9209 24.0987C28.9209 26.3178 27.1196 28.1152 24.9025 28.1152ZM29.8848 17.6684C29.8848 16.8692 30.5335 16.2225 31.3307 16.2225C32.132 16.2225 32.7787 16.8692 32.7787 17.6684C32.7787 18.4677 32.13 19.1144 31.3307 19.1144C30.5315 19.1144 29.8848 18.4657 29.8848 17.6684Z"
                      fill="#333333"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Order />
      <Footer />
    </div>
  );
};

export default Payment;
