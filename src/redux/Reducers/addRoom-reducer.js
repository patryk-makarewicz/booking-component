import * as actionTypes from '../Types/types';

const INITIAL_STATE = {
  showNextRoom: false,
};

const nextRoomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_ROOM:
      return {
        ...state,
        showNextRoom: !state.showNextRoom,
      };
    default:
      return state;
  }
};

export default nextRoomReducer;
