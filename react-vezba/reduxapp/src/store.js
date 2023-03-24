import { vrednostReducer } from "./reducers/vrednostReducers";
import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit";




let redusers = combineReducers({
    vrednostReducer,
})

const store = configureStore({reducer:redusers})

export default store;