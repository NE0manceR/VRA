/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MobSvgArrow from '../../mob-svg-arrow/Mob-svg-arrow';
import './Mob-menu-list.scss';

const MobMenuLis = (props) => {
  let [showLinks, setShowLinks] = useState(false);
  let links = useRef();
  function openLinks() {
    setShowLinks((showLinks = !showLinks));
  }

  return (
    <div
      key={props.id}
      className={`list-deactivated ${showLinks ? 'list-activated' : ''}`}
      style={{ height: showLinks ? links.current.clientHeight + 49.5 : 45.3 }}
    >
      <div>
        <div
          onClick={() => {
            openLinks();
          }}
          className="list-deactivated__link-wrap"
        >
          <Link
            onClick={() => {
              props.closeMenu();
              openLinks();
            }}
            className="list-deactivated__title list-activated__title"
            to={`${props?.href !== 'about' ? `/services/${props?.href}` : '/about'}`}
          >
            {props?.linkName}
          </Link>
          <MobSvgArrow status={showLinks} />
        </div>
      </div>
      <div
        ref={links}
        className={`list-deactivated__links list-activated__links ${
          props.printID === 2 ? 'print-list' : ''
        } `}
      >
        {props.links?.map((items) => {
          return (
            <Fragment key={items.id}>
              {props.printID === 2 ? (
                <div
                  onClick={() => {
                    props.test(items.id);
                  }}
                >
                  <Link
                    onClick={() => {
                      props.closeMenu();
                      props.linkAndHide();
                    }}
                    to={`/case-category/${items.Link}`}
                    key={items.id}
                  >
                    {items.title}
                  </Link>
                  <MobSvgArrow />
                </div>
              ) : (
                <Link
                  onClick={() => {
                    props.closeMenu();
                  }}
                  to={`${
                    items.description === 'Дизайн'
                      ? `/design/${items.Link}`
                      : `/sub-categories/${items.Link}`
                  }`}
                  key={items.id}
                >
                  {items.title}
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MobMenuLis;
