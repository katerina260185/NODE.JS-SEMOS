
    import {  Link } from "react-router-dom"
    import React from "react"
    
    export const MovieByid = ()=> {
   
    return (
        <div>

        <h1>List of movies</h1>
        <Link to="/movie/1">Movie 1</Link> <br/>
        <Link to="/movie/2">Movie 2</Link> <br/>
        <Link to="/movie/3">Movie 3</Link> <br/>
    

        </div>
    )
}