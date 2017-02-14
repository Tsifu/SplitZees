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
      this.props.router.push("/");
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
          <ul>
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              onChange={this.update("username")}
              value={this.state.username}
              />
          </label>

          <label>Password
            <input
              type="text"
              onChange={this.update("password")}
              value={this.state.password}
              />
          </label>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
