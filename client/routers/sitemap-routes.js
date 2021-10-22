import React from 'react';
import { Route } from 'react-router-dom';

export default (
  <Route>
    <Route exact path="/" />
    <Route exact path="/case" />
    <Route exact path="/services/:url" />
    <Route exact path="/case/:url" />
    <Route exact path="/design/logotype" />
    <Route exact path="/design/brandbook" />
    <Route exact path="/design/corporate" />
    <Route exact path="/sub-category/:item" />
    <Route exact path="/sub-categories/:item" />
    <Route exact path="/case-category/:caseCategory" />
    {/* <Route exact path="/case-category/:caseCategory/:subCategory" /> */}
    <Route exact path="/printing-technology" />
    <Route exact path="/about" />
    <Route exact path="/about/payment" />
    <Route exact path="/about/requirements" />
    <Route exact path="/about/faq" />
    <Route exact path="/order" />
    <Route exact path="/partners" />
    <Route exact path="/design/3d" />
  </Route>
);
