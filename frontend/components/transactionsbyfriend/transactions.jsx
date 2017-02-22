import React from 'react';

class Transactions extends React.Component {

  render() {
    let showBills = this.props.bills.map(bill => {
      if (bill.ower_userid) {
        return (
          <li key={bill.id}>
            <div>
              <div>
                {bill.bill_date.toString("MMMM DD yyy")}
              </div>

              <div>
                {bill.bill_description}
              </div>
            </div>

            <div>
                <div>you lent {this.props.name}</div>
                <div>${bill.owed_amount.toFixed(2)}</div>
            </div>
          </li>
        );
      } else {
        return (
          <li key={bill.id}>
            <div>
              <div>
                {bill.bill_date}
              </div>

              <div>
                {bill.bill_description}
              </div>
            </div>

            <div>
                <div>{this.props.name} lent you</div>
                <div>${Math.abs(bill.owed_amount)}</div>
            </div>
          </li>
        );
      }
    });

    return (
      <div>
        <div>{this.props.name}</div>
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
