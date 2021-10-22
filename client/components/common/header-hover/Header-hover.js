/* eslint-disable react/prop-types */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Transition } from 'react-transition-group';
import './Header-hover.scss';

const HeaderHover = (props) => {
  let aboutListLink = [
    { title: 'Контакти', Link: '#contacts' },
    { title: 'Способи оплати', Link: '/payment' },
    { title: 'Вимоги до макету', Link: '/requirements' },
    { title: 'FAQ', Link: '/faq' },
  ];

  return (
    <Transition in={props.hoverStatus} timeout={60}>
      {(state) => (
        <div
          onMouseLeave={() => {
            props.onMouseLeave();
          }}
          className="Hover"
        >
          <div className={`Hover__shadow-block `}>
            <div className={`Hover__img-block `}>
              <img
                className={`Hover__img  ${state} ${
                  props.src === '/img/header/hoverMenu/Image2.png' ? 'print-img' : ''
                }`}
                src={props.id !== -1 ? props.item?.photo?.url : '/img/header/hoverMenu/Image6.jpg'}
                alt="img"
              />
              <div className={`Hover__text-wrap Hover__links-anim ${state}`}>
                <p className="Hover__text">
                  {props.id !== -1
                    ? props.item?.quote
                    : 'Реклама подібна до знань. Коли її мало – це небезпечно'}
                </p>
                <p className="Hover__author">
                  {props.id !== -1 ? props.item?.author : 'Пол Барнум'}
                </p>
              </div>
            </div>
            <div className="Hover__links-block">
              <div>
                {/* {props.item && props.item?.Link === 'design' ? (
                  <div className={`Hover__design Hover__links-anim ${state}`}>
                    {props.item.case_categories.map((item) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                            props.activeHeaderLink(1);
                          }}
                          className="Hover__link"
                          key={item.id}
                          to={`/design/${item.Link}`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : null} */}
                {props?.id === -1 ? (
                  <div className={`Hover__design Hover__links-anim ${state}`}>
                    {aboutListLink.map((item) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                            props.activeHeaderLink(8);
                          }}
                          className="Hover__link"
                          key={'about' + item.Link}
                          to={`/about${item.Link}`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                {props.item && props.item?.Link === 'druk' ? (
                  <div className={`Hover__printing Hover__links-anim ${state}`}>
                    {props.item.case_categories.map((categories) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="Hover__printing-hover" key={`categories${categories.id}`}>
                          <Link
                            onClick={() => {
                              props.closeMenu();
                              props.activeHeaderLink(2);
                            }}
                            className="Hover__link"
                            to={
                              categories.Link === 'tehnologiyi-druku'
                                ? '/printing-technology'
                                : `/case-category/${categories.Link}`
                            }
                          >
                            {categories.title}
                          </Link>
                          {categories.sub_menu_lists &&
                            categories.sub_menu_lists.map((item) => {
                              {
                                item.sub_menu === 9 ? '' : null;
                              }

                              return (
                                <Link
                                  onClick={() => {
                                    props.closeMenu();
                                    props.activeHeaderLink(2);
                                  }}
                                  className="Hover__link"
                                  key={`sub_categories${item.id}`}
                                  smooth
                                  to={`${
                                    categories.Link === 'tehnologiyi-druku'
                                      ? `/printing-technology#${item.Link}`
                                      : item.Link === 'design'
                                      ? `/deisgn/` + item.Link
                                      : `/sub-category/` + item.Link
                                  }`}
                                >
                                  {item.title}
                                </Link>
                                // `/sub-category/` + item.Link
                              );
                            })}
                        </div>
                      );
                    })}
                  </div>
                ) : null}

                {props.item && props.item?.Link !== 'druk' ? (
                  <div
                    className={`Hover__promo Hover__links-anim ${state} ${
                      props.item.linkName === 'Дизайн' ? 'Hover__about' : ''
                    } `}
                  >
                    {props.item.case_categories.map((item) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                            props.activeHeaderLink(props.item?.position);
                          }}
                          className="Hover__link"
                          key={item.id}
                          to={`${
                            item.description === 'Дизайн'
                              ? `/design/${item.Link}`
                              : `/sub-categories/${item.Link}`
                          }`}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
              <div className="Hover__form-link">
                <span className="Hover__form-text">
                  Не знайшли те, що шукали?{' '}
                  <Link className="Hover__form-link_style" to="/order">
                    Заповніть форму
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default HeaderHover;
