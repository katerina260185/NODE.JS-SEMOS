const mongoose = require ("mongoose")


const {MONGO_USERNAME, MONGO_PASSWORD} = process.env
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