import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li> <Link to="/cake">Cake</Link></li>
       <li> <Link to="/comments">Comments</Link></li>
       <li> <Link to="/users">Users</Link></li>
       <li> <Link to="/posts">Posts</Link></li>


    </ul>
  );
};