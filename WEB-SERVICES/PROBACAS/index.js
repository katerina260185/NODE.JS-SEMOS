// const express = require("express");

// const config = require("./pkg/config");
// const { displayName } = require("./pkg/display");

// const api = express();

// api.use(express.json());

// const { displayName } = require("./pkg/display");

// api.post("/api/v1/home", displayName);

// api.listen(config.get("development").port, (err) => {
//     err
//       ? console.log(err)
//       : console.log(`Server started on port ${config.get("development").port}`);
//   });

const express = require("express");
 
const api = express();
 
api.get("/", (req, res) => {
  console.log("Katerina Atanasovska");
});
 
api.listen(10000, () => {
  console.log("Server started at port 10000");
});


