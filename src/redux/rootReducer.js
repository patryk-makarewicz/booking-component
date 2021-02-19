import { combineReducers } from 'redux';
import counterGuestReducer from './GuestNumber/reducer';
import nextRoomReducer from './AddRoom/redux';

const rootReducer = combineReducers({
  counterGuest: counterGuestReducer,
  nextRoom: nextRoomReducer,
});

export default rootReducer;
