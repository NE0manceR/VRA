import React from 'react';
import './White-btn.scss';
import { Link } from 'react-router-dom';
const WhiteBtn = (props) => {
  return (
    <div
      onClick={() => {
        {
          props.link ? null : props.morePhotoInLogo();
        }
      }}
      className={`Gradient-stroke ${props.className}`}
    >
      <div>
        {props.link ? (
          <Link to={`${props.order ? '/order' : '/case'}`}>{props.children}</Link>
        ) : (
          <span>{props.children}</span>
        )}
      </div>
      <div className="yellow-line"></div>
    </div>
  );
};

export default WhiteBtn;
