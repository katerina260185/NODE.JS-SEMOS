const {
    addPerson,
    remove,
    getOne,
    update, 
    getAll,
    getUnder20
} = require ("../pkg/person/person")


const createPerson = async (req, res) => {
    try{
        await addPerson(req.body)
        return res.status(201).send(req.body)

    } catch (err){
        console.log(err)
        return res.status(500).send("Internal server error")

    }
}

const removePerson = async(req, res) => {
    try{
        await remove(req.params.id)
        return res.status(204).send("")
    } catch(err) {
        console.log(err)
        return res.status(500).send("Internal server error")

    }
}

const getOnePerson = async(req, res) => {
    try{
        const person = await getOne(req.params.id)
        return res.status(200).send(person)
    } catch(err) {
        console.log(err)
        return res.status(500).send("Internal server error")

    }
}

const updatePerson = async(req, res) => {
    try{
        await update(req.params.id, req.body)
        return res.status(204).send("")
    } catch(err) {
        console.log(err)
        return res.status(500).send("Internal server error")

    }
}

const getAllPersons = async(req,res) =>{
    try{
     const persons = await getAll();
    return res.status(200).send(persons)
    } catch(err){
        console.log(err)
        return res.status(500).send("Internal server error")
    }
};

const getAllPersonsUnder20 = async (req, res) => {
    try{
    const persons = await getUnder20();
    return res.status(200).send(persons)
    } catch(err){
        console.log(err)
        return res.status(500).send("Internal server error")
    }
}

module.exports = {
    createPerson,
    removePerson,
    getOnePerson,
    updatePerson,
    getAllPersons,
    getAllPersonsUnder20
}