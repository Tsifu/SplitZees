import React from 'react';

class RightSide extends React.Component {
  render() {
    let display;

    if (this.props.netBalance > 0) {
      display = (
        <div>
          <div className="positive-cff">{this.props.name} owes you</div>
          <div className="positive-cf">${this.props.netBalance.toFixed(2)}</div>
        </div>
      );
    } else {
      display = (
        <div>
          <div className="negative-cff">You owe {this.props.name}</div>
          <div className="negative-cf">${(Math.abs(this.props.netBalance)).toFixed(2)}</div>
        </div>
      );
    }

    return (
      <div className="your-balance">
        <div className="balance-title">YOUR BALANCE</div>
        {display}
      </div>
    );
  }
}

export default RightSide;
