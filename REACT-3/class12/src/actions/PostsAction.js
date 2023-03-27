import {FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL} from "../constants/PostsConstants"

export const fetchPostsSuccess = (posts)=>{
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts,
    }

}

export const fetchPostsFail = (error)=>{
    return {
        type: FETCH_POSTS_FAIL,
        payload: error,
    }
    
}

export const fetchPostsRequest = ()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/posts") // baranje za aprezemanje na podatocite od URL-to
        .then((res)=> res.json())
        .then((json)=> dispatch(fetchPostsSuccess(json))) //payload, ako e uspeshno prezemanjeto
        .catch((error)=> dispatch(fetchPostsFail(error))) //payload, ako ne e uspeshno prezemanjeto
    }
}