import React, { Component } from 'react';
import OrderPage from '../../components/Order-page/Order-page';

// Import custom components

class OrderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <OrderPage />;
  }
}

export default OrderContainer;
