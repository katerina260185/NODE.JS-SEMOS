import { useOutletContext, useParams, Link } from "react-router-dom"

export const Book = ()=> {

    const {id} = useParams();

    const Object = useOutletContext();
    console.log(id)
    
    return(
        <div>
         {/* <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">Create New Book</Link> */}
        <h1>Book {id} - {Object.name}</h1>
        </div>
    )
}