import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createBill, fetchBills } from '../../../actions/bills_actions';
import { fetchFriendships} from '../../../actions/friendships_actions';

const mapStateToProps = (state) => {
  let netBalance = 0;
  let youAreOwed = 0;
  let youOwe = 0;
  let loadedFriends;

  if (state.friendships.friends) {
    loadedFriends = Object.keys(state.friendships.friends)
      .map(id => state.friendships.friends[id]);
  } else {
    loadedFriends = null;
  }

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
    friends: loadedFriends
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchFriendships: (id) => dispatch(fetchFriendships(id)),
    createBill: (bill) => dispatch(createBill(bill)),
    fetchBills: () => {
      return dispatch(fetchBills());
    }
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
