import {
  RECEIVE_BILL,
  RECEIVE_ALL_BILLS,
  RECEIVE_CB_ERRORS,
  CLEAR_ERRORS
} from '../actions/bills_actions';

import merge from 'lodash/merge';

const _defaultState = {
  balanceByFriends: null,
  billsByFriends: null,
  outstandingBalances: null,
  outstandingPayables: null,
  outstandingReceivables: null,
  settledPayables: null,
  settledReceivables: null,
  errors: null,
};

const BillsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BILL:
    let updatedState = {
      balanceByFriends: action.balanceByFriends,
      billsByFriends: action.billsByFriends,
      outstandingBalances: action.outstandingBalances,
      outstandingReceivables: action.outstandingReceivables,
    };
    return merge( {}, oldState, updatedState);

    case RECEIVE_ALL_BILLS:
      let currentState = {
        balanceByFriends: action.balanceByFriends,
        billsByFriends: action.billsByFriends,
        outstandingBalances: action.outstandingBalances,
        outstandingReceivables: action.outstandingReceivables,
        outstandingPayables: action.outstandingPayables,
        settledReceivables: action.settledReceivables,
        settledPayables: action.settledPayables,
      };
      return merge( {}, currentState );

    case RECEIVE_CB_ERRORS:
      const newState = merge({}, oldState, { errors: action.errors });
      return newState;

    case CLEAR_ERRORS:
      return Object.assign({}, oldState, { errors: null });

    default:
      return oldState;
  }
};

export default BillsReducer;
