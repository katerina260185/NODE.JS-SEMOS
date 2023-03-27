import {Link} from "react-router-dom"

export const Navigation = () =>{
    return(
        <div>
            <ul>
            <li><h1><Link to="/motivation">Motivation</Link></h1></li>
            <li><h1><Link to="/todos">Todos</Link></h1></li>
            <li><h1><Link to="/FetchExamples">Fetch Examples</Link></h1></li>



            </ul>
            
        </div>
    )
}