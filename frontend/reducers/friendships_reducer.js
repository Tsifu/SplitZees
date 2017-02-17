import {
  RECEIVE_FRIEND,
  RECEIVE_FRIENDSHIPS,
  RECEIVE_FRIEND_ERRORS,
  RECEIVE_FRIENDSHIPS_ERRORS } from '../actions/friendship_actions';

const _defaultState = {
  friends: null,
  prospectiveFriends: null,
  friendshipErrors: {},
  friendErrors: {}
};

const FriendshipsReducer = (oldState = _defaultState, action) = {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FRIENDSHIPS:
      return merge(
        {},
        oldState,
        { friends: action.friends },
        { prospectiveFriends: action.prospectiveFriends },
        { friendshipErrors: {} }
        { friendErrors: {} }
      );

    case RECEIVE_FRIEND:
      let updatedFriends = merge( {}, oldState.friends, { [action.friend.id]: action.friend } );

      let updatedProspectiveFriends = merge( {}, oldState.prospectiveFriends);
      delete updatedProspectiveFriends[action.friend.id];

      let currentState = {
        friends: updatedFriends,
        prospectiveFriends: updatedProspectiveFriends,
        friendshipErrors: {},
        friendErrors: {}
      };

      return currentState;

    case RECEIVE_FRIENDSHIPS_ERRORS:
      return merge(
        {},
        oldState,
        { friendshipErrors: actions.errors },
      );

    case RECEIVE_FRIEND_ERRORS:
      return merge(
        {},
        oldState,
        { friendErrors: actions.errors },
      );

    default:
      return oldState;
  }
}

export default FriendshipsReducer;
