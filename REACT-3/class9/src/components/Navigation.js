import {Link} from "react-router-dom"

export const Navigation =()=>{
    return (
        <div>
            <ul>
          <li><Link to="/posts">Posts</Link></li> 
          <li><Link to="/comments">Comments</Link></li> 
          <li><Link to="/albums">Albums</Link></li> 
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/users">Users</Link></li> 



          </ul> 
        </div>
    )
}