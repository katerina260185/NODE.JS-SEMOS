//import React, { useState } from "react";
import PropTypes from "prop-types";


export const CarsForSale= ({listOfCar})=> {


  return(
    <ol>
    {listOfCar.map((c, i)=> {
      return (
        <li key={i}>
          <span>{c.brand} <button>BUY</button></span>

        </li>
      )
    })}
    </ol>
  )
}