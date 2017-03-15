import * as BillsUtil from '../util/bill_api_util';
import * as SettleUtil from '../util/settle_api_util';

export const RECEIVE_BILL = "RECEIVE_BILL";
export const RECEIVE_ALL_BILLS = "RECEIVE_ALL_BILLS";
export const RECEIVE_SB_ERRORS = "RECEIVE_SB_ERRORS";
export const RECEIVE_SF_ERRORS = "RECEIVE_SF_ERRORS";
export const RECEIVE_CB_ERRORS = "RECEIVE_CB_ERRORS";

export const receiveBill = (bill) => ({
  type: RECEIVE_BILL,
  balanceByFriends: bill.balanceByFriends,
  billsByFriends: bill.billsByFriends,
  outstandingBalances: bill.outstandingBalances,
  outstandingReceivables: bill.outstandingReceivables
});

export const receiveAllBills = (bills) => {
  return ({
    type: RECEIVE_ALL_BILLS,
    balanceByFriends: bills.balanceByFriends,
    billsByFriends: bills.billsByFriends,
    outstandingBalances: bills.outstandingBalances,
    outstandingPayables: bills.outstandingPayables,
    outstandingReceivables: bills.outstandingReceivables,
    settledPayables: bills.settledPayables,
    settledReceivables: bills.settledReceivables
  });
};

export const receiveCBErrors = (errors) => {

  return {
    type: RECEIVE_CB_ERRORS,
    errors
  };
};

export const receiveSBErrors = (errors) => {

  return {
    type: RECEIVE_SB_ERRORS,
    errors
  };
};

export const receiveSFErrors = (errors) => {

  return {
    type: RECEIVE_SF_ERRORS,
    errors
  };
};


export const fetchBills = () => dispatch => {
  return BillsUtil.fetchBills().then(bills => dispatch(receiveAllBills(bills)));
};

export const createBill = (bill) => dispatch => {
  return BillsUtil.createBill(bill)
    .then(bill => dispatch(receiveBill(bill)),
      err => dispatch(receiveCBErrors(err.responseJSON)));
};

export const settleBill = (bill) => dispatch => {
  return SettleUtil.settleBill(bill)
    .then(bills => dispatch(receiveAllBills(bills)),
      err => dispatch(receiveSBErrors(err.responseJSON)));
};

export const settleFriend = (friend) => dispatch => {
  return SettleUtil.settleFriend(friend)
    .then(bills => dispatch(receiveAllBills(bills)),
      err => dispatch(receiveSFErrors(err.responseJSON)));
};
