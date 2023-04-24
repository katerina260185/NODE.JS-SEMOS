const mongoose = require("mongoose")
const Car  = require("../cars/mongo")

const personSchema = new mongoose.Schema({
   firstName: {
        type: String,
        required: true,
        minLength:3,  
   },
   lastName: {
        type: String,
        required: true,
        minLength:5,
   },
   adress: {
    type: String,
    required: true, 
   },
   dateOfBirth: {
    type: Number,
    required: true, 
   },
   age:{
     type: Number,
    required: true, 
    min:  18,
    validate : {
     validator: (fieldParam) => fieldParam >= 18, 
     message: (props) =>  "You must be at least 18 years old"
    }
   },
   vehicles: {
     type: mongoose.SchemaTypes.ObjectId,
    ref: 'Car' // reference to another object
   }
})

const Person = mongoose.model ("Person", personSchema);

const addPerson = async (person)=>{
     try{
          const newPerson = new Person(person)
          return await newPerson.save();
     } catch (err){
          throw err
     }
}

const remove = async (personId) => {
     try{
          return await Person.deleteOne({_id: personId})
     } catch (err){
          throw err
     }
}

const getOne = async (personId) => {
     try{
          return await Person.findOne({_id: personId})
     } catch (err){
          throw err
     }
}

const update = async (personId, person) => {
     try{
          return await Person.updateOne({_id: personId, person})
     } catch (err){
          throw err
     }
}

const getAll = async () => {
     try{
          return await Person.find({})
     } catch (err){
          throw err
     }
}

const getUnder20 = async ()=> {
     try{
          return await Person.find({ age: { $lt: 20 } })
     } catch(err){
          throw err
     }
}

module.exports = {
     addPerson,
     remove,
     getOne, 
     update, 
     getAll,
     getUnder20,
     Person,
}