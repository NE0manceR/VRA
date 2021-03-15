import React, { useState, useRef, Fragment } from 'react';
import './Mobile-menu.scss';
import { data } from '../../../../public/data';
import { Transition } from 'react-transition-group';
import { HashLink as Link } from 'react-router-hash-link';
import { arrayInsert } from 'redux-form';
import MobSvgArrow from '../mob-svg-arrow/mob-svg-arrow';

const MobileMenu = (props) => {
  let mainMenu = useRef(null);
  let printItem = useRef(null);
  let [activeDesign, setActiveDesign] = useState(false);
  let [activePromo, setActivePromo] = useState(false);
  let [activeVisual, setActiveVisual] = useState(false);
  let [activeTextile, setActiveTextile] = useState(false);
  let [activeAbout, setActiveAbout] = useState(false);
  let [activePrint, setActivePrint] = useState(false);
  let [showPrint, setShowPrint] = useState(false);
  let [printCategory, setPrintCategory] = useState();
  let [backPrintItem, setBackPrintItem] = useState(0);

  let mobLinkTitle = data.header.headerNav;
  let mobLinkList = data.hover.list;

  let [active, setActive] = useState(false);

  function showMobMenu() {
    setActive((active = !active));
  }

  function hideMenu() {
    setActive((active = !active));
    setActiveDesign(false);
    setActivePromo(false);
    setActiveVisual(false);
    setActiveTextile(false);
    setActiveAbout(false);
    setActivePrint(false);
    setShowPrint(false);

    setTimeout(() => {
      setShowPrint(false);
      mainMenu.current.style.transform = 'translateX(0)';
      mainMenu.current.style.opacity = 1;
      mainMenu.current.classList.remove('MobMenu-print__return');
    });
  }

  function showPrintItem(category) {
    mainMenu.current.style.transform = 'translateX(-500px)';
    mainMenu.current.style.opacity = 0;
    setPrintCategory(category);
    setTimeout(() => {
      setShowPrint(true);
    }, 100);
  }

  function hidePrintItem() {
    printItem.current.classList.add('Second__Menu-hide');
    setTimeout(() => {
      setShowPrint(false);
      mainMenu.current.classList.add('MobMenu-print__return');
    });
  }

  return (
    <Transition in={props.mobMenuStatus} timeout={100}>
      {(state) => (
        <div className={`MobMenu__mobileBurger ${state}`}>
          <img
            onClick={() => {
              showMobMenu();
            }}
            src="img/header/mobileBurger.svg"
            alt="img"
          />
          <div className={`MobMenu  ${active ? 'MobMenu-active' : ''}`}>
            <div className="MobMenu__close">
              <img
                onClick={() => {
                  hideMenu();
                }}
                src="/img/mobMenu/closeMObMenu.svg"
                alt=""
              />
            </div>
            {showPrint ? (
              // print items
              <div ref={printItem} className={`Second__Menu`}>
                <button
                  onClick={() => {
                    hidePrintItem(printCategory);
                  }}
                  className={`MobMenu__link`}
                >
                  <img src="/img/mobMenu/arrowBack.svg" alt="img" />
                  <span>{printCategory[0].linkName}</span>
                </button>
                {printCategory.map(({ linkName, id, linkUrl }) => {
                  return (
                    <Fragment>
                      {id !== 0 ? (
                        <Link
                          className={`MobMenu__link`}
                          key={id}
                          to={linkUrl}
                          onClick={() => {
                            hideMenu();
                          }}
                        >
                          {linkName}
                        </Link>
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            ) : (
              <div ref={mainMenu}>
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
                {/* =================design section============= */}
                <div className={`${activeDesign ? 'MobMenu__wrap' : ''}`}>
                  <div
                    className="MobMenu__link-title"
                    onClick={() => {
                      setActiveDesign((activeDesign = !activeDesign));
                    }}
                  >
                    <Link
                      to={mobLinkTitle[1].Link}
                      className={`MobMenu__title`}
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      {mobLinkTitle[1].linkName}
                    </Link>
                    <MobSvgArrow status={activeDesign} />
                  </div>
                  <div
                    className={`MobMenu__link-list ${
                      activeDesign ? 'MobMenu__link-list-design' : ''
                    }`}
                  >
                    {mobLinkList[1].design.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          className={`MobMenu__link`}
                          key={id}
                          to={linkUrl}
                          onClick={() => {
                            hideMenu();
                          }}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* =================print section ============= */}
                <div className={`${activePrint ? 'MobMenu__wrap' : ''}`}>
                  <div
                    className="MobMenu__link-title"
                    onClick={() => {
                      setActivePrint((setActivePrint = !activePrint));
                    }}
                  >
                    <Link
                      className={`MobMenu__title`}
                      to={mobLinkTitle[2].Link}
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      {mobLinkTitle[2].linkName}
                    </Link>
                    <MobSvgArrow status={activePrint} />
                  </div>
                  <div
                    className={`MobMenu__link-list ${
                      activePrint ? 'MobMenu__link-list-print' : ''
                    }`}
                  >
                    <div className="MobMenu__link-wrap">
                      <span
                        onClick={() => {
                          showPrintItem(mobLinkList[2].category1);
                        }}
                        className={`MobMenu__link`}
                      >
                        {mobLinkList[2].category1[0].linkName}
                      </span>
                      <MobSvgArrow />
                    </div>
                    <div className="MobMenu__link-wrap">
                      <span
                        onClick={() => {
                          showPrintItem(mobLinkList[2].category2);
                        }}
                        className={`MobMenu__link`}
                      >
                        {mobLinkList[2].category2[0].linkName}
                      </span>
                      <MobSvgArrow />
                    </div>
                    <div className="MobMenu__link-wrap">
                      <span
                        onClick={() => {
                          showPrintItem(mobLinkList[2].category3);
                        }}
                        className={`MobMenu__link`}
                      >
                        {mobLinkList[2].category3[0].linkName}
                      </span>
                      <MobSvgArrow />
                    </div>
                    <div className="MobMenu__link-wrap">
                      <span
                        onClick={() => {
                          showPrintItem(mobLinkList[2].category4);
                        }}
                        className={`MobMenu__link`}
                      >
                        {mobLinkList[2].category4[0].linkName}
                      </span>
                      <MobSvgArrow />
                    </div>
                    <div className="MobMenu__link-wrap">
                      <span
                        onClick={() => {
                          showPrintItem(mobLinkList[2].category5);
                        }}
                        className={`MobMenu__link`}
                      >
                        {mobLinkList[2].category5[0].linkName}
                      </span>
                      <MobSvgArrow />
                    </div>
                  </div>
                </div>
                {/* =================promo section ============= */}
                <div className={`${activePromo ? 'MobMenu__wrap' : ''}`}>
                  <div
                    className="MobMenu__link-title"
                    onClick={() => {
                      setActivePromo((activePromo = !activePromo));
                    }}
                  >
                    <Link
                      className={`MobMenu__title`}
                      to={mobLinkTitle[3].Link}
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      {mobLinkTitle[3].linkName}
                    </Link>
                    <MobSvgArrow status={activePromo} />
                  </div>
                  <div
                    className={`MobMenu__link-list ${
                      activePromo ? 'MobMenu__link-list-promo' : ''
                    }`}
                  >
                    {mobLinkList[3].promo.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          className={`MobMenu__link`}
                          key={id}
                          to={linkUrl}
                          onClick={() => {
                            hideMenu();
                          }}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* =================visual section ============= */}
                <div className={`${activeVisual ? 'MobMenu__wrap' : ''}`}>
                  <div
                    className="MobMenu__link-title"
                    onClick={() => {
                      setActiveVisual((activeVisual = !activeVisual));
                    }}
                  >
                    <Link
                      className={`MobMenu__title`}
                      to={mobLinkTitle[4].Link}
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      {mobLinkTitle[4].linkName}
                    </Link>
                    <MobSvgArrow status={activeVisual} />
                  </div>
                  <div
                    className={`MobMenu__link-list ${
                      activeVisual ? 'MobMenu__link-list-visual' : ''
                    }`}
                  >
                    {mobLinkList[4].visual.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          className={`MobMenu__link`}
                          key={id}
                          to={linkUrl}
                          onClick={() => {
                            hideMenu();
                          }}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* =================textile section ============= */}
                <div className={`${activeTextile ? 'MobMenu__wrap' : ''}`}>
                  <div
                    className="MobMenu__link-title"
                    onClick={() => {
                      setActiveTextile((activeTextile = !activeTextile));
                    }}
                  >
                    <Link
                      className={`MobMenu__title`}
                      to={mobLinkTitle[5].Link}
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      {mobLinkTitle[5].linkName}
                    </Link>
                    <MobSvgArrow status={activeTextile} />
                  </div>
                  <div
                    className={`MobMenu__link-list ${
                      activeTextile ? 'MobMenu__link-list-textile' : ''
                    }`}
                  >
                    {mobLinkList[5].textile.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          className={`MobMenu__link`}
                          key={id}
                          to={linkUrl}
                          onClick={() => {
                            hideMenu();
                          }}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* =================about section ============= */}
                <div className={`${activeAbout ? 'MobMenu__wrap' : ''}`}>
                  <div
                    className="MobMenu__link-title"
                    onClick={() => {
                      setActiveAbout((activeAbout = !activeAbout));
                    }}
                  >
                    <Link
                      className={`MobMenu__title`}
                      to={mobLinkTitle[6].Link}
                      onClick={() => {
                        hideMenu();
                      }}
                    >
                      {mobLinkTitle[6].linkName}
                    </Link>
                    <MobSvgArrow status={activeAbout} />
                  </div>
                  <div
                    className={`MobMenu__link-list ${
                      activeAbout ? 'MobMenu__link-list-about' : ''
                    }`}
                  >
                    {mobLinkList[6].about.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          className={`MobMenu__link`}
                          key={id}
                          to={linkUrl}
                          onClick={() => {
                            hideMenu();
                          }}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileMenu;
