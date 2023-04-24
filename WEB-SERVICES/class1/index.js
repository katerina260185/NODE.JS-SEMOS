 const https = require("https") //modul
 const url = require("url")

 const testt = "123"
 console.log(Number(testt))

//Reference - refering to a memory location

//Call - calls the function with content


    const server = https.createServer((req,res)=> {
    res.writeHead(200, {"Content-Type": "text/html"})
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    res.end(text);
    });
   // server.listen(8080)
    
   // inicijalizacija na server

server.listen(8080, err => {
    if(err) return console.log(err);
    console.log("server listen port 8080")
})


 const getUsers = https.get("https://jsonplaceholder.typicode.com/users",
 (res)=> {
    let data = [];
 const headerDate = res.headers && res.headers.date ? res.headers.date : "no response date";
 console.log("Date in response code", headerDate)
 console.log("Status code", res.statusCode)
 res.on("data", (chunk)=> {
   data.push(chunk)
 })
res.on("end", ()=> {
    console.log("Response ended")
    const users = JSON.parse(Buffer.concat(data).toString())

    for (let user of users) {console.log(`users with id: ${user.id} , name: ${user.name}`)}
 })
 }
 )

    getUsers.on("error", (err) => {
    console.error(err.message);
  });



// //const arrow = ()=> console.log("hello")
// //arrow()

// function justFunction (){
//  console.log("just function")
// }
// justFunction()

// const test = function (){
// console.log("test")
// }
// test();


// vezbi
//1
const mnozenje1 = (a, b) =>  a * b
console.log(mnozenje1(10, 2))

//2
function mnozenje (a, b){
    return a * b
}
//const result = mnozenje(2,5)
console.log(mnozenje(2, 5))

//3
const monzenje2 = function (a, b) {
     return a * b
  }
  console.log(monzenje2(3,3))