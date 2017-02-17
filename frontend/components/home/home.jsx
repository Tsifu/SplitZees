import React from 'react';
import { withRouter } from 'react-router';
import FriendsContainer from '../lsidebar/friends_container';
import HomeHeader from './home_header';

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

          <div className="header-section">
            <div className="home-logo">
              <img src={window.images.splitzeesLogo}/>
            </div>

            <a className="account-setup">
              <div>
                <img className="user-icon" src={window.images.userIcon}/>
              </div>

              <div className="account-menu">
                <button className="btn-account" onClick={this.signout}>{this.props.currentUser.username}</button>
              </div>
              <div className="arrow-down"></div>

            </a>
          </div>
        </div>

        <div className="home-body">
          <div className="lsidebar">
            <FriendsContainer />
          </div>
          <div class="dashboard">

          </div>
          <div className="rsidebar">

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);
