import * as BillsUtil from '../util/bill_api_util';

export const RECEIVE_BILL = "RECEIVE_BILL";

export const receiveBill = (bill) => ({
  type: RECEIVE_BILL,
  bill
});
