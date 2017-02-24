import { connect } from 'react-redux';
import SettleBill from './settlebill';
import { fetchFriendships } from '../../../actions/friendships_actions';
import { fetchBills, settleBill, settleFriend } from '../../../actions/bills_actions';

const mapStateToProps = (state ,ownProps) => {
  let loadedBalanceByFriends = {};
  let loadedBillsByFriends = {};
  let loadedFriends = null;
  let nameToId = {};

  if (state.bills.balanceByFriends) {
    loadedBalanceByFriends = state.bills.balanceByFriends;
    loadedBillsByFriends = state.bills.billsByFriends;
  }

  if (state.friendships.friends) {
    loadedFriends = Object.keys(state.friendships.friends)
      .map(id => state.friendships.friends[id]);

    loadedFriends.forEach(friend => {
      nameToId[friend.username] = friend.id;
    });
  }

  return ({
    balanceByFriends: loadedBalanceByFriends,
    billsByFriends: loadedBillsByFriends,
    currentUser: state.session.currentUser,
    friends: loadedFriends,
    nameToId: nameToId
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    settleBill: (bill) => dispatch(settleBill(bill)),
    settleFriend: (ower) => dispatch(settleFriend(ower)),
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
