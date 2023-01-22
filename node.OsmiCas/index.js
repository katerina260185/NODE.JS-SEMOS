// framework zbir od biblioteki koi ne se fokusirani na edna problematika
//express framework koe nudi mnozestvo na funkcionalnosti, otvoren kod za site
// da ja podobri funkcionalnosta na JS
// lokalno koristenje npm install express

const express =  require("express");

//object
const app = express();

const handlers = require("./hendlers")

app.use(express.json())


//get metodot prezema sodrzina, prima nekolku argumenti, 2 se najcesto koristeni: 1 rutata "/" i hendler funkcija so (req,res)
app.get("/", (req,res)=> {
    res.send ("zdravo od get pochetna")
    
});

app.post("/", (req,res) => {
    res.send("zdravo od post pochetna")
})

app.get("/home" ,handlers.home )


//calculator
app.get("/calc/:operation", handlers.calculator)
app.post("/calc/:operation", handlers.calculator2)


//pomegu req i res se naoga midllewere
//middlewere   //next e za ako ima poveke middle were


//funkcija za site metodi: get,post, put,delete....

app.all("/mid", (req,res, next)=> {
    res.send("/mid called");
    next();
})


app.use("/mid", (req,res,next)=> {
    console.log("after mid");
    next();

})





//ovaa funkcija prima 2 argumenti, 1 e sekogas locallhostot, vtoriot callback funkcija za err
app.listen(8080, (err) => {
    if(err){
        console.log(err)
    }
    console.log("server start")
});

// za doma
// da se kreira POST/studenti 
//DA MOZE DO NEA DA SE ISPRATI JSON OBJECT ime / prezime / prosek

/*
{
"ime" : "trajko",
"prezime:" "trajkovski",
"prosek" : 7.7
}
*/