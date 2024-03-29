const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validate, Account, AccountLogin } = require("../pkg/account/validate");
const account = require("../pkg/account");
const config = require("../pkg/config");

const { sendMail } = require("../pkg/mailer");

//login, register, refreshToken, forgotPassword, resetPassword

const login = async (req, res) => {
  try {
    await validate(req.body, AccountLogin);
    const acc = await account.getByEmail(req.body.email);
    if (!acc) {
      throw {
        code: 400,
        error: "Acount not found!",
      };
    }
    if (!bcrypt.compareSync(req.body.password, acc.password)) {
      throw {
        code: 400,
        error: "Wrong password!",
      };
    }
    const payload = {
      fullname: acc.fullname,
      email: acc.email,
      id: acc._id,
      exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
    };
    const token = jwt.sign(payload, config.get("development").jwt_key);
    return res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.error);
  }
};

const register = async (req, res) => {
  try {
    await validate(req.body, Account);
    const exists = await account.getByEmail(req.body.email);
    if (exists) {
      throw {
        code: 400,
        error: "Account exists!",
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

const refreshToken = async (req, res) => {
  const payload = {
    ...req.auth,
    exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
  };
  const token = jwt.sign(payload, config.get("development").jwt_key);
  return res.send({ token });
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

  const secret = config.get("development").jwt_key + user.password;
  const payload = {
    email: user.email,
    id: user.id,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1d" });

  const link = `http://localhost:10000/reset-password/${user.id}/${token}`;

  try {
    await sendMail(user.email, "PASSWORD_RESET", { user, link });
    return res.status(200).send("Password reset link has been sent to your email... ");
  } catch (err) {
    return res.status(500).send("Message not sent!");
  }
};

const resetPassTemplate = async (req, res) => {
  const { id, token } = req.params;

  const user = await account.getById(id);

  if (id !== user.id) {
    return res.status(400).send("Invalid id");
  }

  const secret = config.get("development").jwt_key + user.password;

  try {
    const payload = jwt.verify(token, secret);
    res.render("reset-password", { email: user.email });
  } catch (err) {
    res.send(err.message);
  }
};

const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password, confirmPass } = req.body;
  // const email = req.body.email;

  if (password !== confirmPass) {
    return res.status(400).send("Passwords do not match!");
  }

  const saltRounds = 10;
    const newPasswordHashed = await bcrypt.hash(confirmPass, saltRounds);

  const user = await account.getById(id);

  if (id !== user.id) {
    return res.status(400).send("Invalid id");
  }

  const secret = config.get("development").jwt_key + user.password;

  try {
    //koj token go verificira????
    const payload = jwt.verify(token, secret);
    await account.setNewPassword(user.id, newPasswordHashed);
    user.password = newPasswordHashed;
    res.send(user);
    res.render("reset-password", { email: user.email });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  login,
  register,
  refreshToken,
  forgotPassword,
  resetPassword,
  resetPassTemplate,
};