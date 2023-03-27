import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./reducers/CakeReducer";
import CommentsReducer from "./reducers/CommentsReducer";
import UsersReducer from "./reducers/UsersReducer";
import PostsReducer from "./reducers/PostsReducer"

// with latest version we can combine reducers this way
// no need to use combineReducers

const reducer = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
  UsersReducer : UsersReducer,
  PostsReducer: PostsReducer
};


export default configureStore({
  reducer: reducer,
});
