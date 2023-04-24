const http = require("http") //modul
const fs = require("fs")

require('dotenv').config()
console.log(process.env.MY_SECRET_KEY) 



// callback function

// const myFunc = (name, callback) => {
//     console.log(name)
//     callback();
// }

// const callMe = ()=> {
//     console.log("callBack function")
// }

// myFunc("ime", callMe)

// const fs = require("fs")

const readData = (source)=> {
    return new Promise((success, fail)=> {
        fs.readFile(`${source}.json`, "utf8", (err, data)=> {
            if(err) return fail(err);
            const out = JSON.parse(data)
            return success(out)
        })
    })
}
// const test = async () => {
//     try{
//         const res = await readData("./data")
//         console.log("res", res)
//     } catch(err) {
//         throw err
//     }
    
// }
// test()


const writeData = ( filename, data) => {
    return new Promise ((success, fail)=> {
        fs.writeFile(`${filename}.json`, data, (err) => {
            if(err) {
                return fail(err)
            }
            return success ();
        })
    })
}
const testTwo = async ()=> {
    try{
        const res = await writeData ("./test", "test")
    } catch(err){
        throw err;
    }
}
testTwo()

// http.createServer((req, res)=> {
//     if(req.url === "/test"){
//     res.write("hello world");
//     res.end();
//     } else{
//         res.write("hello test")
//         res.end()
//     }
// })
// .listen(10000);


// app.get("/", function (req,res){
//     res.send("hello world")
// })
// app.listen(8080)


const express = require("express")
const api = express();
api.use(express.json());

api.get("/users", async (req, res) => {
    try {
      const data = await readData("./data");
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  });
  

 api.get("/users/:id", async (req, res)=> {
    try {
        const { id } = req.params
        const data = await readData("./data");
        const userId2 = data.find(user => user.id === Number(id));
        if(!userId2) {
            res.status(400).send("user not found")
        } else {
            res.status(200).send(userId2)
        }
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal server found")
    }
 })
 
//  const Obj = {
//     firstname: "katerina",
//     lastname: "Atanasovska"
//  }
 
//  const {firstname, lastname} = Obj
//  console.log(firstname, lastname)


  const PORT = 10000;
  
  api.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Server successfully started on port ${PORT}`);
  });



  const addPerson = async (id, firstname, lastname) => {
    try {
      const person = {
        id: id,
        first_name: firstname,
        last_name: lastname,
      };
      let data = await readData("./data");
      data.push(person);
      await writeData(data, "./data");
    } catch (err) {
      throw err;
    }
  };
  
  const removePerson = async (index) => {
    try {
      let data = await readData("./data");
      let out = data.filter((user) => user.id !== index);
      await writeData(out, "./data");
    } catch (err) {
      throw err;
    }
  };

  //IIFE
(async () => {
     await addPerson(4, "Katerina", "Atanasovska");
    await removePerson(1);
  })();
 
   

//Homework
// 1. Install dotenv
// 2. Create .env file in root directory
// 3. process.env
// Link to docs: https://www.npmjs.com/package/dotenv
//Extend addPerson function to throw error if there is already user with the entered ID


