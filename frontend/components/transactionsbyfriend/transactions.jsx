import React from 'react';

class Transactions extends React.Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchFriendships(this.props.currentUser.id);
      this.props.fetchBills();
    }
  }

  render() {
    let showBills = (<div className="no-outstanding-balance">No outstanding transactions</div>);
    if (this.props.bills) {


    showBills = this.props.bills.map((bill,idx) => {
      if (bill.ower_userid) {
        return (
          <li key={idx}>
            <div className="bill-detail">
            <div className="bill-date-des">
              <div className="bill-date">
                {bill.bill_date.toString("MMMM DD yyy")}
              </div>

              <div className="bill-des">
                {bill.bill_description}
              </div>
            </div>

            <div>
                <div className="borrow-title">you lent {this.props.name}</div>
                <div className="positive-amount-detail">${bill.owed_amount.toFixed(2)}</div>
            </div>
            </div>
          </li>
        );
      } else {
        return (
          <li key={idx}>
            <div className="bill-detail">
            <div className="bill-date-des">
              <div className="bill-date">
                {bill.bill_date}
              </div>

              <div className="bill-des">
                {bill.bill_description}
              </div>
            </div>

            <div>
                <div className="borrow-title">{this.props.name} lent you</div>
                <div className="negative-amount-amount-detail">${(Math.abs(bill.owed_amount)).toFixed(2)}</div>
            </div>
            </div>
          </li>
        );
      }

      });
    }
    return (
      <div>
        <div className="transaction-header">
          <div className="largeHumanLogo">
            <img src={window.images.smallHuman}/>
          </div>
          <div className="name-of-friend">{this.props.name}</div>
        </div>
        <div>
          <ul>
            {showBills}
          </ul>
        </div>
      </div>
    );
  }
}
export default Transactions;
