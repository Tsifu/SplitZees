import React from 'react';
import { withRouter } from 'react-router';
import FriendsContainer from '../lsidebar/friends_container';
import HomeHeaderContainer from './header/home_header_container';

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
        <nav className="home-nav">
          <HomeHeaderContainer />
        </nav>

        <main>
          <div className="main-content group">
            <div className="lsidebar">
              <FriendsContainer />
            </div>

            <div className="main-section">
              Hello
            </div>

            <div className="rsidebar">
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Home);
