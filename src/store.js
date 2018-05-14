// IMPORT DEPENDENCIES
import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// IMPORT REDUCERS
import menuReducer from "./reducers/menuReducer";
import userReducer from "./reducers/userReducer";

// COMBINE REDUCERS
const rootReducer = combineReducers({ menu: menuReducer, user: userReducer });

// CREATE AND EXPORT STORE
export default createStore(rootReducer, applyMiddleware(promiseMiddleware()));
