import React from 'react';
import { withRouter } from 'react-router';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div>{this.props.name}</div>
    );
  }
}
export default Transactions;
