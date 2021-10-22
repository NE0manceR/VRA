import React, { Component } from 'react';
import BrandBook from '../../components/brand-book/Brand-book';

// Import custom components

class BrandContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BrandBook />;
  }
}

export default BrandContainer;
