import { connect } from 'react-redux';
import RightSide from './rside';
import { fetchFriendships } from '../../actions/friendships_actions';
import { fetchBills } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps) => {
  let friendId = "";
  let friendName = "";

  if (state.friendships.friends) {
    friendId = ownProps.params.friendId;
    friendName = state.friendships.friends[friendId].username;
  }

  let netBalance = [];

  if (state.bills.balanceByFriends) {
    netBalance = state.bills.balanceByFriends[friendId];
  }
  return ({
    name: friendName,
    netBalance: netBalance
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchFriendships: (id) => dispatch(fetchFriendships(id)),
    fetchBills: () => {
      return dispatch(fetchBills());
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSide);
