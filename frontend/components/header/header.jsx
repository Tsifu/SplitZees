import React from 'react';
import { hashHistory } from 'react-router';

const editLink = (path) => (e) => {
  e.preventDefault();
  hashHistory.push(path);
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.guestlogin = this.guestlogin.bind(this);
  }

  guestlogin() {
    const guest = { email: "guest@gmail.com", password: "guest123" };

    this.props.login(guest).then(() => {
      this.props.router.push("/home");
    });
  }

  render() {
    return (
      <div>
        <div className="header">

          <div className="logo">
            <img src={window.images.splitzeesLogo}/>
          </div>

          <div className="login">
            <button className="btn-guestlogin" onClick={this.guestlogin}>Guest</button>
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
