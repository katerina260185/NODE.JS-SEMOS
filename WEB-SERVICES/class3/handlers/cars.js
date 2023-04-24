
const {
    addCar,
    removeCar,
    updateCar,
    getAllCars,
    getCarByIndex,
    updatePartial

} = require("../pkg/cars");

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
       const car = await getCarByIndex(Number(req.params.id))
        return res.status(200).send(car)
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}

const create = async (req, res)=>{
    try{
        await addCar(req.body)
        return res.status(201).send(req.body)
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}

const update = async (req, res)=>{
    try{
       await updateCar(Number(req.params.id), req.body)
       return res.status(204).send("")
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}
const remove = async (req, res)=>{
    try{
       await removeCar(Number(req.params.id))
       return res.status(204).send("")
        }  catch(err){
            console.log(err)
             return res.status(500).send("Internal server error")

    }
}

const partialUpdate = async(req, res)=> {
    try{
       await updatePartial (Number(req.params.id), req.body) 
       return res.status(200).send("")
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