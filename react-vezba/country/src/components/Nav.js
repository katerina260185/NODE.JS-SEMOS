import { Link } from "react-router-dom"
import "../css/Nav.css"


export const Nav = ()=>{
    return(
        <div className="navBar">
            <ul>
                <li><Link to="/find-Country">Find Country</Link></li>
                <li><Link to="/all-Countries">All Countries</Link></li>
                <li><Link to="/favorite-quote">Favorite Quote</Link></li>
                <li><Link to="/zen-quotes">Zen Quotes</Link></li>

            </ul>
        </div>
    )
}