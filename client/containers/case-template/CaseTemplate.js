import React, { Component } from 'react';

// Import custom components
import CasesTemplate from '../../components/case-template/Case-template';

class CasesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CasesTemplate />;
  }
}

export default CasesTemplate;
