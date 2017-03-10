import React from 'react';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';


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

class Friends extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.currentUser;

    this.state = {
      modalIsOpen: false,
      inputVal: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchFriendships(this.props.currentUser.id);
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
      this.setState({modalIsOpen: false});
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let friendId = null;

    this.props.prospectiveFriends.forEach(friend => {
      if (friend.email === this.state.inputVal) {
        friendId = friend.id;
      }
    });

    if (friendId) {
      this.props.createfriendship({ user_id: this.props.currentUser.id, friend_id: friendId });
    }

    this.closeModal();
  }

  matches(){
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.prospectiveFriends;
    }

    this.props.prospectiveFriends.forEach(friend => {
      let sub = friend.email.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(friend);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }


  render() {
    if (!this.props.friends) {
      return <div></div>;
    }

    let results = this.matches().map((result,idx) => {
      return (
        <li className="result-email" key={idx} onClick={this.selectName}>
          <i className="fa fa-user" aria-hidden="true"></i>
            {result.email}
        </li>
      );
    });

    let currentFriends = this.props.friends.map((friend,idx) => (
      <li className="friend" key={idx}>
        <Link className="friend-link" to={`friends/${friend.id}`}>
        <i className="fa fa-user" aria-hidden="true"></i>
        {friend.username}
        </Link>
      </li>
    ));

    return (
      <div className="left-sidebar">
        <div className="back-to-dashboard">
          <Link className="dashboard-link" to="/home">
            <div className="dashboard-path">
              <img className="wallet" src={window.images.wallet}/>
              <div className="dashboard-link-title">Dasboard</div>
            </div>
          </Link>
        </div>

        <div className="friend-menu">
          <div className="friend-title">FRIENDS</div>
          <button className="add-friend-btn" onClick={this.openModal}>+add</button>
        </div>

        <ul className="friends-list">
          {currentFriends}
        </ul>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="addFriendsModal"
          >

          <div className="searchForFriends">
            <div className="searchHeader">
              Search for friend
            </div>
            <form className="submit-form" onSubmit={this.handleSubmit}>

              <div>
                <label>
                  <input
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.inputVal}
                    placeholder=" Search by email..."
                    className="search-field"
                    />
                </label>
              </div>

              <div>
                <button className="search-cancel" onClick={this.closeModal}>Cancel</button>
                <input className="search-save" type="submit" value="Save"/>
              </div>
            </form>


              <ul className="search-results">
                <ReactCSSTransitionGroup
                  transitionName='auto'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  {results}
                </ReactCSSTransitionGroup>
              </ul>
          </div>

        </Modal>
      </div>
    );
  }
}

export default Friends;
