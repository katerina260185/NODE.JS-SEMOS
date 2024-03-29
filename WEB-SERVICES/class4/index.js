

const express = require("express");

require('dotenv').config()
require ("./pkg/db")


const { getAll, getOne, create, update, remove, partialUpdate } = require("./handlers/cars");

const api = express();

api.use(express.json());

//GET, POST, PUT, PATCH, DELETE

api.get("/api/cars", getAll);

api.get("/api/cars/:id", getOne);

api.post("/api/cars", create);

api.put("/api/cars/:id", update);

api.delete("/api/cars/:id", remove);

api.patch("/api/cars/:id", partialUpdate)


api.listen(10000, (err) => {
  err ? console.log(err) : console.log("Server started on port 10000");
});
