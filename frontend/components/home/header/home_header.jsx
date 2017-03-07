import React from 'react';
import { withRouter } from 'react-router';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);

    this.state = {
      dropDown: false,
    };

    this.dropDownMenu = this.dropDownMenu.bind(this);
  }

  signout() {
    this.props.logout().then(() => {
      this.props.router.push("/");
    });
  }

  dropDownMenu() {
    this.setState({ dropDown: !this.state.dropDown});
  }

  render() {
    let dropDownKlass = this.state.dropDown === false ? "dropdown-content-home" : "dropdown-content-home show";

    return (
      <div className="home-header">

        <div className="home-logo">
          <img src={window.images.splitzeesLogo}/>
        </div>
        <div className="home-menu">
          <div className="logout-dropdown">

          <a className="user-menu" onClick={this.dropDownMenu}>
            <img className="waldo" src={window.images.waldo}/>
            <div className="username-menu">{this.props.currentUser.username}</div>
            <div className="arrow-down"></div>
          </a>

          <div id="myDropdown" className={dropDownKlass}>
            <a className="log-out-menu"onClick={this.signout}>Log Out</a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeHeader);
