import { useState } from "react";
import { api } from "../constants/ApiConstants";
import "../css/Weather.css";

export const Weather = ()=> {
    const[weather, setWeather] = useState(undefined)

    function getWeatherInfo(selectedCity){
        console.log(selectedCity)
        fetch(`${api.base}/forecast?q=${selectedCity}&units=metric&appid=${api.key}`)
        .then((res)=> {
            return res.json()
        })
        .then((res)=>{
            setWeather(res)
        })
        .catch((err)=>alert(err))
    }

    return (
        <div className="local-weather">
            <div className="header-buttons">
                <button className="cityButton" onClick={()=> getWeatherInfo ("Skopje")}>Skopje</button>
                <button className="cityButton" onClick={()=> getWeatherInfo ("Tetovo")}>Tetovo</button>
                <button className="cityButton" onClick={()=> getWeatherInfo ("Veles")}>Veles</button>
                <button className="cityButton" onClick={()=> getWeatherInfo ("Radovish")}>Radovish</button>
                <button className="cityButton" onClick={()=> getWeatherInfo ("Mavrovo")}>Marvovo</button>
                <button className="cityButton" onClick={()=> getWeatherInfo ("Ohrid")}>Ohrid</button>
                <button className="cityButton" onClick={()=> getWeatherInfo ("Strumica")}>Strumica</button>
            </div>
         <div className="local-conteiner">
            {weather && weather.list.map((weatherList, i) => {
                return(
                    <div className="card" key={i}>
                        <div className="location-box">
                            <div className="location">
                                {weather.city.name}, {weather.city.country}
                            </div>
                            <div className="date">{weatherList.dt_txt}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weatherList.main.temp)}&#8451;
                            </div>
                            <div className="weather">{weatherList.weather[0].main}</div>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
         </div>
        </div>
    )
}