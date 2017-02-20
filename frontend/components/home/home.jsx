import React from 'react';
import FriendsContainer from '../lsidebar/friends_container';
import HomeHeaderContainer from './header/home_header_container';
import DashboardContainer from './dashboard/dashboard_container';

function Home(props) {
  if (!props.currentUser) {
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
            <DashboardContainer />
          </div>

          <div className="rsidebar">
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
