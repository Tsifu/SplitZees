import React from 'react';
import Modal from 'react-modal';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.currentUser;

    this.state = {
      newFriendsip: {
        user_id: currentUser.id,
        friend_id: ""
      },

      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.setState({ modalIsOpen: false });
  }

  render() {
    if (!this.props.friends) {
      return <div></div>;
    }

    return (
      <div>
        <h2>FRIENDS</h2>
        <link>+add</link>
        <ul>
          {
            this.props.friends.map(friend => (
              <li key={friend.id}>{friend.username}</li>
            ))
          }
        </ul>
        <Modal
          isOpen={this.state}
          >

        </Modal>
      </div>
    );

  }
}

export default Friends;
