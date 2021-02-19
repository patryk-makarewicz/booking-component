import { combineReducers } from 'redux';
import counterGuestReducer from './GuestNumber/reducer';

const rootReducer = combineReducers({
  counterGuest: counterGuestReducer,
});

export default rootReducer;
