// IMPORT DEPENDENCIES
// import axios from 'axios';

// INITIAL STATE
const initialState = {
  menuToggle: false
};

// ACTION TYPES
const TOGGLE_MENU = "TOGGLE_MENU";

// ACTION CREATORS
export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
    payload: null
  };
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { menuToggle: !state.menuToggle });
    default:
      return state;
  }
}
