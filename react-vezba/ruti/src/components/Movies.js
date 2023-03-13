import { MovieContext } from "../App"
import React from "react"


export const Movies = ()=>{
const infoContext = React.useContext(MovieContext)


    return(
        <div>
        {infoContext.map((movie,i)=>{
          return(
            <div key={i}>
            <p>ID: {movie.id}, Title: {movie.title}, Genre: {movie.genre}, Rating: {movie.rating}  </p>
          
            </div>
          )
        })} 
        </div>
    )
}