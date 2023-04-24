const express = require("express");

//require('dotenv').config()
require ("./pkg/db")
const config = require ("./pkg/config");

const { getAll, getOne, create, update, remove, partialUpdate } = require("./handlers/cars");
const {createPerson, removePerson, getOnePerson, updatePerson, getAllPersons, getAllPersonsUnder20} = require ("./handlers/handlersPerson")
const api = express();

api.use(express.json());

//GET, POST, PUT, PATCH, DELETE

api.get("/api/cars", getAll);

api.get("/api/cars/:id", getOne);

api.post("/api/cars", create);

api.put("/api/cars/:id", update);

api.delete("/api/cars/:id", remove);

api.patch("/api/cars/:id", partialUpdate)

// ruti za person

api.post("/api/persons", createPerson);

api.delete("/api/persons/:id", removePerson);

api.get("/api/persons/:id", getOnePerson);

api.get("/api/persons", getAllPersons);

api.put("/api/persons/:id", updatePerson);

api.get("/api/under20", getAllPersonsUnder20);


api.listen(config.get("development").port, (err) => {
  err ? console.log(err) : console.log(`${config.get("development").port}`);
});
