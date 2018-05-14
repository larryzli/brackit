// IMPORT DEPENDENCIES
import axios from "axios";

// INITIAL STATE
const initialState = {
  user: {},
  userLoading: false,
  userError: false
};

// ACTION TYPES
const GET_USER = "GET_USER";

// ACTION CREATORS
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/me")
  };
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { userLoading: true });
    case `${GET_USER}_FULFILLED`:
      console.log("user: ", action.payload.data);
      return Object.assign({}, state, {
        user: action.payload.data,
        userLoading: false
      });
    case `${GET_USER}_REJECTED`:
      return Object.assign({}, state, { userLoading: false, userError: true });
    default:
      return state;
  }
}
