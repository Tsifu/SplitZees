import { connect } from 'react-redux';
import Header from './header';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: Object.keys(state.session.errors).map(id => state.session.errors[id])
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
