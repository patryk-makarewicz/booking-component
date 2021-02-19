import * as actionTypes from '../Types/ui-types';

const INITIAL_STATE = {
  showBox: false,
  showNextRoom: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CLOSE_ROOM:
      return {
        ...state,
        showNextRoom: !state.showNextRoom,
      };
    case actionTypes.SHOW_BOX:
      return {
        ...state,
        showBox: !state.showBox,
      };
    default:
      return state;
  }
};

export default uiReducer;
