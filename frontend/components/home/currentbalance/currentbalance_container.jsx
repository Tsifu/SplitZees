import { connect } from 'react-redux';
import CurrentBalance from './currentbalance';

const mapStateToProps = (state) => {
  let youAreOwedByFriends = [];
  let youOweByFriends = [];

  let friends = state.friendships.friends;
  let bills = state.bills.balanceByFriends;
  if (bills) {
    Object.keys(bills).forEach(id => {
      if (bills[id] > 0) {
        youAreOwedByFriends.push(
          {
            [friends[id].username] : bills[id],
            userId : id
          }
        );
      } else {
        youOweByFriends.push(
          {
            [friends[id].username] : bills[id],
            userId : id
          }
        );
      }
    });
  }
  return ({
    currentUser: state.session.currentUser,
    youOwe: youOweByFriends,
    youAreOwed: youAreOwedByFriends
  });
};

export default connect(
  mapStateToProps
)(CurrentBalance);
