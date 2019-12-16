// importing the schema file from the models folder
const db = require("../modeks");

// Defining methods for the booksController
module.exports ={
    // defing the method for finding all books
    findAll: function(req, res){
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}