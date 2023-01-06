/*
let proba = new Promise((resolve,reject) => {

})

proba.then(
    function(result) {console.log("ok")}
)

proba.catch(err => {console.log("err")})

const { resolveObjectURL } = require("buffer")



let fs = require("fs");

fs.writeFile ("proba", "ova e prva proba" , (err) => {
    if(err){
        console.log("greska", err)
    }
})


const printResult = async (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return reject(err)
            }
            return resolve()
        })
    })
}
printResult("test", "users")
.then(()=> {
    console.log("succsess 1")
}).catch(err => {
    console.log(err)
})

async function myDisplay(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("I love you")
        }, 3000)
    })
    let result = await myPromise;

console.log(result)
}
myDisplay()


async function anotherTry(){
    let tryTwo = new Promise((resolve, reject) =>{
        return resolve("sakam da naucam")
    }, 2000)
    let prevzemiGoTekstot = await tryTwo;
    console.log(prevzemiGoTekstot)
}

anotherTry()


*/
//A function expression can be stored in a variable
const x = function(a,b){
    return a * b
}

//console.log(x (2,4)) - moze vaka

let result = x(2,3)
console.log(result) // moze i vaka



function myFunction(a,b){
    return a + b
}
let result2 = myFunction(3,5)
//console.log(myFunction(3,5))
console.log(result2)

function argFunc(a,b,c){
    return arguments.length // vraka kolku argumeni ima funkcijata
}

let result3 = argFunc(2,5,9)
console.log(result3)

// kaj arrow funkciite, ne se korisi zborot fukction, tuku se stava => i ne se koristi zborot return i golemite zagradi {}


//const q = (a,b) => a + b; // ova e arrow funkcija stavena vo varijabla
//let result4 = q(7,9)
//console.log(result4)

//se preporacuva da se koristat return i {}, za da ne se zgresi
const q = (a , b) => {return a / b}
let result4 = q(6,2)
console.log(result4)

                    //tuka se parametri
const makeCoffe =  (milk, water,coffe ) => {
    let message = ""
    if(milk >= 10 && water >= 20 &&  coffe >=7 ){
       return  message =  "your coffe is ready"
    } else {
       return message = "out of ingredients"
    }
}
                        // tuka se argumenti
let ingredinets = makeCoffe(300,500,100)
console.log(ingredinets)


const names = (allNames) => {
    upperNames = "";
    for(let name of allNames) {
        
            if(name[0] === name[0].toUpperCase()){
                upperNames+=name;
               
            }
            return upperNames;
        }
        
        }
    let allStudents = names("sofija", "Vesna", "Viktor", "pero")
console.log(allStudents)

