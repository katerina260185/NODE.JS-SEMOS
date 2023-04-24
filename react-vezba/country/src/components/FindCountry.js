import { useEffect, useState } from "react"
import "../css/FindCountry.css"

export const FindCountry = ()=> {
const [inputCountry, setInputCountry] = useState("")
const [loading, setLoading] = useState(false)
const [findCountry, setFindCountry] = useState(undefined)

function findCountryWorld (){
    setLoading(true)
    fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((res) => {
            const filteredCountries = res.filter(
              (country) =>
                country.name.common.toLowerCase().indexOf(inputCountry.toLowerCase()) !== -1
            );
            setFindCountry(filteredCountries);

            if(!inputCountry) {
                alert("Error, your input is epmty")
                setFindCountry(undefined)
            }
          })
        .catch((error)=>alert(error))
        .finally(() => setLoading(false));
}

useEffect(()=>{
    console.log(inputCountry);
}, [inputCountry]);

    return(
        <div>
        <div>
        <input 
        type="text"
        placeholder="Find country" 
        className="search-bar"
        value={inputCountry}
        onChange = {(e)=>setInputCountry(e.target.value)}
        />
         <button className="search-btn" onClick={findCountryWorld}>Search</button>

         {findCountry && !loading &&  (
      <div className="name-country">
        {findCountry.map((country, i)=> {
            return(
                <div className="findCountry" key={i}>
                    <h2> {country.name.official}</h2>
                    <p>Continet: {country.continents}</p>
                    <p>Country: {country.name.common}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Timezone: {country.timezones}</p>
                    <p>Area: {country.area}</p>
                </div>
            )
        })}
      </div>
         )}
       </div>
      {loading && <div className="loader">loading...</div>}
      

    

       </div>

       
    )
}