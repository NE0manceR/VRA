/* eslint-disable react/jsx-key */
import React, { useState, useRef, useEffect } from 'react';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import { Link, useParams } from 'react-router-dom';
import './Case-template.scss';
import { EmailShareButton, TelegramShareButton, ViberShareButton } from 'react-share';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import CasePhotoSlider from './case-photo-slider/Case-photo-slider';
import { Fragment } from 'react';
import axios from 'axios';
import GradientBtn1 from '../common/buttons/gradient-btn/Gradient-btn';
import Gallery from '../common/gallery/Gallery';
import GalleryPhoto from '../common/gallety-photo/Gallery-photo';

const CaseTemplate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentUrl !== url) {
      loadCurrentItem();
    }
  });
  const [linkCopy, setLinkCopy] = useState(false);
  let [sliderStatus, setSliderStatus] = useState(false);
  // let [wrapP, setWrapP] = useState(0);
  let { url } = useParams();
  let [currentItem, setCurrentItem] = useState(null);
  let photoArea = 0;
  let [currentCases, setCurrentCases] = useState(null);
  let [currentUrl, setCurrentUrl] = useState(null);
  let [phorosRandom, setPhorosRandom] = useState([]);

  function loadCurrentItem() {
    setCurrentUrl(url);
    axios.get(`https://admin.vra.com.ua/items/${url}`).then((res) => {
      const item = res.data;
      // randomPhotos(item);
      setCurrentItem(item);
      if (item.sub_menus.length) {
        loadCases(item.sub_menus[0]?.case?.id);
      }
    });
  }

  // function randomPhotos(photos) {
  //   let allPhoto = [...photos.photos];
  //   let count = allPhoto.length;
  //   console.log(allPhoto);

  //   for (let i = count; i > 5; i--) {
  //     allPhoto.splice(Math.floor(Math.random() * allPhoto.length), 1);
  //   }

  //   setPhorosRandom(allPhoto);
  // }

  function loadCases(urlCase) {
    axios.get(`https://admin.vra.com.ua/items/byCase/${urlCase}`).then((res) => {
      const item = res.data;
      console.log(item);
      const newItems = [];
      for (let i = 0; i < 2; i++) {
        const rand = 0 + Math.random() * (res.data.length + 1 - 0);
        newItems.push(item[Math.floor(rand)]);
      }
      setCurrentCases(newItems);
    });
  }
  function copyLink(link) {
    navigator.clipboard.writeText(link);
    setLinkCopy(true);

    setTimeout(() => {
      setLinkCopy(false);
    }, 1300);
  }

  let caseRef = useRef();
  function funcSlider() {
    setSliderStatus((sliderStatus = !sliderStatus));
  }

  function setWrap() {
    setWrapP((window.innerWidth - caseRef.current.querySelectorAll('.Photo')[0].clientWidth) / 2);
  }

  return (
    <div ref={caseRef} style={{ position: 'relative' }}>
      <div className="Case-Template showPage">
        <BreadCrumbs>
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/case'}>Кейси</Link>
          <span>/</span>
          <Link to={'/'}>{currentItem?.title}</Link>
          {/* <Link to={'/'}>{currentItem?.sub_menus[0]?.title}</Link> */}
        </BreadCrumbs>
        <div className="Case-template_grid">
          <img src={currentItem?.photo?.url} alt="img" />
          <div className="Template-text">
            <p className="subtitle1">Клієнт</p>
            <p className="subtitle2 client">{currentItem?.client}</p>
            <p className="subtitle1">Дата</p>
            <p className="subtitle2 date">{currentItem?.date}</p>
            {currentItem?.sub_menu ? '<p className="subtitle1">Категорія</p>' : ''}
            {currentItem?.sub_menu
              ? `<p key=${currentItem?.sub_menu?.Link} className="subtitle2">
                  ${currentItem?.sub_menu.linkName}
                </p>`
              : ''}

            {/* {currentItem?.sub_menu && currentItem?.sub_menu.map((subs) => {
              return (
                <p key={subs?.Link} className="subtitle2">
                  {subs?.case_category?.case?.linkName}
                </p>
              );
            })} */}
            {/* включати тільки для логотипів */}
            {currentItem?.author ? (
              <Fragment>
                <p className="subtitle1 author">Автор проєкту</p>
                <p className="subtitle2 author-name">
                  <a href={currentItem?.resume?.url} target="_blank" rel="noreferrer">
                    {currentItem?.author}
                  </a>
                </p>
                <p className="subtitle1">Переглянути презентацію</p>
                {currentItem?.presentation ? (
                  <a target="__blank" href={currentItem?.presentation?.url}>
                    <img className="pdf" src="/img/download-pdf.svg"></img>
                  </a>
                ) : (
                  ''
                )}
              </Fragment>
            ) : null}
            {/* включати тільки для логотипів */}

            <p className="subtitle1">Поділитись проєктом</p>
            <div className="Template-share">
              <div className={`TemplateIcons ${linkCopy ? 'showTips' : ''} `}>
                <div
                  className="Templates__share-link"
                  onClick={() => {
                    copyLink(window.location.href);
                  }}
                >
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
                      d="M19.7778 9.22222V19.2222C19.7778 19.5278 19.5278 19.7778 19.2222 19.7778H9.22222C8.91667 19.7778 8.66667 19.5278 8.66667 19.2222V9.22222C8.66667 8.91556 8.91556 8.66667 9.22222 8.66667H19.2222C19.5289 8.66667 19.7778 8.91556 19.7778 9.22222ZM19.2222 6.44444C20.7544 6.44444 22 7.69111 22 9.22222V19.2222C22 20.7544 20.7544 22 19.2222 22H9.22222C7.69111 22 6.44444 20.7544 6.44444 19.2222V9.22222C6.44444 7.69111 7.69111 6.44444 9.22222 6.44444H19.2222ZM16.4444 2C17.0578 2 17.5556 2.49778 17.5556 3.11111C17.5556 3.72444 17.0578 4.22222 16.4444 4.22222H4.22222V16.4444C4.22222 17.0578 3.72444 17.5556 3.11111 17.5556C2.49778 17.5556 2 17.0578 2 16.4444V4.77778C2 3.24333 3.24333 2 4.77778 2H16.4444Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
                <EmailShareButton
                  url={window.location.href}
                  className=" Templates__share-email Demo__some-network__share-button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                      fill="black"
                    />
                  </svg>
                </EmailShareButton>
                <ViberShareButton
                  url={window.location.href}
                  className="Templates__share-viber Demo__some-network__share-button"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9891 6.09742L23.9818 6.06817C23.3898 3.675 20.721 1.1071 18.2701 0.57287L18.2425 0.567158C14.2784 -0.189053 10.2589 -0.189053 6.29556 0.567158L6.26708 0.57287C3.81706 1.1071 1.14816 3.67517 0.555432 6.06817L0.548855 6.09742C-0.182952 9.43944 -0.182952 12.8288 0.548855 16.1708L0.555432 16.2001C1.12298 18.491 3.593 20.9411 5.95242 21.6148V24.2862C5.95242 25.2532 7.1307 25.728 7.80071 25.0302L10.5073 22.2168C11.0944 22.2496 11.6818 22.2679 12.269 22.2679C14.2644 22.2679 16.2608 22.0792 18.2424 21.7012L18.2701 21.6955C20.7209 21.1612 23.3898 18.5932 23.9817 16.2002L23.989 16.1709C24.7208 12.8288 24.7208 9.43961 23.9891 6.09742ZM21.847 15.6863C21.4518 17.2476 19.4255 19.1886 17.8154 19.5472C15.7077 19.9481 13.5832 20.1193 11.4608 20.0606C11.4185 20.0594 11.378 20.0758 11.3486 20.1061C11.0474 20.4152 9.37241 22.1348 9.37241 22.1348L7.27046 24.2922C7.11676 24.4525 6.84675 24.3433 6.84675 24.1222V19.6968C6.84675 19.6236 6.79456 19.5616 6.72273 19.5474C6.7223 19.5472 6.72195 19.5472 6.72152 19.5471C5.11148 19.1885 3.08586 17.2475 2.68992 15.6862C2.03125 12.6653 2.03125 9.60292 2.68992 6.58206C3.08586 5.02074 5.11148 3.07976 6.72152 2.72112C10.4027 2.02099 14.1351 2.02099 17.8155 2.72112C19.4264 3.07976 21.4519 5.02074 21.8471 6.58206C22.5065 9.60301 22.5065 12.6654 21.847 15.6863Z"
                      fill="white"
                    />
                    <path
                      d="M15.7712 17.7291C15.5237 17.6539 15.2879 17.6034 15.0687 17.5126C12.7986 16.5708 10.7094 15.3557 9.05463 13.4932C8.11356 12.4341 7.37699 11.2383 6.75441 9.97292C6.45912 9.37283 6.21031 8.74929 5.95665 8.12964C5.72541 7.56469 6.06604 6.98105 6.42468 6.55525C6.76124 6.15569 7.19439 5.85002 7.66345 5.62457C8.02953 5.44872 8.39058 5.55015 8.658 5.8604C9.23593 6.53128 9.76696 7.23643 10.1967 8.01411C10.4611 8.49243 10.3886 9.07711 9.90941 9.4026C9.79292 9.4817 9.68682 9.57465 9.57838 9.66396C9.48319 9.74228 9.3937 9.82138 9.32845 9.9274C9.20928 10.1213 9.20357 10.3502 9.28024 10.5611C9.87107 12.1848 10.8669 13.4474 12.5013 14.1276C12.7628 14.2364 13.0254 14.363 13.3267 14.3279C13.8313 14.269 13.9947 13.7155 14.3483 13.4263C14.6938 13.1438 15.1356 13.14 15.5078 13.3756C15.8802 13.6114 16.2411 13.8642 16.5999 14.12C16.9521 14.3709 17.3027 14.6163 17.6275 14.9025C17.9399 15.1776 18.0475 15.5385 17.8715 15.9117C17.5496 16.5955 17.081 17.1642 16.4051 17.5273C16.2143 17.6296 15.9864 17.6628 15.7712 17.7291C15.9864 17.6628 15.5237 17.6539 15.7712 17.7291Z"
                      fill="white"
                    />
                    <path
                      d="M12.2751 4.8427C15.2443 4.92595 17.6832 6.89644 18.2058 9.83198C18.2948 10.3322 18.3265 10.8435 18.3662 11.3512C18.3829 11.5647 18.2619 11.7676 18.0315 11.7704C17.7935 11.7733 17.6864 11.5741 17.6709 11.3608C17.6403 10.9383 17.6191 10.5138 17.5609 10.0949C17.2536 7.88295 15.4898 6.053 13.2882 5.66035C12.9568 5.60124 12.6179 5.58575 12.2822 5.55053C12.0701 5.52829 11.7923 5.51548 11.7453 5.2517C11.7059 5.03058 11.8925 4.85455 12.103 4.84322C12.1601 4.83984 12.2176 4.84252 12.2751 4.8427C12.2176 4.84252 15.2445 4.92595 12.2751 4.8427Z"
                      fill="white"
                    />
                    <path
                      d="M16.7877 10.6924C16.7828 10.7295 16.7803 10.8167 16.7585 10.8987C16.6797 11.1968 16.2276 11.2341 16.1237 10.9333C16.0928 10.8441 16.0882 10.7425 16.088 10.6465C16.087 10.0176 15.9503 9.38934 15.6331 8.84213C15.3071 8.27969 14.809 7.80707 14.2249 7.52088C13.8716 7.34796 13.4897 7.24039 13.1025 7.17644C12.9334 7.1484 12.7623 7.13152 12.5923 7.10781C12.3862 7.07916 12.2761 6.94788 12.286 6.74485C12.2951 6.55463 12.4342 6.41763 12.6415 6.42949C13.3229 6.46808 13.9811 6.61555 14.587 6.93628C15.8189 7.58873 16.5226 8.61841 16.7281 9.99349C16.7373 10.0559 16.7522 10.1175 16.757 10.18C16.7686 10.3342 16.7759 10.4887 16.7877 10.6924C16.7759 10.4887 16.7828 10.7294 16.7877 10.6924Z"
                      fill="white"
                    />
                    <path
                      d="M14.9407 10.6205C14.6923 10.625 14.5594 10.4874 14.5337 10.2598C14.5159 10.1011 14.5018 9.9401 14.4639 9.78554C14.3893 9.48117 14.2275 9.19921 13.9715 9.01271C13.8507 8.9247 13.7137 8.86057 13.5703 8.81903C13.3881 8.76632 13.1988 8.78086 13.0171 8.73638C12.8197 8.688 12.7105 8.52807 12.7416 8.34296C12.7698 8.17437 12.9337 8.04283 13.1179 8.05624C14.2691 8.13932 15.0919 8.73448 15.2093 10.0897C15.2177 10.1854 15.2274 10.2864 15.2062 10.378C15.1697 10.5344 15.0537 10.6129 14.9407 10.6205C15.0537 10.6129 14.6922 10.6249 14.9407 10.6205Z"
                      fill="white"
                    />
                  </svg>
                </ViberShareButton>

                <TelegramShareButton
                  url={window.location.href}
                  className="Templates__share-telegram Demo__some-network__share-button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.84784 14.9848L9.517 19.6382C9.99034 19.6382 10.1953 19.4349 10.4412 19.1907L12.6604 17.0698L17.2588 20.4374C18.1022 20.9074 18.6964 20.6599 18.9239 19.6615L21.9423 5.51787L21.9431 5.51704C22.2106 4.27034 21.4923 3.78283 20.6706 4.08867L2.9285 10.8813C1.71764 11.3513 1.73598 12.0264 2.72267 12.3322L7.25861 13.7431L17.7947 7.15041C18.2905 6.82207 18.7414 7.00374 18.3705 7.33208L9.84784 14.9848Z"
                      fill="#333333"
                    />
                  </svg>
                </TelegramShareButton>
              </div>
            </div>
            <div className="Case-Template__btn">
              <GradientBtn1 link to={'/order'}>
                Замовити
              </GradientBtn1>
            </div>
          </div>
        </div>
      </div>
      <div className="Descr-bcg">
        <div className="Case-description">
          <div className="Case-title-wrap">
            {' '}
            <h3>{currentItem?.title}</h3>
          </div>
          <div className="Goals">
            <div className="Goal">
              <span className="Goal-title">Мета</span>
              <span className="Goals__text" />
              <div className="Goals__dot-wrap-no-active">
                <span className="Goals__text">{currentItem?.aim?.title}</span>
              </div>
              {currentItem?.aim?.list.map((aimList) => {
                return (
                  <div
                    key={'aimList' + aimList.id}
                    className={`Goals__dot-wrap-no-active Goals__dot-wrap-active`}
                  >
                    <div className="Goals__dot" />
                    <span className="Goals__text">{aimList.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="Tasks">
              <span className="Tasks-title">Завдання для агентства</span>
              <ol>
                {currentItem?.tasks.map((taskItem) => {
                  return <li key={'taskItem' + taskItem.id}>{taskItem.title}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      {console.log(currentItem?.photos)}
      <GalleryPhoto items={currentItem?.photos} />
      {/* <Gallery items={currentItem?.photos} /> */}

      {/* <div className="Project-photo">
        <div className="Project-photo__title">
          <h3 className="Project-photo__black">Фото</h3>
          <h3 className="Project-photo__red">проєкту</h3>
        </div>
        <div className={`Project-photo__wrap Project-photo-grid-${phorosRandom.length}`}>
          {phorosRandom.map(({ id, url }) => {
            return (
              <div
                onClick={() => {
                  funcSlider();
                  setWrap();
                }}
                key={id}
                className={`Project-photo__img-wrap area-${++photoArea}`}
              >
                <div className="Project-photo__eye"></div>
                <img className={`Project-photo__bcg photo`} src={url} />
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <CasePhotoSlider
        wrap={wrapP}
        photoArr={phorosRandom}
        sliderActive={sliderStatus}
        closeBtnSlider={() => {
          funcSlider();
        }}
      /> */}
      <div className="Next-bcg Next">
        <div className="Next__wrap">
          <div className="Next__title">
            <h3>Наступні</h3>
            <h3>проєкти</h3>
          </div>
          <div className="Next__projects">
            {currentCases &&
              currentCases.map((itemCase) => {
                return (
                  <div key={itemCase?.id}>
                    <div
                      className="Next__projects_img"
                      style={{ background: `url(${itemCase?.photo?.url})` }}
                    />
                    <div className="Next__project-text">
                      <Link to={`/case/${itemCase?.Link}`}>{itemCase?.client}</Link>
                      <span>{currentItem?.sub_menu?.title}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Order />
      <Footer />
    </div>
  );
};

export default CaseTemplate;
