import {useEffect, useState} from "react"
import { API_URL } from "../utils/constants"
import {Link} from "react-router-dom"


export const Users = () => {
    const [users, setUsers] = useState ([])

/*
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json() )
        .then((json) => setUsers(json))
    }, [])
*/
useEffect(() => {
    fetch(`${API_URL}users`)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);


return (
    <div>
            {users.length > 0  ? (

            <div>
            {users.map(user => {
                return (
                    <div key={user.id}> 
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p> 
                    <Link to={"/user/" + user.id}>Details...</Link> <hr/>
                    </div>
                ) 
            })}
             </div>

            ) : (

             <div>loading !</div>
            )}
            </div>
)
}