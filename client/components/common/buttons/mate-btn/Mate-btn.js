import React from 'react';
import './Mate-btn.scss';
import { Link } from 'react-router-dom';
const MateBtn = (props) => {
  return (
    <button
      type="button"
      className={`MateBtn Matte ${props.className}`}
      onClick={() => {
        props.checkInput();
        props.sendFile();
      }}
    >
      {props.link ? (
        <Link to={props.to}>
          <span>{props.children}</span>
        </Link>
      ) : (
        <div>
          <span>{props.children}</span>
        </div>
      )}
    </button>
  );
};

export default MateBtn;
