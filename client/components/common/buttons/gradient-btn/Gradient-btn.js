import React from 'react';
import './Gradient-btn.scss';
import { Link } from 'react-router-dom';
const GradientBtn1 = (props) => {
  return (
    <div
      onClick={
        props.close
          ? () => {
              props?.closeWindow();
            }
          : () => {
              props?.checkEmail && props?.checkEmail();
            }
      }
      className={`Btn Gradient ${props.className}`}
    >
      {props.link ? (
        <Link to={props.to}>{props.children}</Link>
      ) : (
        <div>
          <span>{props.children}</span>
        </div>
      )}
    </div>
  );
};

export default GradientBtn1;
