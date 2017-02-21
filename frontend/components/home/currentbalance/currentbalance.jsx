import React from 'react';

class CurrentBalance extends React.Component {
  render() {
    if (!this.props.currentUser) {
      return <div>hello</div>;
    }

    let friendsYouOwe = "You current do not owe anyone";
    if (this.props.youOwe.length > 0) {
      friendsYouOwe = this.props.youOwe.map((friend) => {
        return (
          <li key={friend[Object.keys(friend)[1]]}>
            <div>{Object.keys(friend)[0]}</div>
            <div>You owe ${Math.abs(friend[Object.keys(friend)[0]]).toFixed(2)}</div>
          </li>
        );
      });
    }

    let friendsWhoOweYou = "No one currently owes you";
    if (this.props.youAreOwed.length > 0) {
      friendsWhoOweYou = this.props.youAreOwed.map((friend) => {
        return (
          <li key={friend[Object.keys(friend)[1]]}>
            <div>{Object.keys(friend)[0]}</div>
            <div>You owe ${Math.abs(friend[Object.keys(friend)[0]]).toFixed(2)}</div>
          </li>
        );
      });
    }

    return (
      <div className="outstanding-balances">
        <div className="you-owe">
          <ul>
            {friendsYouOwe}
          </ul>
        </div>

        <div className="you-are-owed">
          <ul>
            {friendsWhoOweYou}
          </ul>
        </div>
      </div>
    );
  }
}

export default CurrentBalance;
