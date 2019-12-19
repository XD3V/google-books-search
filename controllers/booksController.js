// importing the schema file from the models folder
const db = require("../models/books");

// Defining methods for the booksController
module.exports = {
    // defing the method for finding all books
    findAll: function (req, res) {
        db
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
 // defiing the method for finding books by id
    findById: function (req, res) {
        db
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
 // defining the method for create books
    create: function (req, res) {
        console.log(req.body);
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
 // defining the method for upfating books
    update: function (req, res) {
        db
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
// defining the method for deleting books
    remove: function(req, res) {
        db
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}