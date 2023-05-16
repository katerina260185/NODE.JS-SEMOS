const express = require ("express");
const router = express.Router();
const config = require("./pkg/config");

require("./pkg/db");
const { createNewBook, deleteBook } = require("./handlers/bookHandlers");

const api = express()
api.use(express.json()); 
api.use("/", router)

api.post("/api/v1/book/create", createNewBook)
//router.post("/api/v1/book/create", createNewBook)

api.delete("/api/v1/book/delete/:id", deleteBook)



api.listen(config.get("development").port, (err) => {
    err
      ? console.log(err)
      : console.log(`Serverot e spremen za vezba na porta: ${config.get("development").port} GOOD LUCK !!!`);
  });
  