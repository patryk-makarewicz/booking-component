import * as actionTypes from './types';

export const incRoom = () => ({
  type: actionTypes.COUNTER_ROOM_INC,
});
export const decRoom = () => ({
  type: actionTypes.COUNTER_ROOM_DEC,
});

export const incPerson = () => ({
  type: actionTypes.COUNTER_PERSON_INC,
});
export const decPerson = () => ({
  type: actionTypes.COUNTER_PERSON_DEC,
});
