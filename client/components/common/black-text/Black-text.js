import React from 'react';
import { Fragment } from 'react';
import './Black-text.scss';

const BlackText = (props) => {
  return (
    <Fragment>
      {props.titleType === 'black' ? (
        <h2 className={`Black-text ${props.className}`}>{props.children}</h2>
      ) : (
        <h2 className={`Text ${props.className}`}>{props.children}</h2>
      )}
    </Fragment>
  );
};

export default BlackText;
