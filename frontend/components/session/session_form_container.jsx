import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
