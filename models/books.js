// Adding dependecies and a schema file for holding my book data base with mongodb

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a schema file for books to hold the information in mongodb accordingly to its title, image, date, etc. 
const bookSchema = new Schema({
    title: { type: String, required: true},
    author: {type: String,  required: true},
    description: {type: String},
    image: {type: String},
    link: {type: String,
        // required: true
    },
    date: {type: Date, default: Date.now}
});

// creating a variable to hold all the data for the schema so it can be exported to the controllers and scripts folder
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;