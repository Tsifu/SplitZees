import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: {}
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser, errors: {} });
    case RECEIVE_ERRORS:
      const currentState = merge({}, oldState, { errors: action.errors });
      return currentState;
    case CLEAR_ERRORS:
      return Object.assign( {}, oldState, { errors: {} });
    default:
      return oldState;
  }
};

export default SessionReducer;
