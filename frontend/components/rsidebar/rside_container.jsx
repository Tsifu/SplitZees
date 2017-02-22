import { connect } from 'react-redux';
import RightSide from './rside';

const mapStateToProps = (state, ownProps) => {
  let friendId = ownProps.params.friendId;
  let friendName = state.friendships.friends[friendId].username;

  return ({
    name: friendName,
    netBalance: state.bills.balanceByFriends[friendId]
  });
};

export default connect(
  mapStateToProps
)(RightSide);
