import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendshipsReducer from './friendships_reducer';
import BillsReducer from './bills_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  friendships: FriendshipsReducer,
  bills: BillsReducer
});

export default RootReducer;
