import React from 'react';
import { hashHistory } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import { withRouter } from 'react-router';

const editLink = (path) => (e) => {
  e.preventDefault();
  hashHistory.push(path);
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.guestlogin = this.guestlogin.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  guestlogin() {
    const guest = { email: "guest@gmail.com", password: "guest123" };

    this.props.login(guest).then(() => {
      this.props.router.push("/home");
    });
  }

  handleDropDown() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let dropdownClass = this.state.open ? "dropdown-content" : "dropdown-content hide";
    return (
      <div>
        <div className="header">

          <div className="logo">
            <img src={window.images.splitzeesLogo}/>
          </div>

          <div className="login">
            <button className="btn-guestlogin" onClick={this.guestlogin}>Guest</button>

            <div className="dropdown">
              <button className="btn-signin" onClick={this.handleDropDown}>Log in</button>
              <div className={dropdownClass}>
                <SessionFormContainer />
              </div>
            </div>
            <div className="or">ordasdf</div>
            <button className="btn-signup" onClick={editLink("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
