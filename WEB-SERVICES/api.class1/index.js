const express = require("express");

var { expressjwt: jwt } = require("express-jwt");

const config = require("./pkg/config");
const { getForCity } = require ("./handlers/weather");
const { getFiveDays } = require("./handlers/handlersFiveDays");



const api = express();


//weather
api.get("/api/v1/weather/:city", getForCity);
api.get("/api/v1/weatherfivedays/:city", getFiveDays);



api.listen(config.get("development").port, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${config.get("development").port}`);
});


//Homework
//Link for homework: https://openweathermap.org/api/one-call-api
// 1. Create a function to display the weather forecast for the last 5 days