// IMPORT DEPENDENCIES
// import axios from 'axios';

// INITIAL STATE
const initialState = {
  menuToggle: false
};

// ACTION TYPES
const TOGGLE_MENU = "TOGGLE_MENU";
const CLOSE_MENU = "CLOSE_MENU";
const OPEN_MENU = "OPEN_MENU";

// ACTION CREATORS
export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
    payload: null
  };
}

export function closeMenu() {
  return {
    type: CLOSE_MENU,
    payload: false
  };
}

export function openMenu() {
  return {
    type: OPEN_MENU,
    payload: true
  };
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { menuToggle: !state.menuToggle });
    case CLOSE_MENU:
    case OPEN_MENU:
      return Object.assign({}, state, { menuToggle: action.payload });
    default:
      return state;
  }
}
