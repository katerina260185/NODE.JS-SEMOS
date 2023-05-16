const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validate, bankAccount, bankAccountLogin } = require("../pkg/bankAccount/validate"); // validate.js
const bank = require("../pkg/bankAccount"); //index.js
const config = require("../pkg/config");

// registracija
const registerBankAccount = async(req, res)=> {
    try{
    await validate(req.body, bankAccount);
    const existsMail = await bank.getByEmail(req.body.email);
    if(existsMail) {
        throw {
        code: 400,
        error: "Bank account with this email already exists!" //OK
        }
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    const bankacc = await bank.create(req.body);
    return res.status(201).send(bankacc);
    } catch (err) {
    console.log(err);
    return res.status(400).send(err.error);
  }
};

// logiranje na bank account-ot
const loginInBankAccount =  async (req, res)=> {
    try{
        await validate (req.body, bankAccountLogin);
        const bankacc = await bank.getByEmail(req.body.email);
        if(!bankacc) {
            throw{
                code:400,
                error: "Bank account not found !!" 
            }
        }
        if(!bcrypt.compareSync(req.body.password, bankacc.password)){
            throw{
                code:400,
                error: "Wrong password"
            };
        };
        const payload = {
            fullname: bankacc.fullname,
            email: bankacc.email,
            id: bankacc._id,
             exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
        };
        const token = jwt.sign(payload, config.get("development").jwt_key);
        return res.status(200).send({ token });
    }catch(err){
        console.log(err)
        return res.status(400).send(err.error);
    }
}

// generiranje nov token
const refreshBankToken = async (req,res)=> {
    try {
        const payload = {
        ...req.auth,
        exp: new Date().getTime() / 1000 + 7 * 24 * 60 * 60
        };
        const token = jwt.sign(payload, config.get("development").jwt_key); 
        return res.send({token});
    } catch(err) {
    console.log(err)
    return res.status(400).send(err.error);
    }
}

// promena na password
const resetBankPassword = async (req, res) => {
    try{
        const userEmail = req.body.email;
        const oldPassword = req.body.old_password;
        const userBankAccount = await bank.getByEmail(userEmail)

        //sporeduvanje na password-ot od body-to, so password-ot vo database
        const isMatch = bcrypt.compareSync(oldPassword, userBankAccount.password);
        if(!isMatch){
            throw{
                code:400,
                error: "Incorect Password!"
            }
        }
        // proverka dali noviot password e ist so stariot password
        const newPassword = req.body.new_password;
        const saltRounds = 10;
        const newPasswordHashed = await bcrypt.hash(newPassword, saltRounds)
        if(await bcrypt.compare(oldPassword, newPasswordHashed)) {
            throw {
                code:400,
                error: "New password cannot be old password!"
            };
        };
        const userPassChanged = await bank.setNewPassword(
            userBankAccount._id,
            newPasswordHashed
        );
        return res.status(200).send(userPassChanged)
    }catch (err) {
        console.log(err)
        return res.status(400).send(err.error)
    }
}

module.exports = {
    registerBankAccount,
    loginInBankAccount,
    refreshBankToken,
    resetBankPassword,
  }