import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: "Email address", password: "Password" };
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

  clearText(target) {
    return (e) => {
      e.target.value ="";
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
          <label>
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              onFocus={this.clearText(this)}
              />
          </label>

          <label>
            <input
              type='text'
              value={this.state.password}
              onChange={this.update('password')}
              onFocus={this.clearText(this)}
              />
          </label>

          <input type="submit" value="Log in to SplitZees"/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
