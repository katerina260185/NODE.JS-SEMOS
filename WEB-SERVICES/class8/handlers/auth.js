const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { validate, Account, AccountLogin } = require("../pkg/account/validate");
const account = require("../pkg/account");
const config = require("../pkg/config");
//const mailgun =  require ("mailgun-js")
// ({
//   apiKey: MAILGUN_API_KEY,
//   domain: MAILGUN_DOMAIN,
// })

//login, register, refreshToken, forgotPassword, resetPassword

const login = async (req, res) => {
  try {
    await validate(req.body, AccountLogin);
    const acc = await account.getByEmail(req.body.email);
    if (!acc) {
      throw {
        code: 400,
        error: "Account not found!", // OK
      };
    }
    if (!bcrypt.compareSync(req.body.password, acc.password)) {
      throw {
        code: 400,
        error: "Wrong password", // OK
      };
    }
    const payload = {
      fullname: acc.fullname,
      email: acc.email,
      id: acc._id,
      exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
    };
    const token = jwt.sign(payload, config.get("development").jwt_key); // jwt_key so value go izgenerirav vo config.json
    return res.status(200).send({ token });  //OK 
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.error); // go smeniv res.status(err.status) so res.status(400)
  }
};

const register = async (req, res) => {
  try {
    await validate(req.body, Account);
    const exists = await account.getByEmail(req.body.email);
    if (exists) {
      throw {
        code: 400,
        error: "Account with this email already exists!" //OK
      };
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    const acc = await account.create(req.body);
    return res.status(201).send(acc);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.error);
  }
};


//generiranje na nov token i dodavanje na nova exp.date
const refreshToken = async (req, res) => {
  const payload = {
    ...req.user,
    exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
  };
  const token = jwt.sign(payload, config.get("development").jwt_key); 
  return res.send({ token });  //OK
};

const forgotPassword = async (req, res) => {
  const email = req.body.email;
  const user = await account.getByEmail(email);
  if (!user) {
    throw {
      code: 400,
      error: "User with this email do not exists!",
    };
  }
  // Generate a new password
  const newPassword = await setNewforgottenPassword(user.id);

  // Create a new JWT token
  const token = jwt.sign({ email }, config.get("development").jwt_key);

  //mail send to user with new password
  const data = {
    from: "mailgun@DOMAIN_NAME",
    to: email,
    subject: "New Password",
    text: `Your new password is ${newPassword}. Please use this to login and change your password immediately.`
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      throw {
        code: 500,
        error: "Error sending email!",
      };
    } else {
      console.log(body);
    }
  });
  return res.send({token});
};


const resetPassword = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const oldPassword = req.body.old_password;
    const userAccount = await account.getByEmail(userEmail);

    // compare old password with hashed password from database
    const isMatch = await bcrypt.compare(oldPassword, userAccount.password);
    if (!isMatch) {
      throw {
        code: 400,
        error: "Incorrect password!",
      };
    }

    // check if new password is the same as old password
    const newPassword = req.body.new_password;
    const saltRounds = 10;
    const newPasswordHashed = await bcrypt.hash(newPassword, saltRounds);
    if (await bcrypt.compare(oldPassword, newPasswordHashed)) {
      throw {
        code: 400,
        error: "New password cannot be old password!",
      };
    }

    const userPassChanged = await account.setNewPassword(
      userAccount._id,
      newPasswordHashed
    );
    return res.status(200).send(userPassChanged);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
}

module.exports = {
  login,
  register,
  refreshToken,
  forgotPassword,
  resetPassword,
}
