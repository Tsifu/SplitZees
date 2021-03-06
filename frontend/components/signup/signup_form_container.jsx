import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: Object.keys(state.session.errors).map(id => state.session.errors[id])
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
