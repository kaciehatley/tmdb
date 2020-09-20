import React, { Component } from "react";
import Navbar from "./nav";
import Search from "./search";

// import { Navbar, Form, FormControl, Button } from "react-bootstrap";

// import { Navbar } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      title: "",
    };
    this.tmdbAPIKey = process.env.REACT_APP_API_KEY;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.tmdbAPIKey}&query=${this.state.title}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: `#0B0C10`,
          height: `100vh`,
          width: `100vw`,
        }}
      >
        <Navbar />
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
