import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -170%)',
    border                : '1px solid #ccc',
    borderRadius          : '4px',
    padding               : '0px',

  }
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      owers: [],
      description: "",
      amount: "",
      date: "",
      splitAmount: 0,
      inputVal: "",
      friends: {}
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {

    this.setState({ modalIsOpen: true });
  }

  closeModal() {
      this.setState({modalIsOpen: false});
        this.clearState();
  }

  clearState() {
    this.setState({description:"", owers: [], amount:"", date:"", splitAmount: 0});
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchBills();
      this.props.fetchFriendships(this.props.currentUser.id);
    }
  }

  update(input_type) {
    return (
      event => {
        this.setState( {[input_type]: event.target.value });
      }
    );
  }

  addFriend(event) {
    let owers = this.state.owers.slice();
    owers.push(event.currentTarget.value);
    this.setState({ owers: owers });
  }

  handleSubmit(event) {
    event.preventDefault();
    let friends = {};
    this.props.friends.map(friend => {
      friends[friend.username] = friend.id;
    });

    let owersAndAmount = {};
    let splitAmount = this.state.amount / (this.state.owers.length + 1);
    splitAmount = -splitAmount.toFixed(2);
    this.state.owers.forEach(ower => {
      owersAndAmount[friends[ower]] = {
        amount: splitAmount,
        user_id: friends[ower]
      };
    });

    let bill = {
      description : this.state.description,
      amount : this.state.amount,
      bill_date : this.state.date,
      owers : owersAndAmount
    };

    this.props.createBill(bill);
    this.closeModal();
    this.clearState();
  }

  render() {
    let netBalanceColor = this.props.netBalance > 0 ? "positive-amount" : "negative-amount";
    let youOweColor = this.props.youOwe > 0 ? "positive-amount balance-border" : "negative-amount balance-border";
    let youAreOwedColor = this.props.youAreOwed > 0 ? "positive-amount" : "negative-amount";
    let selectOption;

    if (this.props.friends) {
      selectOption = this.props.friends.map(friend => {
        return (
          <option key={friend.id} value={friend.value}>{friend.username}</option>
        );
      });
    }

    let owers = this.state.owers.map((friend, idx) => {
      return (<li key={idx}>{friend}</li>);
    });

    return (
      <div className="main-top">
        <div className="dashboard">
          <h1 className="dash-title">Dashboard</h1>

          <div className="dashboard-buttons">
            <button className="addBill" onClick={this.openModal}>Add a bill</button>
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
            <div className={youOweColor}>${Math.abs(this.props.youOwe.toFixed(2))}</div>
          </div>

          <div className="youAreOwed">
            <div className="balance-title">you are owed</div>
            <div className={youAreOwedColor}>${this.props.youAreOwed.toFixed(2)}</div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="addBill"
          >
          <div className="addBillModal">
            <div className="addBillHeader">Add a bill</div>
            <ul>
              {owers}
            </ul>
            <form className="submit-form" onSubmit={this.handleSubmit}>

              <select name="add-friend" onChange={this.addFriend}>
                <option disabled selected value> -- Add Friend -- </option>
                {selectOption}
              </select>

              <div className="bill-info">
                <input
                  type="text"
                  value={this.state.description}
                  placeholder="Enter Description"
                  onChange={this.update('description')}
                />

                <input
                  type="number"
                  value={this.state.amount}
                  placeholder="Enter Amount"
                  onChange={this.update('amount')}
                />

                <input
                  type="date"
                  value={this.state.date}
                  onChange={this.update('date')}
                />
              </div>

            <br/>

            <div className="bill-button-group">
              <div className="add-friend-button">
                <input type="submit" value="Save"></input>
              </div>
              <button className="close-modal-button" onClick={this.closeModal}>Close</button>
            </div>

            </form>
          </div>
        </Modal>

      </div>
    );
  }
}

export default Dashboard;
