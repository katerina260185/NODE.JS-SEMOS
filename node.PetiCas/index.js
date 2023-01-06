const fs = require ("fs")

// funkcija za chitanje na datoteka

const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, "utf8", (err,data) => {
            if(err){
                return fail(err)

            }
            return success(data);

        })

    });
}

(async()=>{
    try{
        let dataString = await fileRead("studenti.json"); // go prezemame fajlot studenti.json
        let studenti = JSON.parse(dataString); // konverzija od string vo JSObject
        console.log(studenti) // proveruvame
        // object.assign(dest, sr1, .., srcN)
        //... (spred)
        //...(rest)
/*
        const fi = (a,b) => {
            return a + b
        }
        console.log(fi(3,7, 5, 6)) // 5 i 6 ke gi ignorira
        
        const f1All = (a,b, ...arg) =>{
            return a + b
        }
        console.log(f1All(3,4,6,7,8))

                    //rest operator razlicno od spred
        const f1All1 = (...args) => {
            let sum = 0;
            for(let arg of args){
                sum +=arg
            }
            return sum
        }
        console.log(f1All1 (3,4,5,6,7));

        function argObj(){
            console.log(arguments[0])
            console.log(arguments[1])
            console.log(arguments[2])
            console.log(arguments[3]) // vraka undefined

        }

        argObj(1, 2, "test")

        // primer za spread
        console.log(Math.max(3,7,1));

        //niza od parametri

        let ar = [3,7,1];
        console.log(Math.max(...ar))

        // so spred operatorot moze da se isprata poveke nizi

        let ar1 = [2,4,10];
        console.log(Math.max(...ar, ...ar1))

        //moze da se kombinira so poveke vrednosti
        console.log(Math.max(1,...ar, ...ar1, 11))

        // moze da se koristi za da spoime poveke nizi
        let armerge = [ar,ar1]
        console.log(armerge)

        let armerge1 = [...ar,...ar1]
        console.log(armerge1)

        //konverzija na string vo niza

        let s1 = "zdravo"
        console.log([...s1])

        //kopiranje na niza

        let arOrig = [1,2,3];
        let arCopy = [...arOrig];

        console.log(JSON.stringify(arOrig) === JSON.stringify(arCopy)) // true
        console.log(JSON.stringify(arOrig) === JSON.stringify(arCopy)) // true
        console.log(arOrig === arCopy) // false


         //kopiranje na objecti
         let obOrig = {a:1, b:2, c:3};
         let obCopy = {...obOrig};
         console.log(JSON.stringify(obOrig) === JSON.stringify(obCopy)) // true
         console.log(obOrig === obCopy) // false

         // kategorii na metodi za operacii so nizi 
         
         // rabota so elementi
         //pop, shift, push, unshift, splice, slice, concat

         //prebaruvanje na elementite
         //indexOf(), lastIndexOf(), includes(), find, filter, findIndex


         //iteracija
         //forEach

         //transformacija
         //map, sort, reverse, split, join, reduce

*/
         let sortProsek = [...studenti.sort((a,b)=> {
            if(a.prosek > b.prosek) {
                return -1
            } else if( a.prosek < b.prosek) {
                return 1;
            }
            return 0;


         })];

         let sortIme = [...studenti.sort((a,b) => {
            if(a.ime > b.ime) {
                return 1
            } else if( a.ime < b.ime){
                return -1
            }
            return 0;
         })];

         let najvisokProsek = sortProsek[0];

         let najnizokProsek = sortProsek[sortProsek.length -1]

         let sredenProsek = studenti.reduce((acc, mom) => {
            return acc + mom.prosek;
         },0);

         let gradovi = {}; // {"los angeles: 8.2", "new york: 9.1"}

         for(let s of studenti) {
            if(!gradovi[s.grad] ) {
                gradovi[s.grad] = s.prosek;
            }
            else {
            gradovi[s.grad] = (gradovi[s].grad + s.prosek) /2;

            }

         }
            // objecti in, nizi of
         let gradoviNiza = [];

         for (let c in gradovi){
            gradoviNiza.push({
                grad: c,
                prosek: gradovi[c]
            });
         }

         // sort na gradovi po prosek

        gradoviNiza.sort((a,b) => {
            if(a.prosek > b.prosek) {
                return -1
            } else if( a.prosek < b.prosek) {
                return 1
            }
            return 0    
        })

        
        console.log(sortProsek)
        console.log(sortIme)
        console.log(najvisokProsek)
        console.log(najnizokProsek)
        console.log(sredenProsek / studenti.length)
        console.log(gradoviNiza)
        console.log(gradoviNiza[0])
        console.log(gradoviNiza[gradoviNiza.length -1])
    
    }

    
catch(err){

}


})();
