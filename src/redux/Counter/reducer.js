import * as actionTypes from './types';

const INITIAL_STATE = {
  room: 0,
  person: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_ROOM_INC:
      return { ...state, room: state.room + 1 };
    case actionTypes.COUNTER_ROOM_DEC:
      return { ...state, room: state.room - 1 };
    case actionTypes.COUNTER_PERSON_INC:
      return { ...state, person: state.person + 1 };
    case actionTypes.COUNTER_PERSON_DEC:
      return { ...state, person: state.person - 1 };
    default:
      return state;
  }
};

export default counterReducer;
