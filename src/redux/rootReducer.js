import { combineReducers } from 'redux';
import roomOneGuestReducer from './Reducers/roomOne-reducer';
import roomTwoGuestReducer from './Reducers/roomTwo-reducer';
import uiReducer from './Reducers/ui-reducer';

const rootReducer = combineReducers({
  roomOne: roomOneGuestReducer,
  roomTwo: roomTwoGuestReducer,
  UI: uiReducer,
});

export default rootReducer;
