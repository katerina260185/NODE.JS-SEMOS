const {Schema} = require ("mongoose")
const {Validator} = require ("node-input-validator")

const bankAccount = {
    fullname: "required|string",
    adress: "required|string",
    phoneNumber: "required|string",
    email:"required|string",
    password: "required|string",
    
};

const bankAccountLogin = {
    email:"required|string",
    password: "required|string",
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
      throw v.errors;
    }
  };

  module.exports = {
    bankAccount,
    bankAccountLogin,
    validate,
  }