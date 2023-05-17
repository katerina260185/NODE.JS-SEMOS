
const express = require("express");
 
const api = express();
 
api.get("/", (req, res) => {
  console.log("Katerina Atanasovska");
});
 
api.listen(10000, () => {
  console.log("Server started at port 10000");
});


