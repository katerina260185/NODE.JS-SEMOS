import React, {useState} from "react";

export const OwnedCars = ({listofOwnedCars})=> {

const[newOwnCar, setOwnNewCar] = useState(true)

    function sellCar () {
     setOwnNewCar(!newOwnCar)
       }

    return(   
    <ol>
    {listofOwnedCars.map((c,i)=> {
        return (
            <li key={i}>
                 <span>{c.brand}  <button onClick={sellCar}>SELL</button> </span> 
            </li>
        )
    })}
</ol>
    )

}