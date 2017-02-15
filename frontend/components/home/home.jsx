import React from 'react';
import { withRouter } from 'react-router';

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
      <div>
        Welcome {this.props.currentUser.username}!
        <button onClick={this.signout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Home);
