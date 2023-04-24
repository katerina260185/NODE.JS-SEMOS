
// const {
//     addCar,
//     removeCar,
//     updateCar,
//     getAllCars,
//     getCarByIndex,
//     updatePartial

// } = require("../pkg/cars");

const {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getOneCar
} = require ("../pkg/cars/mongo")

const { Car, CarPartial, validate } = require("../pkg/cars/validate");



//source of data => cars manupulation => handlers for cars =>  /api/cars

const getAll = async(req,res) =>{
    try{
    const cars = await getAllCars();
    return res.status(200).send(cars)
    } catch(err){
        console.log(err)
        return res.status(500).send("Internal server error")
    }
};

//req.params car/:id
//req.query  ova e query ?month=10
//req.body
//req.headers

const getOne = async (req, res)=>{
    try{
       const car = await getOneCar(req.params.id)
        return res.status(200).send(car)
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}

const create = async (req, res)=>{
    try{
        await validate(req.body, Car);
        await addCar(req.body)
        return res.status(201).send(req.body)
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}

const update = async (req, res)=>{
    try{
        await validate(req.body, Car);
       await updateCar(req.params.id, req.body)
       return res.status(204).send("")
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}
const remove = async (req, res)=>{
    try{
       await removeCar(req.params.id)
       return res.status(204).send("")
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}

const partialUpdate = async(req, res)=> {
    try{
        await validate(req.body, CarPartial);
        await updateCar(req.params.id, req.body);
        return res.status(204).send("");
    } catch(err){
        console.log(err)
             return res.status(500).send("Internal server error")
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    partialUpdate
}