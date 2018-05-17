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
const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

// ACTION CREATORS
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/me")
  };
}

export function updateUser(id, alias, name, profile_image_url) {
  return {
    type: UPDATE_USER,
    payload: axios.put(`/api/me/${id}`, { alias, name, profile_image_url })
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios.delete("/api/logout")
  };
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
    case `${UPDATE_USER}_PENDING`:
    case `${LOGOUT}_PENDING`:
      return Object.assign({}, state, { userLoading: true });
    case `${GET_USER}_REJECTED`:
    case `${UPDATE_USER}_REJECTED`:
    case `${LOGOUT}_REJECTED`:
      return Object.assign({}, state, { userLoading: false, userError: true });
    case `${GET_USER}_FULFILLED`:
    case `${UPDATE_USER}_FULFILLED`:
      console.log("user: ", action.payload.data);
      return Object.assign({}, state, {
        user: action.payload.data,
        userLoading: false
      });
    case `${LOGOUT}_FULFILLED`:
      return Object.assign({}, initialState, {});
    default:
      return state;
  }
}
