const mailer = require("../pkg/mailer");
const { validate, MailgunFields } = require("../pkg/mailer/validate");

const sendMessage = async (req, res) => {
  try {
    await mailer.sendMessage();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

const sendWelcomeMail = async (req, res) => {
  try {
    //VALIDATE FIELDS
    //to, firstname, lastname, email
    await validate(req.body, MailgunFields);
    const result = await mailer.sendMail(
      req.body.to, //to
      "WELCOME", //type
      req.body.message  //data
    );
    return res.status(201).send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

const sendPasswordResetMail = async (req, res) => {
  try {
    //to, firstname, lastname, email
    const result = await mailer.sendMail(
      req.body.to, //to
      "PASSWORD_RESET", //type
      req.body.message //data
    );
    return res.status(201).send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  sendMessage,
  sendWelcomeMail,
  sendPasswordResetMail,
};