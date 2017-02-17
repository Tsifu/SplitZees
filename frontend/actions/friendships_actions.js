import * as FriendshipUtil from '../util/friendships_api_util';

export const RECEIVE_FRIENDSHIPS = "RECEIVE_FRIENDSHIPS";
export const RECEIVE_FRIENDSHIPS_ERRORS = "RECEIVE_FRIENDSHIPS_ERRORS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERROR";

export const receiveFriendships = ({friends, prospectiveFriends}) => ({
  type: RECEIVE_FRIENDSHIPS,
  friends,
  prospectiveFriends
});

export const receiveFriendshipsErrors = (errors) => ({
  type: RECEIVE_FRIENDSHIPS_ERRORS,
  errors
});

export const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
});

export const receiveFriendErrors = (errors) => ({
  type: RECEIVE_FRIEND_ERRORS,
  errors
});


export const fetchFriendships = (id) => dispatch => {
  return FriendshipUtil.fetchFriendships(id)
    .then((friendships) => dispatch(receiveFriendships(friendships)),
      err => dispatch(receiveFriendshipsErrors(err.responseJSON)));
};

export const createfriendship = (friendship) => dispatch => {
  return FriendshipUtil.fetchFriendships(friendship)
    .then((friend) => dispatch(friend),
      err => dispatch(receiveFriendErrors(err.responseJSON)));
};
