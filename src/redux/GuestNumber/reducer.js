import * as actionTypes from './types';

const INITIAL_STATE = {
  adults: 0,
  children: 0,
};

const counterGuestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADULTS_INC:
      return { ...state, adults: state.adults + 1 };
    case actionTypes.ADULTS_DEC:
      return { ...state, adults: state.adults - 1 };
    case actionTypes.CHILDREN_INC:
      return { ...state, children: state.children + 1 };
    case actionTypes.CHILDREN_DEC:
      return { ...state, children: state.children - 1 };
    default:
      return state;
  }
};

export default counterGuestReducer;
