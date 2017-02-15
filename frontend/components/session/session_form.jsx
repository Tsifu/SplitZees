import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: "", password: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => {
      this.props.router.push("/home");
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render () {
    return (
      <div>

        <h3>Sign In</h3>
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>

          <label>Password
            <input
              type='text'
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>

          <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
