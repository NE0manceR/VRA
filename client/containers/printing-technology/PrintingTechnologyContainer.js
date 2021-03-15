import React, { Component } from 'react';
import PrintingTechnology from '../../components/print-technology/Print-technology';

// Import custom components

class PrintingTechnologyContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PrintingTechnology />;
  }
}

export default PrintingTechnologyContainer;
