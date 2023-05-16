const {Schema} = require ("mongoose")
const {Validator} = require ("node-input-validator")


const Post = {
    title: "required|string",
    content: "required|string",

}

const PostPartial = {
    title: "string",
    content: "string",

}

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
      throw v.errors;
    }
  };

  module.exports = {
    Post,
    PostPartial,
    validate
  }