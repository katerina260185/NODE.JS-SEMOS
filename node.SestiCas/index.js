/*
client - server
http - html, json, videa, sliki itn., ova se se prenesuva preku http,
-raste celo vreme ksko pominuva vremeto
TSP - PODATOCITE KE STIGNAT KAJ PRIMACOT TAKA KAKO STO SE PRATENI

KLIENT:
user agent - dejstvuva vo ime na korisnikot

cekori:
TSP
HTTP - poraka

primer za http request:

GET (koga prezemanme sodrzina) -metodi
POST(koga isprakame sodrzina) - metodi

*/

//GET / HTTP/1.1
//host: google.com
//Accept-Language: encodeURI


//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// hederi nudat doloplniteli informacii od serverite

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

/*
primer za http response:

HTTP/1.1 200(status kod za uspesno ispraten request) OK
hederi: date: Wed, 28 Dec 2022 20:!4:00 GTM (heder za date)
server: Apache

ip adresa 
ipv4 32-bit broj, vo rang od 0.0.0.0 - 255.255.255.255

ipv6 128-bit broj, vo rang 

identifikacija na 
lociranje na hostot na mrezata


//port
16-bit unassigned broj
vrednost od 0 do 65535
da pristapime do servisot sto ni e potreben preku port
port do 1024 najkoristeni porti

https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
bitni porti: 21,22,23,25,80,443

local host: 127.0.0.1
*/

const http = require ('http');

const server = http.createServer((req,res) => {
//console.log("******REQUEST******");
//console.log("URL: " + req.url);
//console.log("METHOD:" + req.method) 
//console.log( req.rawHeaders[3]) 



//res.write("7"); // vo response
//console.log("********************")
res.end();

});

server.listen(8080);


//za doma
//1.OSI model, TCP/IP model
// 2. TCP i UDP
// 3. cLAKULATOR ZA SOBIRANJE MNOZENJE DELENJE I ODZEMANJE
//primeri:
//request1 url: http://localhost:8080/sobiranje/3/4 (mora da bide vo ovoj format)
//response 7
//request1 url: http://localhost:8080/odzemanje/4/3
//response 1
// za sekoe ostanato UDL da se vrati poraka "nevalidna operacija"