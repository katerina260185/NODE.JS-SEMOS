import { MovieContext } from "../App"
import React from "react";

export const InfoMovie = ()=> {
   const infoContext = React.useContext(MovieContext)

   // za da moze da go procita arrey of pictures
    const {pictures} = React.useContext(MovieContext);
    return(
        <div>
           <p> <a href={infoContext.link}>Click to watch the trailer</a></p>
           <h1>Best pictures of Movie</h1>
           
            {pictures.map((img, i)=>{
                return(
                    <img key={i} src={img} alt="img"></img>
                )
            })}

        </div>
    )

   
}