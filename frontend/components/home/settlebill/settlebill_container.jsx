import { connect } from 'react-redux';
import SettleBill from './settlebill';
import { fetchFriendships } from '../../../actions/friendships_actions';
import { fetchBills, settleBill, settleFriend } from '../../../actions/bills_actions';

const mapStateToProps = (state ,ownProps) => {
  let netBalance = 0;
  let youAreOwed = 0;
  let youOwe = 0;
  let loadedFriends = null;

  if (state.bills.outstandingBalances) {
    netBalance = state.bills.outstandingBalances.netBalance;
    youAreOwed = state.bills.outstandingBalances.youAreOwed;
    youOwe = state.bills.outstandingBalances.youOwe;
  }

  if (state.friendships.friends) {
    loadedFriends = Object.keys(state.friendships.friends)
      .map(id => state.friendships.friends[id]);
  }

  return ({
    netBalance: netBalance,
    youAreOwed: youAreOwed,
    youOwe: youOwe,
    currentUser: state.session.currentUser,
    friends: loadedFriends
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateBill: (bill) => dispatch(updateBill(bill)),
    updateOwer: (ower) => dispatch(updateOwer(bill)),
    fetchFriendships: (id) => dispatch(fetchFriendships(id)),
    fetchBills: () => {
      return dispatch(fetchBills());
    }
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettleBill);
