const express = require("express");

var { expressjwt: jwt } = require("express-jwt");

require("./pkg/db");
const config = require("./pkg/config");

// handlers for account
const {
  login,
  register,
  refreshToken,
  forgotPassword,
  resetPassword,
} = require("./handlers/auth");

// handlers for post
const {
  getAll,
  getSingle,
  create,
  update,
  remove,
  updatePartial
} = require("./handlers/post");

// handlers for bank account
const {
  registerBankAccount,
  loginInBankAccount,
  refreshBankToken,
  resetBankPassword

} = require("./handlers/bankHandlers");

const api = express();

api.use(express.json());

//json web token
api.use(
  jwt({
    secret: config.get("development").jwt_key,
    algorithms: ["HS256"], // za kriptiranje na podatoci
  }).unless({
    path: [
      "/api/v1/auth/login",
      "/api/v1/auth/register",
      "/api/v1/auth/forgot-password",
      "/api/v1/auth/reset-password",
      "/api/v1/bank/register",
      "/api/v1/bank/login",
      "/api/v1/bank/refresh-token",
      "/api/v1/bank/reset-password"
    ],
  })
);

//ruti za account
api.post("/api/v1/auth/login", login);
api.post("/api/v1/auth/register", register);
api.get("/api/v1/auth/refresh-token", refreshToken);
api.post("/api/v1/auth/forgot-password", forgotPassword);
api.post("/api/v1/auth/reset-password", resetPassword);

// ruti za post
api.get("/api/v1/blog", getAll) //ok
api.get("/api/v1/blog/:user_id/:id", getSingle)
api.post("/api/v1/blog", create) //ok
api.put("/api/v1/blog/:id", update)
api.patch("/api/v1/blog/:_id", updatePartial)
api.delete("/api/v1/blog/:id", remove) //ok

// ruti za bank account
api.post("/api/v1/bank/register", registerBankAccount);
api.post("/api/v1/bank/login", loginInBankAccount);
api.get("/api/v1/bank/refresh-token", refreshBankToken);
api.post("/api/v1/bank/reset-password", resetBankPassword);



api.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedAccess") {
    res.status(401).send("Invalid token...");
  }
});

//api.post(login) -> token

//if(config.get("development").jwt_key)

api.listen(config.get("development").port, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${config.get("development").port}`);
});

