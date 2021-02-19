const ADD_ROOM = 'ADD_ROOM';

export const toggleAddRoom = () => ({
  type: ADD_ROOM,
});

const INITIAL_STATE = {
  showNextRoom: false,
};

const nextRoomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ROOM:
      return {
        ...state,
        showNextRoom: !state.showNextRoom,
      };
    default:
      return state;
  }
};

export default nextRoomReducer;
