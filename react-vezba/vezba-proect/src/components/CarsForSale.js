import React, { useState } from "react";
import { OwnedCars } from "./OwnedCars";



export const CarsForSale= ({listOfCar})=> {
  
  return(
    <ol>
    {listOfCar.map((c, i)=> {
      return (
        <li key={i}>
          <span>{c.brand} <button onClick={buyCar} >BUY</button></span>

        </li>
      )
    })}
    </ol>
  )
}