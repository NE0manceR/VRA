/* eslint-disable react/prop-types */
import React from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Transition } from 'react-transition-group';
import './Header-hover.scss';
import { data } from '../../../../public/data';

const HeaderHover = (props) => {
  let hoverLinksList = data.hover;

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
                src={props.src}
                alt="img"
              />
              <div className={`Hover__text-wrap Hover__links-anim ${state}`}>
                <p className="Hover__text">{props.text}</p>
                <p className="Hover__author">{props.author}</p>
              </div>
            </div>
            <div className="Hover__links-block">
              <div>
                {props.id === 1 ? (
                  <div className={`Hover__design Hover__links-anim ${state}`}>
                    {hoverLinksList.list[props.id].design.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                          }}
                          className="Hover__link"
                          key={id}
                          to={linkUrl}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                {props.id === 2 ? (
                  <div className={`Hover__printing Hover__links-anim ${state}`}>
                    <div className="Hover__printing-hover">
                      {hoverLinksList.list[2].category1.map(({ id, linkName, linkUrl }) => {
                        return (
                          <Link
                            onClick={() => {
                              props.closeMenu();
                            }}
                            className="Hover__link"
                            key={id}
                            to={linkUrl}
                          >
                            {linkName}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="Hover__printing-hover">
                      {hoverLinksList.list[2].category2.map(({ id, linkName, linkUrl }) => {
                        return (
                          <Link
                            onClick={() => {
                              props.closeMenu();
                            }}
                            className="Hover__link"
                            key={id}
                            to={linkUrl}
                          >
                            {linkName}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="Hover__printing-hover">
                      {hoverLinksList.list[2].category3.map(({ id, linkName, linkUrl }) => {
                        return (
                          <Link
                            onClick={() => {
                              props.closeMenu();
                            }}
                            className="Hover__link"
                            key={id}
                            to={linkUrl}
                          >
                            {linkName}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="Hover__printing-hover">
                      {hoverLinksList.list[2].category4.map(({ id, linkName, linkUrl }) => {
                        return (
                          <Link
                            onClick={() => {
                              props.closeMenu();
                            }}
                            className="Hover__link"
                            key={id}
                            to={linkUrl}
                          >
                            {linkName}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="Hover__printing-hover">
                      {hoverLinksList.list[2].category5.map(({ id, linkName, linkUrl }) => {
                        return (
                          <Link
                            onClick={() => {
                              props.closeMenu();
                            }}
                            className="Hover__link"
                            key={id}
                            to={linkUrl}
                          >
                            {linkName}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {props.id === 3 ? (
                  <div className={`Hover__promo Hover__links-anim ${state}`}>
                    {hoverLinksList.list[props.id].promo.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                          }}
                          className="Hover__link"
                          key={id}
                          to={linkUrl}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                {props.id === 4 ? (
                  <div className={`Hover__promo Hover__links-anim ${state}`}>
                    {hoverLinksList.list[props.id].visual.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                          }}
                          className="Hover__link"
                          key={id}
                          to={linkUrl}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                {props.id === 5 ? (
                  <div className={`Hover__promo Hover__links-anim ${state}`}>
                    {hoverLinksList.list[props.id].textile.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                          }}
                          className="Hover__link"
                          key={id}
                          smooth
                          to={linkUrl}
                          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}

                {props.id === 6 ? (
                  <div className={`Hover__promo Hover__about Hover__links-anim ${state}`}>
                    {hoverLinksList.list[props.id].about.map(({ linkName, id, linkUrl }) => {
                      return (
                        <Link
                          onClick={() => {
                            props.closeMenu();
                          }}
                          className="Hover__link"
                          key={id}
                          to={linkUrl}
                        >
                          {linkName}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
              <div className="Hover__form-link">
                <span className="Hover__form-text">
                  Не знайшли те, що шукали?{' '}
                  <Link className="Hover__form-link_style" to="">
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
