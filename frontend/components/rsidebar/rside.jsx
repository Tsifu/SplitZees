import React from 'react';

class RightSide extends React.Component {
  render() {
    let display;

    if (this.props.netBalance > 0) {
      display = (
        <div>
          <div>{this.props.name} owes you</div>
          <div>${this.props.netBalance.toFixed(2)}</div>
        </div>
      );
    } else {
      display = (
        <div>
          <div>You owe {this.props.name}</div>
          <div>${(Math.abs(this.props.netBalance)).toFixed(2)}</div>
        </div>
      );
    }

    return (
      <div>
        <div>YOUR BALANCE</div>
        {display}
      </div>
    );
  }
}

export default RightSide;
