import React, { Component, Fragment } from 'react';
import './header.scss';
import Search from '../common/search/Search';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import HeaderHover from '../common/header-hover/Header-hover';
import { data } from '../../../public/data';
import MobileMenu from '../common/mobile-menu/Mobile-menu';
import GradientBtn1 from '../common/buttons/gradient-btn/Gradient-btn';

class Header extends Component {
  active = 7;
  state = data.header;
  headerWrap = React.createRef();
  hoverMenu = React.createRef();
  newValue = this.state.enterValue;

  searchArr = [
    { id: 0, name: 'Vitalka', type: 'Фірмовий стиль', src: '/img/cases/1.png', link: '' },
    { id: 1, name: 'Vitalka', type: 'Фірмовий стиль', src: '/img/cases/2.png', link: '' },
    { id: 2, name: 'Vitalka', type: 'Фірмовий стиль', src: '/img/cases/3.png', link: '' },
    { id: 3, name: 'Vitalka', type: 'Фірмовий стиль', src: '/img/cases/4.png', link: '' },
    { id: 4, name: 'Vitalka', type: 'Фірмовий стиль', src: '/img/cases/5.png', link: '' },
    { id: 5, name: 'Vitalka', type: 'Фірмовий стиль', src: '/img/cases/6.png', link: '' },
  ];

  changeContentLinks(key) {
    let newContentStatus = this.state.hoverContentStatus;
    let newContent = this.state.hoverContent;

    if (key === newContent || key === 0) {
      return;
      /* виходить з функції як що навів не те саме меню та при наведенні на Кейси */
    }
    newContent = key;
    newContentStatus = true;
    this.setState({
      hoverContent: newContent,
      hoverContentStatus: newContentStatus,
    });
  }

  changeContentLeave() {
    let newContentStatus = this.state.hoverContentStatus;
    newContentStatus = false;
    this.setState({
      hoverContentStatus: newContentStatus,
    });
  }

  showHoverMenu = (hoverKey) => {
    if (hoverKey === 0) {
      return;
    }
    let menuHoverKey = this.state.hoverKey;
    let showMenu = this.state.hoverMenu;
    menuHoverKey = hoverKey;
    showMenu = true;
    this.setState({
      hoverKey: menuHoverKey,
      hoverMenu: showMenu,
    });
  };

  hideMenu = () => {
    let showMenu = this.state.hoverMenu;
    showMenu = false;
    this.setState({
      hoverMenu: showMenu,
    });
  };

  testHover = (event) => {
    if (
      this.headerWrap.current.clientHeight + this.hoverMenu.current.clientHeight <=
      event.clientY
    ) {
      this.hideMenu();
    }
  };

  wrapLeave = () => {
    if (event.clientY < 0) {
      this.hideMenu();
    }
  };

  linkCloseHover() {
    let menuHoverKey = this.state.hoverKey;
    let showMenu = this.state.hoverMenu;
    menuHoverKey = 0;
    showMenu = false;
    this.setState({
      hoverKey: menuHoverKey,
      hoverMenu: showMenu,
    });
  }

  openSearch = () => {
    let searchStatus = this.state.searchStatus;
    searchStatus = false;
    this.setState({
      searchStatus: searchStatus,
    });
  };

  closeSearch = () => {
    let searchStatus = this.state.searchStatus;
    searchStatus = true;
    let newValue = this.state.enterValue;
    newValue = false;
    this.setState({
      searchStatus: searchStatus,
      enterValue: newValue,
    });
  };

  showSearchItem = () => {
    let newValue = this.state.enterValue;
    newValue = true;
    this.setState({
      enterValue: newValue,
    });
  };

