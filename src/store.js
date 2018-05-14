// IMPORT DEPENDENCIES
import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// IMPORT REDUCERS
import menuReducer from "./reducers/menuReducer";

// COMBINE REDUCERS
const rootReducer = combineReducers({ menu: menuReducer });

// CREATE AND EXPORT STORE
export default createStore(rootReducer, applyMiddleware(promiseMiddleware()));
