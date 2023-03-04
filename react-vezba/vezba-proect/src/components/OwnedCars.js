import React from "react";

export const OwnedCars = ({listOfcar})=> {
    return(
<ol>
    {/*
    {listOfcar.map((c,i)=> {
        return (
            <li key={i}>
                <span>{c.brand}</span>

            </li>
        )
    })}
*/}
<li>{listOfcar} <button>Sell</button></li>
</ol>
   
    )
}