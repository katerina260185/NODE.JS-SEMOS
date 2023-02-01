const { application } = require("express")
const express = require("express")

//EJS module  mora da ima views folder i vo nego index.ejs, prestavuva html 

const app = express();

//sintaksa na ejs
app.set("view engine", "ejs");

//kreiranje template

//namesto res.send se pisuva res.render
app.get("/", (req,res) => {
    res.render("index") // views.index.ejs
});

// ruta GET/podatoci/:ime

app.get("/podatoci/:ime", (req,res)=>{ // h1 (zdravo go cita)
let data = {
    ime: req.params.ime,
    studenti: [
        {first_name: "Katerina", last_name: "Atanasovska"},
        {first_name: "Goran", last_name: "Goranovski"},
        {first_name: "Trajko", last_name: "Trajkovski"},
        {first_name: "Petko", last_name: "Petkovski"},
        {first_name: "Stanko", last_name: "Stankovski"},
        {first_name: "Viktor", last_name: "Stankovski"}
    ]
};
res.render("podatoci", data); // views/podatoci.ejs
})

// GET/ formular

app.get("/formular", (req,res) => {
    res.render("formular") // views/formular.ejs
});

// midllewere body objectot so urlencoded ke bide string ili niza

app.use(express.urlencoded({extended:true}));




//post formulat-rezultat
app.post("/formular-rezultat", (req,res) =>{
    let data = {
        ime: req.body.ime,  // doagaat od form, input, name od tamu se zemeni ime i prezime
        prezime: req.body.prezime
    }
    res.render("formular-rezultat", data); // views/formular-rezultat.ejs
});


// inicijalizacija na server
app.listen(8080, err => {
    if(err) return console.log(err);
    console.log("server listen port 8080")
})