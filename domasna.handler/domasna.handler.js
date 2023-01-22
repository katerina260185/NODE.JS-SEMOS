const fs = require("fs");

// importiranje na express vo datoteka
const express = require("express");

// express aplikacija
const app = express();


// gi prevzemame site funkcii od handlerot
const handlers = require("./handlers");
const { query } = require("express");

// aktiviranje na JSON(req.body)
app.use(express.json())

app.post("/studenti", handlers.prezemiJson)

// funkcija za startuvanje na serverot
app.listen(8080, (err)=> {
    if(err){
        console.log(err)
    }
    console.log("USPESNO")
})