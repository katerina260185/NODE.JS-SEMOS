const mongoose = require ("mongoose")

const bankAccountSchema = mongoose.Schema ({
    fullname: String,
    adress: String,
    phoneNumber: String,
    email:String,
    password: String,
    
});

const bankAccount = mongoose.model("bankaccounts", bankAccountSchema)

const create = async(acc) => {
    const bankAcc = new bankAccount(acc);
    return await bankAcc.save()
}

const getById = async(id)=> {
    return await bankAccount.findOne({_id:id})
}

const getByEmail = async (email)=> {
    return await bankAccount.findOne({email})
}

const getAll = async()=> {
    return await bankAccount.find({})
}

const update = async (id, acc)=> {
    return await bankAccount.updateOne({_id:id, acc})
}

const setNewPassword = async (id, password) => {
    return await bankAccount.updateOne({_id:id}, {password:password}) //password
};

module.exports = {
    create,
    getById, 
    getByEmail,
    getAll,
    update, 
    setNewPassword   
}