import React from 'react';
import './White-btn.scss';
import { Link } from 'react-router-dom';
const WhiteBtn = (props) => {
  return (
    <div
      onClick={() => {
        props.morePhoto();
      }}
      className={`Gradient-stroke ${props.className}`}
    >
      <div>
        <span>{props.children}</span>
      </div>
      <div className="yellow-line"></div>
    </div>
  );
};

export default WhiteBtn;
