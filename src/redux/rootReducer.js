import { combineReducers } from 'redux';
import roomOneGuestReducer from './Reducers/roomOne-reducer';
import nextRoomReducer from './Reducers/addRoom-reducer';

const rootReducer = combineReducers({
  roomOne: roomOneGuestReducer,
  nextRoom: nextRoomReducer,
});

export default rootReducer;
