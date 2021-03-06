import * as actionTypes from '../Types/roomOne-types';

export const incAdults = () => ({
  type: actionTypes.ADULTS_INC,
});
export const decAdults = () => ({
  type: actionTypes.ADULTS_DEC,
});
export const incChildren = () => ({
  type: actionTypes.CHILDREN_INC,
});
export const decChildren = () => ({
  type: actionTypes.CHILDREN_DEC,
});
export const resetPerson = () => ({
  type: actionTypes.RESET_PERSON,
});
