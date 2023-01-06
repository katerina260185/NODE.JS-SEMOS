// fs filesystem module 
//del od strandardnata biblioteka na node js

const { channel } = require("diagnostics_channel");
const fs = require("fs");
const { resolve } = require("path");

// primer za zapisuvanje vo datoteka

fs.writeFile("iminja.txt", "Petko,Stanko", (err) => {
    if(err){
        console.log("ERROR", err)
    }
} );
// prvo ime na datodetata, tekstot na fajlot, call back funkcija
// prviot call back e sekogas rezerviran za greska
//promise gi povrzuva kodot sto proizveduva i kodot sto kozumira


//sintaksa na promise
//                                          call-back
let promiseExample = new Promise(function(resolve, reject) {
 // executor - kodot sto proizveduva nesto (artistot)
});
//resolve se povikuva so (value) , reject se povikuva so (error)
// interni svojstba na promise objectot:
// 1. state (pending) pa stanuva fulfilled, rejected
// 2. result (undifined, value, error) prvo e undefind , pa stanuva ili value ili error

let promise = new Promise(function (resolve, reject) {
  //  setTimeout(() => resolve("done"), 3000);
  // setTimeout(() => reject(new Error("greshka!")), 3000);

console.log("exsecutorot zapocnuva so rabota")
setTimeout(() => {
    resolve("done");
    console.log("uspesna operacija")
}, 3000)
    

})
console.log("drug kod")


//vidovi hendleri
// .then() najvazen metot koj se izvrsuva vrz promise
// .catch()
// . finally()

let p = new Promise ((resolve,reject) => {
   // setTimeout(() => resolve("done"), 3000);
  //  setTimeout(() => reject(new Error ("greshka")), 3000);

})
// resolve slucaj
p.then(
    function (result) {console.log("ok")},
   // function(error) {console.log("nok")}
);


// rejact za reject obicno se koristi catch
p.then(null, (err) => {console.log("err fron than");})

// reject
p.catch(err => {console.log("err")});


//finally nema tuka argumenti, sakame da izvrsime operacija za rascistuvanje na rabotite
//p.then(f,f)
p.finally();

const fileWrite = (filename, data) => {
    return new Promise((succsess, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return fail(err)
            }
            return succsess();
        })
    })
}

fileWrite("ocenki.txt", "2,5,6,3,1")
.then(() => {
    console.log("success 1");
    return fileWrite("boi.txt", "bela, zolta, crna");
}).then(( ) => {
    console.log("success 2");
    return fileWrite("boi2.txt", "zelena, plava");
}).then(() => {
    console.log("success 3");
}).catch(err => {
    console.log(err);
});

let p1 = new Promise((resolve,rejact) => {
setTimeout(() => {
    resolve(1)
},3000)
});
// ke se izvrsat site tri, nezavisni se edni od drugi
p1.then((result) => {
    console.log(result)
return result * 2;
})

p1.then((result) => {
    console.log(result)
return result * 2;
})

p1.then((result) => {
    console.log(result)
return result * 2;
})

// async //await


// koga ima async sekogas vraka promise
async function f() {
    return 1
}

f().then(console.log("async f()"))

async function ff() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("result from async ff() : done !")
        }, 1000)

    })
    let result = await promise;

    console.log(result);
}

ff();


const main = async() => {
    try {
        await fileWrite("file1.txt", "file one")
        await fileWrite("file2.txt", "file two")
        await fileWrite("file3.txt", "file three")
    
    } catch(err) {
        console.log(err)
    }
}
main();

const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if(err) {
                return fail(err)
            }
            return success(data)
        })

    })
}
// sintaksa na samoizvrsuvacki funkcii
// se izvrsuva vednas po nejzinoto povikuvanje, se narekuvaat uste i anonimni funkcii

(async() => {
    try{
        let boi = await fileRead(("boi.txt"));
        console.log("boi", boi)

    } catch(err){
        console.log(err)
    }
}) ();

//sintaksa za samoizvrsuvacki funkcii (async() => {})()
// (function(){})()
let imenki = [
    { ime: "pero perovski", telefon: 123456},
    { ime: "jankoo jankovski", telefon: 435678},
    { ime: "darko darkovski", telefon: 458679}

];

(async() =>{
    try {
      let imenkiData = JSON.stringify(imenki)  
      console.log(imenkiData);
      await fileWrite("imenki.txt", imenkiData);
      let dataString = await fileRead("imenki.txt");
      let data = JSON.parse(dataString);
      console.log(data)
    } catch (err){
        console.log(err);
    }
})();