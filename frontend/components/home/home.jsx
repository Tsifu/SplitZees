import React from 'react';
import { withRouter } from 'react-router';
import FriendsContainer from '../lsidebar/friends_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  signout() {
    this.props.logout().then(() => {
      this.props.router.push("/");
    });
  }

  render() {
    if (!this.props.currentUser) {
      return <div></div>;
    }

    return (
      <div className="home">
        <div className="home-header">
          Welcome {this.props.currentUser.username}!
          <button onClick={this.signout}>Log Out</button>
        </div>

        <div className="lsidebar">
          <FriendsContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
