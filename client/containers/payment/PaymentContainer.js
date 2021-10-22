import React, { Component } from 'react';
import Payment from '../../components/payment/Payment';

// Import custom components

class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Payment />;
  }
}

export default PaymentContainer;
