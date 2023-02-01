const express = require("express")

const app = express()

//handlers
const handlers = require("./handlers")

app.use(express.json())

// ruti//endpoints

///post/studenti - da se dodade student

app.post("/studenti", handlers.addStudent)

//get/studenti - da gi vrati site studenti
app.get("/studenti", handlers.getAllStudents)

// get/studenti/:id -> vraka eden student 

app.get("/studenti/:id", handlers.getStudentById)

//put//studenti/:id da azurira studenti so id

//delete/studenti/:id - da izbrise student so odreden id


app.listen(8080, (err)=> {
    if(err) return console.log(err);
    console.log("server start up!")
})

