const mongoose = require("mongoose")

const carsSchema = new mongoose.Schema({
    model: String,
    manufacturer: String,
    year: Number,
    color: String
})

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
        return await Car.findOne({_id: carId})
    } catch(err){
        return err
    } 
};

module.exports = {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getOneCar
}