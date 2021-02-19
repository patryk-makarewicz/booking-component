import * as actionTypes from '../Types/roomTwo-types';

export const incAdultsTwo = () => ({
  type: actionTypes.ADULTS_TWO_INC,
});
export const decAdultsTwo = () => ({
  type: actionTypes.ADULTS_TWO_DEC,
});
export const incChildrenTwo = () => ({
  type: actionTypes.CHILDREN_TWO_INC,
});
export const decChildrenTwo = () => ({
  type: actionTypes.CHILDREN_TWO_DEC,
});
export const resetPersonTwo = () => ({
  type: actionTypes.RESET_TWO_PERSON,
});
