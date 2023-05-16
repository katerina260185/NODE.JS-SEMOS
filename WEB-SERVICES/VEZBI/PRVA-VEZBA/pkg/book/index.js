
const mongoose = require ("mongoose")

const bookSchema = mongoose.Schema({
    name_of_book: String,
    name_of_author: String,
    year: Number
});

const Book = mongoose.model ("books", bookSchema)

const create = async (book) => {
    try{
    const bookCreated = new Book(book);
    return await bookCreated.save();
    }catch(err){
        throw err;
    }
};

const remove = async (bookId) => {
    try{
return await Book.deleteOne({_id:bookId})
    }catch(err){
        throw err;
    }
}


module.exports = {
    create,
    remove,
}