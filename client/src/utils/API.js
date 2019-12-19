// importing dependencies
import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {

    searchTerms: function (query) {
        return axios.get(
            `https://www.google.com/search?tbm=bks&q=${query}`
        );
    },
    searchImages: function (query) {
        return axios.get(
            `https://en.m.wikipedia.org/wiki/File:${query}.jpg`
        );
    },

    // Get all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    //Get the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    //Saves a book to the database
    saveBooks: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};






