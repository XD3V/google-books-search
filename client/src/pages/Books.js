// dependencies

import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
    state = {
        books:[],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidCatch() {
        this.loadBooks();
    };

    // this allows the api to call a get request
    loadBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data, title:"", author: "", synopsis: ""})
        )
        .catch(err => console.log(err))    
    };
    // This allows the api to be able to delete request

    deleteBook = id => {
        API.deleteBook (id) 
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
    // this function handles the updates and changes
    handleInputChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // a function handling a submit form
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                </div>
        )

        
    }

}

export default Books;