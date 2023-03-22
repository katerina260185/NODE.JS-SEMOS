
//import {applyMiddleware, createStore} from "redux"
import { balanceReducer } from "./reducers/balanceReducer"
//import thunk from "redux-thunk"
import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit";
import { creditReducer } from "./reducers/creditRatingReducer";
import { vrednostReducer } from "./reducers/vrednostReducer";


// const store = createStore(balanceReducer, applyMiddleware(thunk));
let reducers = combineReducers({
  balanceReducer,
  creditReducer,
  vrednostReducer,
});
// const store = configureStore({ reducer: balanceReducer });
const store = configureStore({ reducer: reducers });

export default store;
