import React, { Component } from 'react';

// Import custom components
import Cases from '../../components/cases/Cases';

class CasesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Cases />;
  }
}

export default CasesContainer;
