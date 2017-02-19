import React from 'react';

class Dashboard extends React.Component {
  render() {

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
            <div>total balance</div>
            <div>$100.00</div>
          </div>

          <div>
            <div>you owe</div>
            <div>$50</div>
          </div>

          <div>
            <div>you are owed</div>
            <div>$150.00</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
