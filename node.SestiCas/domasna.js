/*
const fs = require("fs");
const http = require ('http');
const url = require("url");
const adress = 'http://localhost:8080/sobiranje/3/4';
const q = url.parse(adress, true);
const operacii = require ("./operacii.js")
const{sobiranje,odzemanje, mnozenje, delenje} = require ("./operacii.js")

const server = http.createServer((req,res) => {
    fs.readFile('operacii.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/js'});
        res.write("7");
        console.log(operacii.sobiranje(3,4))

        return res.end();
    }) 
})  

server.listen(8080);
//console.log(q)
//console.log(q.search)
//console.log(q.query)
//console.log(q.host)

*/

const http = require('http');
const url = require('url');
const fs = require('fs');
//const operacii = require ("./operacii.js")
//const{sobiranje,odzemanje, mnozenje, delenje} = require ("./operacii.js")


const server = http.createServer((req,res) => {
const q = req.url
console.log(q)



res.end();

});

server.listen(8080);
