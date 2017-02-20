import {
  RECEIVE_BILL
} from '../actions/bills_actions';

import merge from 'lodash/merge';

const _defaultState = {
  outstandingReceivables: {},
  outstandingPayables: {},

  settledReceivables: {},
  settledPayables: {},

  createBillErrors: {},
  showBillErrors: {}
};

const BillsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BILL:
      if (action.bill.amount > 0) {
        let updatedReceivables = merge( {}, oldState.outstandingReceivables, {[action.bill.id]: action.bill });

        let newState = merge( {}, oldState, { outstandingReceivables: updatedReceivables});

        return newState;
      } else {
        let updatedPayables = merge( {}, oldState.updatedPayables, { [action.bill.id]: action.bill });

        let newState = merge( {}, oldState, { outstandingPayables: updatedPayables});

        return newState;
      }
    case RECEIVE_BILLS:
      let currentState = {
        outstandingReceivables: action.outstandingReceivables,
        outstandingPayables: action.outstandingPayables,
        settledReceivables: action.settledReceivables,
        settledPayables: action.settledPayables,
        createBillErrors: {},
        showBillErrors: {}
      };
        return merge( {}, currentState );
    default:
      return oldState;
  }
};
