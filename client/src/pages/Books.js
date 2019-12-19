// dependencies

import React, { useState, useEffect  } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import BackgroundImg from "../components/Background";
import Hooks from "../utils/Hook";

function Books() {
const [bookState, seBookState]= useState({
        books:[],
        title: "",
        author: "",
        synopsis: "",
        link:"",
        image:""
})
    componentDidMount() {
        this.loadBooks();
    };

    // this allows the api to call a get request
    loadBooks = () => {
        API.getBooks()
        .then(res =>
          {console.log(res);
            this.setState({ books: res.data, title:"", author: "", synopsis: "",url:"",image:""})}
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
            API.saveBooks({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis,
                image: this.state.image,
                link: this.state.link
            })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    // 
    render() {
        return (
          <BackgroundImg>
            <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
  </BackgroundImg>
        )

        
    }
  }


export default Books;