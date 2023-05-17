
const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

require("./pkg/db");
const config = require("./pkg/config");

const {
  login,
  register,
  refreshToken,
  forgotPassword,
  resetPassword,
  resetPassTemplate,
} = require("./handlers/auth");


const {
  sendMessage,
  sendWelcomeMail,
  sendPasswordResetMail,
} = require("./handlers/mailer");


const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.set("view engine", "ejs");

api.use(
  "/api",
  jwt({
    secret: config.get("development").jwt_key,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/v1/auth/login",
      "/api/v1/auth/register",
      "/api/v1/auth/forgot-password",
    ],
  })
);

api.post("/api/v1/auth/login", login); //ok
api.post("/api/v1/auth/register", register); //ok
api.get("/api/v1/auth/refresh-token", refreshToken); //ok
//ovaa ruta ja stavame vo ejs forgot-password, na metod post
api.post("/api/v1/auth/forgot-password", forgotPassword); // go generira linkot i treba da prati mail so linkot
api.post("/reset-password/:id/:token", resetPassword); //go stavame linkot
//api.post("api/reset-password", resetPassword);
api.get("/reset-password/:id/:token", resetPassTemplate);
// na forgot-password.ejs vo action mu stavame method-post
// i patekata "/api/v1/auth/forgot-password" vo koja e naveden handler
//funkcijata i taka ke znae koja funkcija da ja izvrsi
api.get("/forgot-password", (req, res) => {
 res.render("forgot-password"); // go renderira template-ot forgot-password //frontend
});

// hendleri od mailer
api.post("/api/v1/sendmessage", sendMessage);
api.post("/api/v1/sendmail", sendWelcomeMail);
api.post("/api/v1/reset-pass", sendPasswordResetMail);

api.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedAccess") {
    res.status(401).send("Invalid token...");
  }
});

api.listen(config.get("development").port, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${config.get("development").port}`);
});

// function calculate(a, b, callback) {
//     let result = a + b;
//     callback(result); 
//   }

//   function displayResult(result) {
//     console.log("The result is:", result);
//   }
//  calculate(2, 3, displayResult)

// function calculate(a, b, displayResult) {
//   let result = a + b;
//   displayResult(result)
// }
// function displayResult(result) {
//   console.log(result)
// }
// calculate(2, 8, displayResult)
//  const test = calculate // referenca
//   test() // 


//   function print() {
//     console.log("print")
//   }

//   print()  // ja povikuvame povik
  

  // function takeData() {
  //   return new Promise(function(resolve, reject) {
  //     let success = false; //true
  //     if (success) {
  //       let data = "resolve";
  //       resolve(data); 
  //     } else {
  //       let error = "reject";
  //       reject(error);
  //     }
  //   });
  // }
  
  // takeData()
  //   .then(function(result) {
  //     console.log("Success:", result);
  //   })
  //   .catch(function(error) {
  //     console.log("Error:", error);
  //   });
