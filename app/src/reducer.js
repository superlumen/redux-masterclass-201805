import * as ActionTypes from "./actions";

const empty = {
  counter: 0,
  menu: {
    isOpen: false
  }
};

const reducer = (state = empty, action) => {
  const { type, payload } = action;
  // const type = action.type
  // const payload = action.payload

  if (type === ActionTypes.INC) {
    return { ...state, counter: state.counter + 1 };
  }

  return state;
};

export default reducer;
