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
            <div className="li-friends">
              <div className="smallHumanLogo">
                <img src={window.images.smallHuman}/>
              </div>

              <div>
                <div className="friend-name">{Object.keys(friend)[0]}</div>
                <div className="owed-amount">You owe <span>${Math.abs(friend[Object.keys(friend)[0]]).toFixed(2)}</span></div>
              </div>
            </div>
          </li>
        );
      });
    }

    let friendsWhoOweYou = "No one currently owes you";
    if (this.props.youAreOwed.length > 0) {
      friendsWhoOweYou = this.props.youAreOwed.map((friend) => {
        return (
          <li key={friend[Object.keys(friend)[1]]}>
            <div className="li-friends">
              <div className="smallHumanLogo">
                <img src={window.images.smallHuman}/>
              </div>

              <div>
                <div className="friend-name">{Object.keys(friend)[0]}</div>
                <div className="you-are-owed-amount">Owes you <span>${Math.abs(friend[Object.keys(friend)[0]]).toFixed(2)}</span></div>
              </div>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="outstanding-balances">
        <div className="you-owe">
          <div className="friendsYouOwe-title">
            YOU OWE
          </div>
          <ul>
            {friendsYouOwe}
          </ul>
        </div>

        <div className="you-are-owed">
          <div className="friendsWhoOweYou-title">
            YOU ARE OWED
          </div>
          <ul>
            {friendsWhoOweYou}
          </ul>
        </div>
      </div>
    );
  }
}

export default CurrentBalance;
