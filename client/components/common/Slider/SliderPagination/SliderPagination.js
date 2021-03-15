import React from 'react';
import './Sliderpagination.scss';

const SliderPagination = (props) => {
  return (
    <div onClick={props.onClick} className={`${props.active ? 'Pagination-Active' : 'Pagination'}`}>
      <div
        className={`${props.active ? 'Pagination-Active__Circle-Active' : 'Pagination__Circle'}`}
      ></div>
    </div>
  );
};

export default SliderPagination;
