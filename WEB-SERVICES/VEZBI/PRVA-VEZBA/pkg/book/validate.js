const {Schema} = require("mongoose");
const {Validator} = require ("node-input-validator")

const BookValidate = {
    name_of_book: "required|string",
    name_of_author:"required|string",
    year: "required|number"
}

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
      throw v.errors;
    }
  };

  module.exports = {
    BookValidate,
    validate,
  }