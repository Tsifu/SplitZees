import {
  RECEIVE_BILL,
  RECEIVE_ALL_BILLS
} from '../actions/bills_actions';

import merge from 'lodash/merge';

const _defaultState = {
  balanceByFriends: null,
  billsByFriends: null,
  outstandingBalances: null,
  outstandingPayables: null,
  outstandingReceivables: null,
  settledPayables: null,
  settledReceivables: null
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
      outstandingPayables: action.outstandingPayables
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

    default:
      return oldState;
  }
};

export default BillsReducer;
