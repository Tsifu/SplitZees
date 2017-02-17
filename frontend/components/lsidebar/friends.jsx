import React from 'react';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
      this.props.fetchFriendships(currentUser.id);
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
      this.props.createfriendship({ user_id: currentUser.id, friend_id: friendId });
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

    let results = this.matches().map((result) => {
      return (
        <li key={result.id} onClick={this.selectName}>{result.email}</li>
      );
    });

    return (
      <div>
        <h2>FRIENDS</h2>
        <button onClick={this.openModal}>+add</button>
        <ul>
          {
            this.props.friends.map(friend => (
              <li key={friend.id}>{friend.username}</li>
            ))
          }
        </ul>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="addFriendsModal"
          >

          <div className="searchForFriends">
            <form onSubmit={this.handleSubmit}>
              <label>Search for friend by email address
                <input
                  type="text"
                  onChange={this.handleInput}
                  value={this.state.inputVal}
                  placeholder="Search..."
                  />
              </label>

              <button onClick={this.closeModal}>Close Modal</button>

              <input type="submit" value="Add Friend"/>

              <ul>
                <ReactCSSTransitionGroup
                  transitionName='auto'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  {results}
                </ReactCSSTransitionGroup>
              </ul>
            </form>
          </div>

        </Modal>
      </div>
    );
  }
}

export default Friends;
