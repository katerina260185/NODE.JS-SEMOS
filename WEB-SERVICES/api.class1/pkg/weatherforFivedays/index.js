const config = require ("../config")

//const CACHE ={};

const weatherFiveDays = async (city) => {
const CACHE ={};
console.log("CACHE", CACHE);
let now = new Date().getTime() / 1000; //timestamps in sec

if(
    // It checks if the CACHE object contains data for the specified city and whether the cached data has not expired. If both conditions are met, it immediately returns the cached data.
    //If the cached data is not available or has expired, it constructs a URL using the configuration values retrieved from config.get(). The URL is used to fetch weather data for the specified city.
    //timestamp represents the time when the data was cached.
    CACHE[city] && now < CACHE[city].timestamp + config.get("weather").cache_expiery
)
return CACHE[city];
//return { timestamp: CACHE[city].timestamp, data: CACHE[city].data };
const URL = `${
    config.get("weather").API_URL
  }/forecast?q=${city}&units=metric&appid=${config.get("weather").api_key}`;

try {
    const res = await fetch(URL);// http request to URL
    const data = await res.json(); //response to json format

    // podatocite od response gi skladirame vo CACHE-object
    //pravime nov object so property timestamp i data
    CACHE[city] = {
      timestamp: new Date().getTime() / 1000, //21:01
      data: data,
    };
    //return CACHE[city]
    return { timestamp: CACHE[city].timestamp, data: CACHE[city].data }; // novo

  } catch (err) {
    throw err;
  }
};

module.exports = {
    weatherFiveDays,
};

 