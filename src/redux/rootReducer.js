import { combineReducers } from 'redux';
import roomOneGuestReducer from './Reducers/roomOne-reducer';
import roomTwoGuestReducer from './Reducers/roomTwo-reducer';
import nextRoomReducer from './Reducers/addRoom-reducer';

const rootReducer = combineReducers({
  roomOne: roomOneGuestReducer,
  roomTwo: roomTwoGuestReducer,
  nextRoom: nextRoomReducer,
});

export default rootReducer;
