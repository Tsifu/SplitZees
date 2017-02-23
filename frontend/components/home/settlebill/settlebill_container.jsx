import { connect } from 'react-redux';
import SettleBill from './settlebill';
// import { updateBill } from '../../../actions/bills_actions';

const mapStateToProps = (state ,ownProps) => {
  let netBalance = 0;
  let youAreOwed = 0;
  let youOwe = 0;

  if (state.bills.outstandingBalances) {
    netBalance = state.bills.outstandingBalances.netBalance;
    youAreOwed = state.bills.outstandingBalances.youAreOwed;
    youOwe = state.bills.outstandingBalances.youOwe;
  }
  return ({
    netBalance: netBalance,
    youAreOwed: youAreOwed,
    youOwe: youOwe,
    currentUser: state.session.currentUser,
    friends: state.friendships.friends
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateBill: (bill) => dispatch(updateBill(bill)),
    updateOwer: (ower) => dispatch(updateOwer(bill))
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettleBill);
