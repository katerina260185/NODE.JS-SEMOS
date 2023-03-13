import { useParams } from "react-router-dom"
import { MovieContext } from "../App"
import React from "react"

export const IdOne =() =>{

   const IdContext = React.useContext(MovieContext)
   
    const params = useParams();

    const findId = IdContext.find((item) => item.id === +params.id);
    return (
      <div>
        <h3>name: {findId.title}</h3>
        <p>genre: {findId.genre}</p>
        <p>rating: {findId.rating}</p>
      </div>
    )
}