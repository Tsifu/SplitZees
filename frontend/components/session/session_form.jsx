import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: "", password: "" };
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
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="signin-input"
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email Address"
              />
          </label>

          <label>
            <input
              className="signin-input"
              type='text'
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              />
          </label>

          <input className="signinsub" type="submit" value="Log in to SPLITZEES"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
