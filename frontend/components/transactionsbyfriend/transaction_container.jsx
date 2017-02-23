import { connect } from 'react-redux';
import Transactions from './transactions';
import { fetchFriendships } from '../../actions/friendships_actions';
import { fetchBills } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps) => {
  let friendId = null;
  let friendName = null;
  let loadedbills = [];


  if (state.friendships.friends) {
    friendId = ownProps.params.friendId;
    friendName = state.friendships.friends[friendId].username;
  }

  if (state.bills.billsByFriends) {
    loadedbills = state.bills.billsByFriends[friendId];
  }

  return ({
    currentUser: state.session.currentUser,
    name: friendName,
    bills: loadedbills
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
)(Transactions);
