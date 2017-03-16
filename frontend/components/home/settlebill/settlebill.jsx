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
    transform             : 'translate(-50%, -70%)',
    border                : '1px solid #ccc',
    borderRadius          : '4px',
    padding               : '0px',
    overflow              : 'scroll'

  }
};

class SettleBill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owerUserid: "",
      billId: "",
      paidDate: "",
      showBillForm: false,
      showFriendForm: false,
      friendsBills: "",
      friendId: null,
      errors: [],
    };
    this.showFriendForm = this.showFriendForm.bind(this);
    this.showBillForm = this.showBillForm.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.addBillToSettle = this.addBillToSettle.bind(this);
    this.billHandleSubmit = this.billHandleSubmit.bind(this);
    this.friendHandleSubmit = this.friendHandleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchFriendships(this.props.currentUser.id);
      this.props.fetchBills();
    }
  }

  clearState() {
    this.setState({
      owerUserid: "",
      billId: "",
      paidDate: "",
      showBillForm: false,
      showFriendForm: false,
      friendsBills: "",
      friendId: null,
      errors: [],
    });
  }

  showFriendForm() {
    this.clearState();
    this.setState({ showFriendForm: true, showBillForm: false });
  }

  showBillForm() {
    this.clearState();
    this.setState({ showFriendForm: false, showBillForm: true });
  }

  addFriend(event) {
    let friendId = this.props.nameToId[event.currentTarget.value];
    this.setState({ friendId: friendId });
  }

  addBillToSettle(billId, owerUserid) {
    this.setState({ billId: billId, owerUserid: owerUserid });
  }

  update(input_type) {
    return (
      event => {
        this.setState( {[input_type]: event.target.value });
      }
    );
  }

  billHandleSubmit(event) {
    event.preventDefault();
    let bill;

    if (this.state.billId !== "" && this.state.paidDate !== "" && this.state.owerUserid !== "") {
      bill = {
        bill_id: this.state.billId,
        paid_date: this.state.paidDate,
        ower_userid: this.state.owerUserid
      };
      this.props.settleBill(bill);
      this.props.closeSBModal();
      this.clearState();
    } else {
      let errors = [];

      if (this.state.friendId === null) {
        errors.push("Please select friend.");
      }

      if (this.state.paidDate === "") {
        errors.push("Please pick settlement date.");
      }

      if (this.state.billId === "") {
        errors.push("Please select bill to settle.");
      }

      this.setState({ errors: errors });
    }
  }

  friendHandleSubmit(event) {
    event.preventDefault();
    let friend;
    friend = {
      friend_id: this.state.friendId,
      paid_date: this.state.paidDate,
    };
    this.props.settleFriend(friend);
    this.props.closeSBModal();
    this.clearState();
  }

  render() {
    let selectOption;
    let showBills = (<div className="show-bills-zero">No outstanding balances</div>);

    if (this.props.friends) {
      selectOption = this.props.friends.map(friend => {
        return (
          <option key={friend.id} value={friend.value}>{friend.username}</option>
        );
      });
    }

    if (this.props.billsByFriends[this.state.friendId]) {
      showBills = this.props.billsByFriends[this.state.friendId].map((bill,idx) => {
        let whoOwes;
        let amountToBeDisplayed;
        if (bill.owed_amount > 0) {
          whoOwes = bill.ower_userid;
          amountToBeDisplayed = `You were paid $${bill.owed_amount.toFixed(2)}`;
        } else {
          whoOwes = this.props.currentUser.id;
          amountToBeDisplayed = `You paid $${Math.abs(bill.owed_amount).toFixed(2)}`;
        }
        return (
          <li key={idx}>
            <div className="bill-detail-settle">
              <label className="bill-detail-label">
              <input type="checkbox" onClick={ () => this.addBillToSettle(bill.bill_id, whoOwes)}/>
              <div className="bill-d-s">
                {bill.bill_date}
              </div>

              <div className="bill-d-s">
                {bill.bill_description}
              </div>

              <div className="bill-d-s">
                {amountToBeDisplayed}
              </div>
              </label>
            </div>
          </li>
        );
      });
    }

    let dropdownSettleBillForm = this.state.showBillForm ? "settle-bill" : "settle-bill hide";
    let dropdownSettleFriendForm = this.state.showFriendForm ? "settle-friend" : "settle-friend hide";

    let errorMessages;

    if (this.state.errors.length > 0) {
      errorMessages = this.state.errors.map((error, idx) => {
        return <div className="sBError" key={idx}>{error}</div>;
      });
    }

    return (
      <div>
        <Modal
          isOpen={this.props.sbModalIsOpen}
          contentLabel="SettleBillModal"
          style={customStyles}
          onRequestClose={this.props.closeSBModal}
          >
          <div className="settle-bill-main">
            <div className="s-b-header">Settle up</div>
            <div className="settle-bill-by-friend">
              <div className="add-name-select">
                <form className="radio-select">
                  <label className="settleByFriendLabel"><input type="radio" className="settlement-type" name="settlement-type" value="settle by friend" onClick={this.showFriendForm}/>Settle by friend</label>
                  <label className="settleByBillLabel"><input type="radio" className="settlement-type" name="settlement-type" value="settle by bill" onClick={this.showBillForm}/>Settle by bill</label>
                </form>
              </div>
              <div className={dropdownSettleFriendForm}>
              <form className="settle-friend-form" onSubmit={this.friendHandleSubmit}>
                <button className="settle-form-cancel" onClick={() => this.props.closeSBModal()}>Cancel</button>
                <input className="settle-form-submit" type="submit" value="Save"/>

                  <select className="add-friend-settle" onChange={this.addFriend} defaultValue="">
                    <option disabled value=""> -- Add Friend -- </option>
                    {selectOption}
                  </select>

                  <input
                    className="settle-input-bill"
                    type="date"
                    value={this.state.paidDate}
                    onChange={this.update('paidDate')}
                  />

              </form>
              </div>

              <div className={dropdownSettleBillForm}>
              <form className='settle-bill-form' onSubmit={this.billHandleSubmit}>
                <button className="settle-form-cancel" onClick={() => this.props.closeSBModal()}>Cancel</button>
                <input className="settle-form-submit" type="submit" value="Save"/>

                  <select className="add-friend-settle" onChange={this.addFriend} defaultValue="">
                    <option disabled value=""> -- Add Friend -- </option>
                    {selectOption}
                  </select>
                  <input
                    className="settle-input-bill"
                    type="date"
                    value={this.state.paidDate}
                    onChange={this.update('paidDate')}
                  />
              </form>
              <div>
                {errorMessages}
              </div>
              <div className="show-bills-to-settle">
                <ul className="show-bill-details-by-friend">
                  {showBills}
                </ul>
              </div>

              </div>
            </div>


        </div>
      </Modal>
    </div>
    );
  }
}

export default SettleBill;
