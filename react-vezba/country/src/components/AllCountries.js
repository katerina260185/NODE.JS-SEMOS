import { useEffect, useState } from "react"
import "../css/allCountries.css"



export const AllCountries= ()=>{

    const [country, setCountry] =  useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((res)=> setCountry(res))
        .catch((error)=>alert(error))
    })

    return(
       
        <div> 
              
            {country.map((count, i)=>{
                return(
                    
                    <div key={i}>
                        <div>
                           <div className="country-name"> <h1>{count.name.official}</h1></div>
                            <p>Continet: {count.continents}</p>
                            <p>Country: {count.name.common}</p>
                            <p>Capital: {count.capital}</p>
                            <p>Population: {count.population}</p>
                            <p>Timezone: {count.timezones}</p>
                            <p>Area: {count.area}</p>
                            
                        </div>
                    </div>
                )
            })} 
          
        </div>
       
    )
}