import React, { Component, Fragment } from 'react';
import './header.scss';
import Search from '../common/search/Search';
import { Transition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import HeaderHover from '../common/header-hover/Header-hover';
import MobileMenu from '../common/mobile-menu/Mobile-menu';
import GradientBtn1 from '../common/buttons/gradient-btn/Gradient-btn';
import { subscriberDataHeaders } from '../../services/dataService';

class Header extends Component {
  state = {
    menu: [],
    stat: {
      linlActive: 0,
      enterValue: false,
      searchStatus: true,
      hoverMenu: false,
      hoverKey: 0,
      hoverContent: 0,
      hoverContentStatus: false,
      hoverLeavMouese: false,
    },
    searchData: [],
    bestData: [],
    requestData: [],
    same: [],
  };

  active = 7;
  headerWrap = React.createRef();
  hoverMenu = React.createRef();

  // TODO Саша ось так витягувати даніw
  componentDidMount() {
    subscriberDataHeaders.subscribe((res) => {
      this.setState({ menu: res });
    });

    fetch(`https://admin.vra.com.ua/popularquestions`)
      .then((response) => response.json())
      .then((req) => {
        let newReq = { ...this.state };
        newReq.requestData = [...req];

        this.setState(newReq);
      });
  }

  changeContentLinks(item) {
    let newStat = this.state.stat;
    if (item.id === newStat.hoverContent || item.position === 0) {
      return;
      /* виходить з функції як що навів не те саме меню та при наведенні на Кейси */
    }

    newStat.hoverContent = item.id;
    newStat.hoverContentStatus = true;
    this.setState({ stat: newStat });
  }

  changeContentLeave() {
    let newContentStatus = this.state.stat.hoverContentStatus;
    newContentStatus = false;
    this.setState({
      hoverContentStatus: newContentStatus,
    });
  }

  showHoverMenu = (item) => {
    if (item?.position === 0) {
      return;
    }

    let newStat = this.state.stat;
    newStat.hoverKey = item.id;
    newStat.hoverMenu = true;

    this.setState({
      stat: newStat,
    });
  };

  scrollTopHomePage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  hideMenu = () => {
    let showMenu = this.state.stat;
    showMenu.hoverMenu = false;
    this.setState({
      stat: showMenu,
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
    let setStat = this.state.stat;
    setStat.hoverKey = 0;
    setStat.hoverMenu = false;
    this.setState({
      stat: setStat,
    });
  }

  openSearch = () => {
    let searchStatus = this.state.stat;
    searchStatus.searchStatus = false;

    this.setState({
      stat: searchStatus,
    });
  };

  closeSearch = () => {
    let serarchStat = this.state.stat;
    serarchStat.searchStatus = true;
    serarchStat.enterValue = false;

    this.setState({
      stat: serarchStat,
    });
  };

  showSearchItem = (data) => {
    fetch(`https://admin.vra.com.ua/items-find?_limit=20&_sort=title%3AASC&_q=${data}`)
      .then((response) => response.json())
      .then((search) => {
        let newState = { ...this.state };
        newState.stat.enterValue = true;
        newState.searchData = search;
        this.setState(newState);
      });

    fetch(`https://admin.vra.com.ua/sub-categories?_limit=20&_sort=title%3AASC&_q=${data}`)
      .then((response) => response.json())
      .then((search) => {
        let newState = { ...this.state };
        newState.stat.enterValue = true;
        newState.bestData = search;
        this.setState(newState);
      });
  };

  activeHeaderLink(id) {
    let linkActivate = this.state.stat;
    linkActivate.linlActive = id;
    this.setState({
      stat: linkActivate,
    });
  }

  render() {
    return (
      <div style={{ position: 'sticky', top: 0, zIndex: 8 }}>
        <Transition in={this.state.stat.hoverMenu} timeout={100}>
          {(state) => (
            <div ref={this.headerWrap} className={`Header ${state}`}>
              <Transition in={this.state.stat.searchStatus} timeout={100}>
                {(state) => (
                  <div
                    onMouseLeave={() => {
                      this.wrapLeave();
                    }}
                    className={`Header__wrap ${state}`}
                  >
                    <div
                      className={`search-content ${
                        this.state.stat.searchStatus ? '' : 'search-content-active '
                      }`}
                    >
                      <div className="search-best">
                        <span className="best-title">Найкращі співпадіння</span>
                        {this.state.bestData?.map((elem) => {
                          return (
                            <NavLink
                              to={`/sub-category/${elem.Link}`}
                              key={elem.id}
                              className="best-item"
                              onClick={() => {
                                this.closeSearch();
                              }}
                            >
                              {elem.title}
                            </NavLink>
                          );
                        })}
                      </div>
                      <div className="search-best-items">
                        {this.state.stat.enterValue ? (
                          <Fragment>
                            {this.state.searchData?.map((item) => {
                              return (
                                // <div key={item.id} className="item">
                                //   <img src={item?.photo?.url} alt="img" />
                                //   <span className="search-type">
                                //     {item.sub_menu_lists[0] && item.sub_menu_lists[0].title}
                                //   </span>
                                //   <span className="search-name">{item.title}</span>

                                //   <NavLink
                                //     onClick={() => {
                                //       this.closeSearch();
                                //     }}
                                //     to={`/case/${item.Link}`}
                                //     className="show-item-btn"
                                //   >
                                //     <span>Переглянути кейс</span>
                                //   </NavLink>
                                // </div>

                                <NavLink
                                  key={item.id}
                                  onClick={() => {
                                    this.closeSearch();
                                  }}
                                  to={`/case/${item.Link}`}
                                  className="item"
                                >
                                  <img src={item?.photo?.url} alt="img" />
                                  <span className="search-type">
                                    {item.sub_menu_lists[0] && item.sub_menu_lists[0].title}
                                  </span>
                                  <span className="search-name">{item.title}</span>
                                  <div className="show-item-btn">
                                    <span>Переглянути кейс</span>
                                  </div>
                                </NavLink>
                              );
                            })}
                          </Fragment>
                        ) : (
                          <div className="popular">
                            <p className="best-title">Популярні запити</p>
                            {this.state.requestData?.map(({ question, id, Link }) => {
                              return (
                                <a
                                  key={id}
                                  href={Link}
                                  onClick={() => {
                                    this.closeSearch();
                                  }}
                                >
                                  {question}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    <Transition in={this.state.stat.searchStatus} timeout={10}>
                      {(state) => (
                        <NavLink
                          onMouseEnter={this.hideMenu}
                          className={`Header__logo ${state}`}
                          onClick={() => (
                            (this.active = 7), this.scrollTopHomePage(), this.closeSearch()
                          )}
                          to={'/'}
                        >
                          <img src="/img/header/headerLogo.svg" alt="img" />
                        </NavLink>
                      )}
                    </Transition>
                    <Transition in={this.state.stat.searchStatus} timeout={100}>
                      {() => (
                        <MobileMenu
                          mobile={this.state.menu}
                          mobMenuStatus={this.state.stat.searchStatus}
                        />
                      )}
                    </Transition>
                    <Transition
                      in={this.state.stat.searchStatus}
                      timeout={100}
                      mountOnEnter
                      unmountOnExit
                    >
                      {(state) => (
                        <div className={`Header__menu ${state}`}>
                          <NavLink
                            onMouseEnter={() => {
                              this.linkCloseHover();
                            }}
                            onClick={() => {
                              this.activeHeaderLink(7);
                            }}
                            className={`Header__link ${
                              this.state.stat.linlActive === 7 ? 'is-active' : ''
                            }`}
                            to={'/case'}
                          >
                            Кейси
                          </NavLink>

                          {this.state.menu.map((item) => {
                            return (
                              <Fragment key={item.id}>
                                <NavLink
                                  onMouseEnter={() => {
                                    this.showHoverMenu(item);
                                    this.changeContentLinks(item);
                                  }}
                                  onClick={() => {
                                    this.showHoverMenu(item);
                                    this.changeContentLinks(item);
                                    this.active = item.id;
                                    this.linkCloseHover();
                                    this.activeHeaderLink(item.id);
                                  }}
                                  key={item.id}
                                  className={`Header__link ${
                                    this.state.stat.linlActive === item.id ? 'is-active' : ''
                                  }`}
                                  to={
                                    item.position === 0 ? `/${item.Link}` : '/services/' + item.Link
                                  }
                                >
                                  {item.linkName}
                                </NavLink>
                              </Fragment>
                            );
                          })}

                          <NavLink
                            onMouseEnter={() => {
                              this.showHoverMenu({ id: -1 });
                              this.changeContentLinks({ id: -1 });
                            }}
                            onClick={() => {
                              this.showHoverMenu({ id: -1 });
                              this.changeContentLinks({ id: -1 });
                              this.active = -1;
                              this.linkCloseHover();
                              this.activeHeaderLink(8);
                            }}
                            key={-1}
                            className={`Header__link ${
                              this.state.stat.linlActive === 8 ? 'is-active' : ''
                            }`}
                            to={'/about'}
                          >
                            Про нас
                          </NavLink>
                        </div>
                      )}
                    </Transition>
                    <Transition in={this.state.stat.searchStatus} timeout={10}>
                      {(state) => (
                        <div onMouseEnter={this.hideMenu} className={`Header__search ${state}`}>
                          <Search
                            myValue={this.state.stat.searchStatus ? '' : ''}
                            searchSize={this.state.stat.searchStatus}
                            status={this.state.stat.searchStatus}
                            showSearch={this.openSearch}
                            showItems={this.showSearchItem}
                          />
                          <Transition
                            mountOnEnter
                            unmountOnExit
                            in={this.state.stat.searchStatus}
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
                            in={!this.state.stat.searchStatus}
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

        <Transition mountOnEnter unmountOnExit in={this.state.stat.hoverMenu} timeout={300}>
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
                item={this.state.menu.find((item) => item.id === this.state.stat.hoverKey)}
                id={this.state.stat.hoverContent}
                hoverStatus={this.state.stat.hoverContentStatus}
                closeMenu={this.hideMenu}
                activeHeaderLink={(test) => {
                  this.activeHeaderLink(test);
                }}
              ></HeaderHover>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default Header;
