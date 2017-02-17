import { connect } from 'react-redux';
import Friends from './friends';
import { fetchFriendships, createfriendship } from '../../actions/friendships_actions';

const mapStateToProps = (state) => {
  let loadedFriends;
  let loadedProspectiveFriends;
  let loadedFriendshipErrors;
  let loadedFriendErrors;

  if (state.friendships.friends) {
    loadedFriends = Object.keys(state.friendships.friends)
      .map(id => state.friendships.friends[id]);

    loadedProspectiveFriends = Object.keys(state.friendships.prospectiveFriends)
      .map(id => state.friendships.prospectiveFriends[id]);

    loadedFriendshipErrors = Object.keys(state.friendships.friendshipErrors)
      .map(id => state.friendships.friendshipErrors[id]);

    loadedFriendErrors = Object.keys(state.friendships.friendErrors)
      .map(id => state.friendships.friendErrors[id]);
  } else {
    loadedFriends = null;
    loadedProspectiveFriends = null;
    loadedFriendshipErrors = null;
    loadedFriendErrors = null;
  }

  return({
    currentUser: state.session.currentUser,
    friends: loadedFriends,
    prospectiveFriends: loadedProspectiveFriends,
    friendshipErrors: loadedFriendshipErrors,
    friendErrors: loadedFriendErrors
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchFriendships: (id) => dispatch(fetchFriendships(id)),
    createfriendship: (friendship) => dispatch(createfriendship(friendship))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
