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
    transform             : 'translate(-50%, -100%)',
    border                : '1px solid #ccc',
    borderRadius          : '4px',
    padding               : '0px',

  }
};

class SettleBill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ower_userid: "",
      bill_id: "",
      paid_date: "",
      showBillForm: false,
      showFriendForm: false
    };
    this.showFriendForm = this.showFriendForm.bind(this);
    this.showBillForm = this.showBillForm.bind(this);
  }

  showFriendForm() {
    this.setState({ showFriendForm: true, showBillForm: false });
  }

  showBillForm() {
    this.setState({ showFriendForm: false, showBillForm: true });
  }

  render() {
    let selectOption;

    if (this.props.friends) {
      selectOption = this.props.friends.map(friend => {
        return (
          <option key={friend.id} value={friend.value}>{friend.username}</option>
        );
      });
    }


    let dropdownSettleBillForm = this.state.showBillForm ? "settle-bill" : "settle-bill hide";
    let dropdownSettleFriendForm = this.state.showFriendForm ? "settle-friend" : "settle-friend hide";

    return (
      <div>
        <Modal
          isOpen={this.props.sbModalIsOpen}
          contentLabel="SettleBillModal"
          style={customStyles}
          onRequestClose={this.props.closeSBModal}
          >
          <div className="settle-bill-main">

            <div>Hellsdfasdfasfso</div>
            <div className="settle-bill-by-friend">
              <div className="add-name-select">

                <br/>
                <form>
                  <input type="radio" name="settlement-type" value="settle by friend" onClick={this.showFriendForm}/>Settle by friend
                  <input type="radio" name="settlement-type" value="settle by bill" onClick={this.showBillForm}/>Settle by bill

                </form>
              </div>

              <div className={dropdownSettleFriendForm}>
              <form className="settle-friend-form">
                <input type="text" value="dkjhfaskjfdhkjashf"/>
                  <select name="add-friend" onChange={this.addFriend} defaultValue="">
                    <option disabled value=""> -- Add Friend -- </option>
                    {selectOption}
                  </select>
              </form>
              </div>

              <div className={dropdownSettleBillForm}>
              <form className='settle-bill-form'>
                <input type="text" value="ldkfjal;skdfj"/>
                  <select name="add-friend" onChange={this.addFriend} defaultValue="">
                    <option disabled value=""> -- Add Friend -- </option>
                    {selectOption}
                  </select>
              </form>
              </div>
            </div>


            <button onClick={() => this.props.closeSBModal()}>Cancel</button>
        </div>
      </Modal>
    </div>
    );
  }
}

export default SettleBill;
