
const fs = require ("fs");
const { type } = require("os");
const { title } = require("process");
const { domainToUnicode } = require("url");
const { isBooleanObject } = require("util/types");

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
  (async () => {
    try {
        let dataString = await fileRead("podatoci.json"); // go prezemame fajlot podatoci.json
        let blogData = JSON.parse(dataString); // konverzija od string vo JSObject
        //console.log(blogData) 

        //1. site useri so isto ID vo eden user da se stavat

        let users = [];
          
          blogData.forEach((item)  => {
            let existing = users.filter((v, i)=> {
              return v.userId == item.userId;
            });
        //console.log(existing) // gi vraka titlovite vo nizi
       // console.log(existing.length) // gi vraka titlovite vo nizi

            if (existing.length) {
              let existingIndex = users.indexOf(existing[0]);
              //console.log(existingIndex) //gi podreduva od 0 pa natamu
              users[existingIndex].title = users[existingIndex].title.concat(item.title); // gi povrzuvame klucot so vrednosta (title)
            } else {
              if (typeof item.title == 'string')
                item.title = [item.title];
              users.push(item);
            }
          });

          //console.log(users) //site useri so titlovi
          

        let allUsers = [] ;// sekoj user + broj na objavi
         for(let i of users) {
            
                allUsers += "korisnik"+ " " + i.userId + ": broj na objavi:" + i.title.length + ",";

            } 
           //  console.log(allUsers) //korisnik so broj na titlovi
            
         // go zapisuvame vo datoteka brojot na useri i titlovi

           const numOfTitle = (filename, data) => {
            return new Promise((resolve, reject) => {
                fs.writeFile(filename, data, (err) => {
                    if(err){
                        return reject(err)
                    }
                    return resolve(data);
                })
            })
        }


        numOfTitle("statistika.txt", allUsers)

       // vo opagacki redosled userdId:3, userID:2, userID:1

        let sortTitle = [users.sort((a,b)=> {
            if(a.title.length > b.title.length) {
              return -1 // so najmnogu
            } else if(a.title.length < b.title.length){
              return 1; // so namjalku
            }
            return 0;
          })] 
          
         // console.log(sortTitle) //vo opagacki redosled 

         // so najmnogu objavi

         let korisnikNajmnogu = "korisnik so najmnogu objavi : " + users[0].userId;
         //console.log(korisnikNajmnogu)

         // go zapisuvame vo datoteka korisnikot so najmnogu objavi

         const najmnoguObjavi = (filename, data) => {
            return new Promise((resolve, reject) => {
                fs.writeFile(filename, data, (err) => {
                    if(err){
                        return reject(err)
                    }
                    return resolve(data);
                })
            })
        }

        

       najmnoguObjavi("najmnogu.txt", korisnikNajmnogu)

       // so najmalku objavi

         let korisnikNajmalku = "korisnik so najmalku objavi : " + users[users.length -1].userId
         //console.log(korisnikNajmalku)

         // go zapisuvame vo datoteka korisnikot 1 
         const najmalkuObjavi = (filename, data) => {
            return new Promise((resolve, reject) => {
                fs.writeFile(filename, data, (err) => {
                    if(err){
                        return reject(err)
                    }
                    return resolve(data);
                })
            })
        }
       najmalkuObjavi("najmalku.txt", korisnikNajmalku)


       let vkupenBrojNaObjavi = [];
       for (let i of users) {
        vkupenBrojNaObjavi += i.title
        
       }

      // console.log(vkupenBrojNaObjavi) //site objavi vo string

      let vkupno = vkupenBrojNaObjavi.split(",")//gi stavi vo edna niza site
      let vkupnoObj = vkupno.length 
      let datotekaVkupno = "vkupniot broj na objavi e : " + vkupnoObj


      const vkupnoDatoteka = (filename, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, data, (err) => {
                if(err){
                    return reject(err)
                }
                return resolve(data);
            })
        })
    }

    // vkupno objavi

   vkupnoDatoteka("vkupno.txt", datotekaVkupno)

     // console.log(vkupnoObj) // broj na objavi
      //console.log(datotekaVkupno)

       // titlovi po dolzina

      let podrediPoDolzina = [vkupno.sort((a,b)=> {
        if(a.length > b.length) {
            return 1
        } else if(a.length < b.length){
            return -1
        }
        return 0
       })]
     // console.log(podrediPoDolzina) //naredeni po dolzina od najmalo do najgolemo

      let najkratkaObjava = podrediPoDolzina[0][0]

        // console.log(najkratkaObjava)

       let najdolgaObjava = podrediPoDolzina[podrediPoDolzina.length -1]
       let final = najdolgaObjava.slice(-1)
       
       //console.log(typeof final)
       //console.log(final)

      
       let sortiraniObjavi = [blogData.sort((a,b)=> {
        if(a.title.length > b.title.length) {
          return -1
        } else if(a.title.length < b.title.length){
          return 1;
        }
        //return 0;
      })] 
      //console.log(sortiraniObjavi)

     let korisnikSoNajdolgaObjava = "korisnik so najdolga objava br. " + blogData[0].userId + ", " + "sodrzina na objavata: " + final; 

     //console.log(korisnikSoNajdolgaObjava)

     const najDolg = (filename, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, data, (err) => {
                if(err){
                    return reject(err)
                }
                return resolve(data);
            })
        })
    }
    najDolg("najdolga.txt", korisnikSoNajdolgaObjava)
   

     let korisnikSoNajkratkaObjava = "korisnik so najkratka objava br. " + blogData[blogData.length -1].userId + ", " + "sodrzina na objavata: " + 
     najkratkaObjava
     console.log(korisnikSoNajkratkaObjava)

    const najKratka = (filename, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, data, (err) => {
                if(err){
                    return reject(err)
                }
                return resolve(data);
            })
        })
    }
    najKratka("najkratka.txt", korisnikSoNajkratkaObjava)
   

    } catch (err) {
        console.log(err);
    }
})();