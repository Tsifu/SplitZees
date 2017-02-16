import React from 'react';
import { withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => {
      this.props.router.push("/home");
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (

      <div className="signup-page">
        <div className="signup-container">
        <div className="signup-logo">
          <img src={window.images.smallLogo}/>
        </div>

        <div className="signup-form">
          <div>
            <h2>INTRODUCE YOURSELF</h2>
            <ul className="error-messages">
              {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>

          <div>
            <form onSubmit={this.handleSubmit}>
              <label className="lbl-name">Hi there! My name is
                <br/>
                <input
                  className="inpt-name"
                  type="text"
                  onChange={this.update("username")}
                  value={this.state.username}

                  />
              </label>
              <br/>
              <label className="lbl-signup">Here's my <strong>email address:</strong>
              <br/>
                <input
                  className="inpt-signup"
                  type="email"
                  onChange={this.update("email")}
                  value={this.state.email}
                  />
              </label>
              <br/>
              <label className="lbl-signup">And here is my <strong>password:</strong>
              <br/>
                <input
                  className="inpt-signup"
                  type="text"
                  onChange={this.update("password")}
                  value={this.state.password}
                  />
                <br/>
              </label>
              <input className="signin-submit" type="submit" value="Sign me up!"/>
            </form>
          </div>
          </div>
      </div>
    </div>
    );
  }
}

export default withRouter(SignUpForm);
