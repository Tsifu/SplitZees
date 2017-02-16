import React from 'react';
import { hashHistory } from 'react-router';

const editLink = (path) => (e) => {
  e.preventDefault();
  hashHistory.push(path);
}

class Header extends React.Component {

  render() {
    return (
      <div>
        <div className="header">

          <div className="logo">
            <img src={window.images.splitzeesLogo}/>
          </div>

          <div className="login-button">
            <button className="btn-signin" onClick={editLink("/signin")}>Log in</button>
            or
            <button className="btn-signup" onClick={editLink("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
