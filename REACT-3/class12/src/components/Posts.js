import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {fetchPostsRequest} from "../actions/PostsAction"

export const Posts = ()=> {
const dispatch = useDispatch();
const posts = useSelector((state)=> state.PostsReducer.posts)
const errorMessage = useSelector((state)=> state.PostsReducer.errorMessage)

useEffect (()=>{
    dispatch(fetchPostsRequest(), [dispatch])
})




    return (
        <div>
            {posts?.map((post,i)=> {
                return(
                <div key={i}>
                    <p>user Id: {post.userId}</p>
                    <p>Id: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <hr/>
                </div>
                )
            })}
            {errorMessage && <p>{errorMessage}</p>}


        </div>
    )
}