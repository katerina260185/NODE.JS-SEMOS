const { validate, Bookvalidate } = require ("../pkg/book/validate")

//const newBook = require ("../pkg/book") //index.js
//const config = require ("../pkg/config")

const { create, remove } = require ("../pkg/book")

const createNewBook = async (req, res) => {
    try{        
        await validate(req.body, Bookvalidate)
        await create(req.body)
        return res.status(201).send(req.body)
    }catch(err) {
        console.log(err)
        return res.status(500).send("Internal server error")
    }

}

const deleteBook = async (req, res) => {
    try{
        await remove(req.params.id)
        return res.status(201).send("Book delete")
    }catch(err){
        return res.status(500).send("Internal server error")
    }
}

module.exports = {
    createNewBook,
    deleteBook,
}