import React from 'react';
import './PaginationWrap.scss';

const PaginationWrap = (props) => {
  return <div className="PaginationWrap">{props.children}</div>;
};

export default PaginationWrap;
