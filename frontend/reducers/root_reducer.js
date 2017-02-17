import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendshipsReducer from './friendships_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friendships: FriendshipsReducer
});

export default RootReducer;
