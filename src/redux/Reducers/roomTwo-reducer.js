import * as actionTypes from '../Types/types';

const INITIAL_STATE = {
  adultsTwo: 0,
  childrenTwo: 0,
};

const roomTwoGuestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADULTS_INC:
      return { ...state, adultsTwo: state.adultsTwo + 1 };
    case actionTypes.ADULTS_DEC:
      return { ...state, adultsTwo: state.adultsTwo - 1 };
    case actionTypes.CHILDREN_INC:
      return { ...state, childrenTwo: state.childrenTwo + 1 };
    case actionTypes.CHILDREN_DEC:
      return { ...state, childrenTwo: state.childrenTwo - 1 };
    default:
      return state;
  }
};

export default roomTwoGuestReducer;
