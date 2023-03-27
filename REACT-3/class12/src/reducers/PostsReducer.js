import{FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL} from "../constants/PostsConstants"

const initialState = {posts:[], errorMessage: undefined}

const PostsReducer = ( state=initialState, action) =>{
    switch(action.type) {
        case FETCH_POSTS_SUCCESS: {
            //go prezema celiot state, a pravi promena samo na posts
            return {...state, posts:action.payload}
        }
        case FETCH_POSTS_FAIL: {
            return {...state, errorMessage:action.payload}
        }
        default:
            return state
    }
}

export default PostsReducer;