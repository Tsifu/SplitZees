import * as BillsUtil from '../util/bill_api_util';

export const RECEIVE_BILL = "RECEIVE_BILL";
export const RECEIVE_ALL_BILLS = "RECEIVE_ALL_BILLS";

export const receiveBill = (bill) => ({
  type: RECEIVE_BILL,

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

export const fetchBills = () => dispatch => {
  return BillsUtil.fetchBills().then(bills => dispatch(receiveAllBills(bills)));
};

export const createBill = (bill) => dispatch => {
  return BillsUtil.createBill(bill).then(bill => dispatch(receiveBill(bill)));
};