import React from 'react';

class Dashboard extends React.Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchBills();
    }
  }

  render() {
    let netBalanceColor = this.props.netBalance > 0 ? "positive-amount" : "negative-amount";
    let youOweColor = this.props.youOwe > 0 ? "positive-amount balance-border" : "negative-amount balance-border";
    let youAreOwedColor = this.props.youAreOwed > 0 ? "positive-amount" : "negative-amount";

    return (
      <div className="main-top">
        <div className="dashboard">
          <h1 className="dash-title">Dashboard</h1>

          <div className="dashboard-buttons">
            <button className="addBill">Add a bill</button>
            <button className="settleBill">Settle up</button>
          </div>
        </div>

        <div className="balances">
          <div className="total">
            <div className="balance-title">total balance</div>
            <div className={netBalanceColor}>${this.props.netBalance.toFixed(2)}</div>
          </div>

          <div className="youOwe">
            <div className="balance-title balance-border">you owe</div>
            <div className={youOweColor}>${this.props.youOwe.toFixed(2)}</div>
          </div>

          <div className="youAreOwed">
            <div className="balance-title">you are owed</div>
            <div className={youAreOwedColor}>${this.props.youAreOwed.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
