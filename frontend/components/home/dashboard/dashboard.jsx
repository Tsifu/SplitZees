import React from 'react';
import Modal from 'react-modal';
import SettleBillContainer from '../settlebill/settlebill_container';

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
    top                   : '60%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -100%)',
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
      sbModalIsOpen: false,
      owers: [],
      description: "",
      amount: "",
      date: "",
      splitAmount: 0,
      inputVal: "",
      friends: {},
      friendsError: null,
      attachedFile: "",
      attachedUrl: "",
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSBModal = this.openSBModal.bind(this);
    this.closeSBModal = this.closeSBModal.bind(this);
    this.attachFile = this.attachFile.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({modalIsOpen: false });
    this.clearState();
    this.props.clearErrors();
  }

  openSBModal() {
    this.setState({ sbModalIsOpen: true });
  }

  closeSBModal() {
    this.setState({ sbModalIsOpen: false });

  }

  clearState() {
    this.setState({description:"", owers: [], amount:"", date:"", splitAmount: 0, friendsError: null});
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

  attachFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ attachedFile: file, attachedUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
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

    let formData = new FormData();
    formData.append("bill[description]", this.state.description);
    formData.append("bill[amount]", this.state.amount);
    formData.append("bill[bill_date]", this.state.date);
    formData.append("bill[owers]", JSON.stringify(owersAndAmount));
    formData.append("bill[attachment]", this.state.attachedFile);

    // let bill = {
    //   description : this.state.description,
    //   amount : this.state.amount,
    //   bill_date : this.state.date,
    //   owers : owersAndAmount
    // };

    if (this.state.owers.length === 0) {
      this.setState({ friendsError: "Please add friend(s) to bill" });
    }

    this.props.createBill(formData).then(() => {
      this.closeModal();
      this.clearState();
    });
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

    let friendsError;

    if (this.state.friendsError) {
      friendsError = <div className="friendsError">{this.state.friendsError}</div>;
    }

    let cbErrors;
    if (this.props.cbErrors) {
      cbErrors = this.props.cbErrors.map((error, idx) => {
        return (
          <li className="cbError" key={idx}>{error}</li>
        );
      });
    }

    let owers;
    if (this.state.owers.length > 0) {
      owers = this.state.owers.join(", ");
    }

    return (
      <div className="main-top">
        <div className="dashboard">
          <h1 className="dash-title">Dashboard</h1>

          <div className="dashboard-buttons">
            <button className="addBill" onClick={this.openModal}>Add a bill</button>
            <button className="settleBill" onClick={this.openSBModal}>Settle up</button>
          </div>
        </div>

        <div className="balances">
          <div className="total">
            <div className="balance-title">total balance</div>
            <div className={netBalanceColor}>${this.props.netBalance.toFixed(2)}</div>
          </div>

          <div className="youOwe">
            <div className="balance-title balance-border">you owe</div>
            <div className={youOweColor}>${Math.abs(this.props.youOwe).toFixed(2)}</div>
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
            <div className="show-owers">
              <div>With <strong>you</strong> and:  </div>
              <div className="add-friends-area">
                  {owers}
              </div>
          </div>
          <div>
            {friendsError}
            <ul className="cbErrors">
              {cbErrors}
            </ul>
          </div>
          <div className="add-name-select">
            <select className="add-friend" onChange={this.addFriend} defaultValue="">
              <option disabled value=""> -- Add Friend -- </option>
              {selectOption}
            </select>
          </div>
            <form className="add-bill-form" onSubmit={this.handleSubmit}>


              <div className="bill-info">
                <input
                  className="input-bill"
                  type="text"
                  value={this.state.description}
                  placeholder="Enter Description"
                  onChange={this.update('description')}
                />

              <br/>
                <input
                  className="input-bill"
                  type="number"
                  value={this.state.amount}
                  placeholder="Enter Amount"
                  onChange={this.update('amount')}
                />

              <br/>
                <input
                  className="input-bill"
                  type="date"
                  value={this.state.date}
                  onChange={this.update('date')}
                />

              <br/>
                <input
                  className="input-attachment"
                  type="file"
                  onChange={this.attachFile}
                  placeholder="Upload bill(pdf)"
                />
              </div>

            <br/>
            <button className="close-modal-button" onClick={this.closeModal}>Close</button>
            <input className="submit-add-bill" type="submit" value="Save"/>

            </form>
          </div>
        </Modal>

          <SettleBillContainer closeSBModal={this.closeSBModal} sbModalIsOpen={this.state.sbModalIsOpen}/>
      </div>
    );
  }
}

export default Dashboard;
