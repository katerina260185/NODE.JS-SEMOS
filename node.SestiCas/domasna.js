
const exp = require('constants');
const http = require ('http');
const url = require("url");
const express = express();

const server = http.createServer((req,res) => {
    express.get('/:operacija/:a/:b')
    
const a = 9;
const b = 3
;
const operacija = "/";

if(operacija == "*"){
    console.log( a * b);
}else if (operacija == "/"){
    console.log(a / b) 
} else if (operacija == "+"){
    console.log(a + b)
} else if(operacija == "-"){
    console.log(a - b)
} else if (operacija == "/" && (a === 0 || b === 0)){
    console.log("error") 
} else {
    console.log("nema broj");
}
   

        res.write("7"); // vo response
        console.log("proba")
        res.end();

    })

server.listen(8080);
