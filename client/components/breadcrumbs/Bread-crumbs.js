import React from 'react';
import './Bread-crumbs.scss';

const BreadCrumbs = (props) => {
  return <div className={`Breadcrumbs ${props.className}`}>{props.children}</div>;
};

export default BreadCrumbs;
