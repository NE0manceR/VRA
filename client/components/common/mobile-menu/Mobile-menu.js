import React, { useState, useRef, Fragment } from 'react';
import './Mobile-menu.scss';
import { Transition } from 'react-transition-group';
import { HashLink as Link } from 'react-router-hash-link';

import MobMenuLis from './mob-menu-list/Mob-menu-lis';

const MobileMenu = (props) => {
  let mainMenu = useRef(null);
  let printItem = useRef(null);
  let [showPrint, setShowPrint] = useState(false);
  let [idPrint, setIdPrint] = useState(0);
  let [active, setActive] = useState(false);

  function showMobMenu() {
    setActive((active = !active));
  }

  function hideMenu() {
    setActive((active = !active));
    setTimeout(() => {
      setShowPrint(false);
      mainMenu.current.style.transform = 'translateX(0)';
      mainMenu.current.style.opacity = 1;
      mainMenu.current.classList.remove('MobMenu-print__return');
    });
  }

  function showPrintItem(id) {
    setIdPrint(id);
    setTimeout(() => {
      setShowPrint(true);
    }, 100);
  }

  function hidePrintItem() {
    setTimeout(() => {
      setShowPrint(false);
    }, 50);
  }

  function linkAndHide() {
    setTimeout(() => {
      setShowPrint(false);
    }, 150);
  }

  let about = [
    {
      linkName: 'Про нас',
      link: 'about',
      case_categories: [
        { id: 1, title: 'Контакти', Link: '/about#contacts' },
        { id: 2, title: 'Способи оплати', Link: '/about/payment' },
        { id: 3, title: 'Вимоги до макету', Link: '/about/requirements' },
        { id: 4, title: 'FAQ', Link: '/about/faq' },
      ],
    },
  ];

  return (
    <Transition in={props.mobMenuStatus} timeout={10}>
      {(state) => (
        <div className={`MobMenu__mobileBurger ${state}`} onMouseEnter={() => {}}>
          <img
            onClick={() => {
              showMobMenu();
            }}
            src="/img/header/mobileBurger.svg"
            alt="img"
          />
          <div className={`MobMenu  ${active ? 'MobMenu-active' : ''}`}>
            <div className="MobMenu__close">
              <img
                onClick={() => {
                  hideMenu();
                }}
                src="/img/mobMenu/closeMObMenu.svg"
                alt="img"
              />
            </div>
            {showPrint ? (
              // print items
              <div ref={printItem} className={`Second__Menu`}>
                <button
                  onClick={() => {
                    hidePrintItem();
                    hidePrintItem();
                  }}
                  className={`MobMenu__link`}
                >
                  <img src="/img/mobMenu/arrowBack.svg" alt="img" />
                  <span>
                    {props.mobile?.map((items) => {
                      return (
                        <Fragment key={items.id}>
                          {items.id === 2 ? (
                            <Fragment>
                              {items.case_categories?.map((items) => {
                                return (
                                  <Fragment key={items.id}>
                                    {idPrint === items.id ? items.title : null}
                                  </Fragment>
                                );
                              })}
                            </Fragment>
                          ) : null}
                        </Fragment>
                      );
                    })}
                  </span>
                </button>

                {props.mobile?.map((items) => {
                  return (
                    <Fragment key={items.id}>
                      {items.id === 2 ? (
                        <Fragment>
                          {items.case_categories?.map((items) => {
                            return (
                              <Fragment key={items.id}>
                                {items.id === idPrint ? (
                                  <Fragment>
                                    {items.sub_menu_lists.map((items) => {
                                      return (
                                        <Link
                                          onClick={() => {
                                            hideMenu();
                                          }}
                                          key={items.id}
                                          smooth
                                          to={
                                            idPrint !== 9
                                              ? `/sub-category/${items.Link}`
                                              : '/printing-technology#' + items.Link
                                          }
                                        >
                                          {items.title}
                                        </Link>
                                      );
                                    })}
                                  </Fragment>
                                ) : null}
                              </Fragment>
                            );
                          })}
                        </Fragment>
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            ) : (
              <Fragment>
                <div className="MobMenu-print__return" ref={mainMenu}>
                  <div className="MobMenu__link-title">
                    <Link
                      className={`MobMenu__title`}
                      to="/case"
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      Кейси
                    </Link>
                  </div>
                  {props.mobile?.map((items) => {
                    return (
                      <MobMenuLis
                        closeMenu={hideMenu}
                        href={items.Link}
                        key={items.linkName}
                        linkName={items.linkName}
                        links={items.case_categories}
                        printID={items.id}
                        test={showPrintItem}
                        linkAndHide={linkAndHide}
                      ></MobMenuLis>
                    );
                  })}
                  <MobMenuLis
                    closeMenu={hideMenu}
                    href={about[0].link}
                    key={about[0].case_categories.id}
                    linkName={about[0].linkName}
                    links={about[0].case_categories}
                    printID={null}
                    test={null}
                  ></MobMenuLis>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileMenu;
