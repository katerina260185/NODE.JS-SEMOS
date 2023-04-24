const http = require ("http")
const fs = require ("fs")


const readData = (source) => {
    return new Promise((success, fail) => {
      fs.readFile(`${source}.json`, "utf8", (err, data) => {
        if (err) return fail(err); 
         const out = JSON.parse(data)
        return success(out);
      });
    });
  };

  const writeData = (data, destination) => {
    return new Promise((success, fail) => {
      fs.writeFile(`${destination}.json`, data, (err) => {
        if (err) return fail(err);
        return success();
      });
    });
  };


const express = require("express")
const api = express();
api.use(express.json());



//startuvanje na serverot

const PORT = 10000;
api.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Server successfully started on port ${PORT}`);
  });


  // kreiranje ruta, users, na koja ke gi procita userite zapisani vo users.json

  api.get("/users", async(req, res)=>{
    try{
        const data = await readData("./users");
        res.status(200).send(data)
    } catch (err){
        console.log(err)
        res.status(400).send(err)
    }
  })

  //kreiranje na funkcija so koja treba da dodademe user
  //no ako veke go ima toj user so toa ID da ni vrati error

const addPerson = async(id, firstName, lastName)=>{
    try{
        const person = {
            id: id,
            first_name: firstName,
            last_name: lastName,
          };

          let data = await readData("./users");
          const exsistingUser = data.find(user => user.id === person.id);
          if(exsistingUser) {
            console.log(`User with ID ${person.id} already exists`)
          } else{
            data.push(person) 
           await writeData(JSON.stringify(data), "./users")
           
           console.log(data);      
         }
    } catch(err){
        console.log(err)
        console.log("Internal server error");
    }
}

(async ()=> {
    try{
        await addPerson (11,"Katerina", "Atanasovska")
    } catch(err){
        console.log(err);
    }
   
})();

