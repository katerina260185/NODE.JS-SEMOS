import React, {useState} from "react";

export const OwnedCars = ({listofOwnedCars})=> {

const[newOwnCar, setOwnNewCar] = useState(false)

    function sellCar () {
     setOwnNewCar(!newOwnCar)
       }

    return(   
    <ol>
    {listofOwnedCars.map((c,i)=> {
        return (
            <li key={i}>
                 <span>{c.brand}  <button onClick={sellCar}>  {newOwnCar ? "sell" : "sell"}</button></span> 
            </li>
        )
    })}
</ol>
    )

}