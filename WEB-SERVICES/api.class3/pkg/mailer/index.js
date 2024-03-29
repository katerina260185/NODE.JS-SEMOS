const fs = require("fs");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const config = require("../config");

const mailTemplates = {
  PASSWORD_RESET: {
    title: "Your password reset link has been generated",
    template: "reset_password.html",
  },
  WELCOME: {
    title: "Welcome to our website",
    template: "welcome.html",
  },
};

const sendMail = async (to, type, data) => {
  //to -> to whom the mail is sent
  //type -> it will refer to the template
  //data -> data sent from the user
  const mg = mailgun.client({
    username: "api",
    key:
      config.get("development").api_key ||
      "key-86d939d6c1a1bd5fcbe25c736ae015fd-6b161b0a-afcde362",
  });
    //sodrzina na mail
  let title = mailTemplates[type].title;
  let templatePath = `${__dirname}/../../email_templates/${mailTemplates[type].template}`;
  let content = await readTemplate(templatePath);

  //od kade ni e user? 
  const { user, link } = data;
  const userfullname = user.fullname.split(" ");
  const firstName = userfullname[0];
  const lastName = userfullname[1];

  let regexName = new RegExp(`\{\{first_name\}\}`, "g");
  let regexSurname = new RegExp(`\{\{last_name\}\}`, "g");
  let regexLink = new RegExp(`\{\{link\}\}`, "g");
  content = content.replace(regexName, firstName);
  content = content.replace(regexSurname, lastName);
  content = content.replace(regexLink, link);

  let options = {
    from: config.get("development").sender_email,
    to: to,
    subject: title,
    // text: "First testing with text",
    html: content,
  };

  console.log("options", options);

  try {
    const res = await mg.messages.create(
      config.get("development").domain,
      options
    );
    return res;
  } catch (err) {
    throw err;
  }
};

const readTemplate = async (file) => {
  return new Promise((success, fail) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

module.exports = {
  sendMail,
};