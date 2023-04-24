const mongoose = require("mongoose")
const Person = require('../person/person');

//person ->firstname, lastname, age, date of birth, adress, vehicles [ObjectId]
//Owner car, Van, truck
const carsSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        minLength:2
     },
    manufacturer:{
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required:true,
        validate: {
            validator: (fieldParam)=> fieldParam > 2020,
            message: (props) => `Input car is older than 2020`
        }

    },
    email: {
        type:String,
        required:true,
        lowerCase:true,
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Person" // reference to another object
    },
    
    color: String,
    dealership: String,
    createAt : {
        type:Date,
        imutable: true,
        default: ()=> Date.now()
    },
    updateAt: {
        type:Date,
        imutable: true,
    },
    carWeight: {
        type:Number,
        min:1200,
        max: 3000,
    }
});

const Car = mongoose.model("cars", carsSchema);

const addCar = async (car)=>{
    try{
        const newCar = new Car(car)
        return await newCar.save();
        //ObjectId => unique id
    } catch(err){
        return err
    }
}

//remove car
const removeCar = async(carId)=>{
    try{
        return await Car.deleteOne({_id: carId})
         
    } catch(err){
        return err
    } 
}

//updade car

const updateCar = async(carId, car)=>{
    try{
        return await Car.updateOne({_id:carId, car} )
    } catch(err){
        return err
    } 
};

// get all car

const getAllCars = async ()=>{
    try{
       return await Car.find({}) 
    } catch(err){
        return err
    } 
};

//get one car

const getOneCar = async (carId)=>{
    try{
        return await Car.findOne({ _id: carId });
    } catch(err){
        return err
    } 
};

module.exports = {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getOneCar, 
    Car
}