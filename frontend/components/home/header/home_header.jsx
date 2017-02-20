import React from 'react';
import { withRouter } from 'react-router';

class HomeHeader extends React.Component {
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
    return (
      <div className="home-header">

        <div className="home-logo">
          <img src={window.images.splitzeesLogo}/>
        </div>
        <div className="home-menu">
          <div className="waldo">
            <img src={window.images.waldo}/>
          </div>
          <button className="usermenu" onClick={this.signout}>
            {this.props.currentUser.username}
          </button>
          <div className="arrow-down"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeHeader);
