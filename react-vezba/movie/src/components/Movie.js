import { MovieContext } from "../App"
import React from "react";
import {InfoMovie} from "./InfoMovie"


export const Movie = ()=> {
    const contextObject = React.useContext(MovieContext)
    //const infoAboutMovie = contextObject.movieObj

    return (
        <div>
        <h1> ABOUT THE MOVIE</h1>
        <p>Movie name: {contextObject.name}</p>
        <p>Actor: {contextObject.actor}</p>
        <p>Rating: {contextObject.rating}</p>
        <p>Genere: {contextObject.genere}</p>
        <p>relise Date: {contextObject.releaseDate}</p>
        <InfoMovie/>



        </div>
    )
}