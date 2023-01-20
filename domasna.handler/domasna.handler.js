const fs = require("fs");

const prezemiData = require("./studenti.json")
let data = JSON.stringify(prezemiData)



// importiranje na express vo datoteka
const express = require("express");

// express aplikacija
const app = express();

// gi prevzemame site funkcii od handlerot
const handlers = require("./handlers")

// aktiviranje na JSON(req.body)
app.use(express.json())

//dodavanje na metodot POST
app.post("/", (req,res)=>{
    res.send("Uspeshna operacija")
})

app.post("/studenti", handlers.studentiTXT)
handlers.studentiTXT("podatoci.txt", data)



// funkcija za startuvanje na serverot
app.listen(8080, (err)=> {
    if(err){
        console.log(err)
    }
    console.log("USPESNO")
})