import React from 'react';
import FriendsContainer from '../lsidebar/friends_container';
import HomeHeaderContainer from './header/home_header_container';
import MainComponent from './main';

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
            {props.main}
          </div>

          <div className="rsidebar">
            {props.rightpanel}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
