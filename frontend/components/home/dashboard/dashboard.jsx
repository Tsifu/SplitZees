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
      inputVal: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
      this.setState({modalIsOpen: false});
  }

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
            <form className="submit-form" onSubmit={this.handleSubmit}>

            </form>
          </div>
        </Modal>

      </div>
    );
  }
}

export default Dashboard;
