import { connect } from 'react-redux';
import Transactions from './transactions';

const mapStateToProps = (state, ownProps) => {
  let friendId = ownProps.params.friendId;
  let friendName = state.friendships.friends[friendId].username;
  let loadedbills = state.bills.billsByFriends[friendId];

  return ({
    name: friendName,
    bills: loadedbills
  });
};

export default connect(
  mapStateToProps
)(Transactions);