  render() {
    return (
      <div style={{ position: 'sticky', top: 0, zIndex: 4 }}>
        <Transition in={this.state.hoverMenu} timeout={100}>
          {(state) => (
            <div ref={this.headerWrap} className={`Header ${state}`}>
              <Transition in={this.state.searchStatus} timeout={100}>
                {(state) => (
                  <div
                    onMouseLeave={() => {
                      this.wrapLeave();
                    }}
                    className={`Header__wrap ${state}`}
                  >
                    <div
                      className={`search-content ${
                        this.state.searchStatus ? '' : 'search-content-active '
                      }`}
                    >
                      <div className="search-best">
                        <span className="best-title">Найкращі співпадіння</span>
                        <span className="best-item">Фірмовий стиль</span>
                      </div>
                      <div className="search-best-items">
                        {this.state.enterValue ? (
                          <Fragment>
                            {this.searchArr.map(({ id, name, type, src, link }) => {
                              return (
                                <div key={id} className="item">
                                  <img src={src} alt="img" />
                                  <span className="search-type">{type}</span>
                                  <span className="search-name">{name}</span>
                                  <Link to={link} className="show-item-btn">
                                    <span>Переглянути кейс</span>
                                  </Link>
                                </div>
                              );
                            })}
                          </Fragment>
                        ) : (
                          <div className="popular">
                            <p className="best-title">Популярні запити</p>
                            <Link to={''}>Візитки</Link>
                            <Link to={''}>Логотип</Link>
                            <Link to={''}>Флаєр</Link>
                            <Link to={''}>Плакат</Link>
                          </div>
                        )}
                      </div>
                    </div>
                    <Transition in={this.state.searchStatus} timeout={100}>
                      {(state) => (
                        <Link
                          onMouseEnter={this.hideMenu}
                          className={`Header__logo ${state}`}
                          onClick={() => (this.active = 7)}
                          to={'/'}
                        >
                          <img src="img/header/headerLogo.svg" alt="img" />
                        </Link>
                      )}
                    </Transition>
                    <Transition in={this.state.searchStatus} timeout={100}>
                      {(state) => <MobileMenu mobMenuStatus={this.state.searchStatus} />}
                    </Transition>
                    <Transition
                      in={this.state.searchStatus}
                      timeout={100}
                      mountOnEnter
                      unmountOnExit
                    >
                      {(state) => (
                        <div className={`Header__menu ${state}`}>
                          {this.state.headerNav.map((item) => {
                            return (
                              <Fragment key={item.id}>
                                <Link
                                  onMouseLeave={() => {
                                    this.changeContentLeave();
                                  }}
                                  onMouseEnter={() => {
                                    this.showHoverMenu(item.id);
                                    this.changeContentLinks(item.id);
                                  }}
                                  onClick={() => {
                                    this.showHoverMenu(item.id);
                                    this.changeContentLinks(item.id);
                                    this.active = item.id;
                                    this.linkCloseHover();
                                  }}
                                  key={item.id}
                                  className={'Header__link'}
                                  to={item.Link}
                                >
                                  {item.linkName}
                                </Link>
                              </Fragment>
                            );
                          })}
                        </div>
                      )}
                    </Transition>
                    <Transition in={this.state.searchStatus} timeout={10}>
                      {(state) => (
                        <div onMouseEnter={this.hideMenu} className={`Header__search ${state}`}>
                          <Search
                            myValue={this.state.searchStatus ? '' : ''}
                            searchSize={this.state.searchStatus}
                            status={this.state.searchStatus}
                            showSearch={this.openSearch}
                            showItems={this.showSearchItem}
                          />
                          <Transition
                            mountOnEnter
                            unmountOnExit
                            in={this.state.searchStatus}
                            timeout={100}
                          >
                            {(state) => (
                              <GradientBtn1
                                to={'/order'}
                                link={true}
                                className={`Header__btn ${state}`}
                              >
                                Замовити
                              </GradientBtn1>
                            )}
                          </Transition>

                          <Transition
                            mountOnEnter
                            unmountOnExit
                            in={!this.state.searchStatus}
                            timeout={{
                              enter: 150,
                              exit: 0,
                            }}
                          >
                            {(state) => (
                              <button
                                onClick={this.closeSearch}
                                className={`Header__close-search ${state}`}
                              >
                                <svg
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
                              </button>
                            )}
                          </Transition>
                        </div>
                      )}
                    </Transition>
                  </div>
                )}
              </Transition>
            </div>
          )}
        </Transition>

        <Transition mountOnEnter unmountOnExit in={this.state.hoverMenu} timeout={300}>
          {(state) => (
            <div
              ref={this.hoverMenu}
              className={`Header__hover-menu ${state}`}
              onMouseLeave={this.testHover}
              onMouseMove={this.mouseMoveCloseHoverMenu}
            >
              <HeaderHover
                onMouseLeave={() => {
                  this.hideMenu();
                }}
                src={this.state.hoverImgText[this.state.hoverKey].src}
                text={this.state.hoverImgText[this.state.hoverKey].text}
                author={this.state.hoverImgText[this.state.hoverKey].author}
                id={this.state.hoverContent}
                hoverStatus={this.state.hoverContentStatus}
                closeMenu={this.hideMenu}
              ></HeaderHover>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default Header;
