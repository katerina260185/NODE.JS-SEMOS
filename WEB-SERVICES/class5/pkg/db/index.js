const mongoose = require ("mongoose")
const config = require("../config")


const {MONGO_USERNAME, MONGO_PASSWORD} = config.get("development");
const uri =`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.zgbl3i3.mongodb.net/?retryWrites=true&w=majority`

async function connect (){
    try{
        await mongoose.connect(uri);
        console.log("connected")
    } catch(err){
    console.log(err)
}
}

connect()