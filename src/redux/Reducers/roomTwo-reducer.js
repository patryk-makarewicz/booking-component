import * as actionTypes from '../Types/roomTwo-types';

const INITIAL_STATE = {
  adultsTwo: 0,
  childrenTwo: 0,
};

const roomTwoGuestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADULTS_TWO_INC:
      return { ...state, adultsTwo: state.adultsTwo + 1 };
    case actionTypes.ADULTS_TWO_DEC:
      return { ...state, adultsTwo: state.adultsTwo - 1 };
    case actionTypes.CHILDREN_TWO_INC:
      return { ...state, childrenTwo: state.childrenTwo + 1 };
    case actionTypes.CHILDREN_TWO_DEC:
      return { ...state, childrenTwo: state.childrenTwo - 1 };
    case actionTypes.RESET_TWO_PERSON:
      return { ...state, adultsTwo: 0, childrenTwo: 0 };
    default:
      return state;
  }
};

export default roomTwoGuestReducer;
