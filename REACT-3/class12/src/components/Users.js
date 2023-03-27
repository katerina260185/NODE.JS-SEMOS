import { useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import { fetchUsersRequest } from "../actions/UsersAction"



export const Users = ()=> {
    const dispatch = useDispatch()
    const users = useSelector((state)=> state.UsersReducer.users)
    const errorMessage = useSelector((state)=> state.UsersReducer.errorMessage)

    useEffect(()=>{
        dispatch(fetchUsersRequest(), [dispatch])
    })


    return(
        <div>
            {users?.map((user, i)=> {
                return(
                    <div key={i}> 
                    <p>User ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p> 
                    <p>Street: {user.address.street}</p> 
                    <p>City: {user.address.city}</p> 
                    <p>Zipcode: {user.address.zipcode}</p> 
                    <hr/>
                    </div>
                )
            })}
            {errorMessage && <p>{errorMessage}</p>}
        </div>

    )
}