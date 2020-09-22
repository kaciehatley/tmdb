import React, { Component } from "react";

// Importing React components

import Navbar from "./nav";
import Search from "./search";
import MovieList from "./movies";
import None from "./none";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      title: "",
      noResults: false,
      currentPage: 1,
    };
    // API Key in env file
    this.tmdbAPIKey = process.env.REACT_APP_API_KEY;
  }

  // Function designed fetch movie data when user submits their search

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.tmdbAPIKey}&query=${this.state.title}`
    )
      .then((data) => data.json())
      .then((data) => {
        // Update movies in state to contain array of objects (data for movies)
        this.setState({ movies: [...data.results] });
        // Assesses whether or not any results are returned any updates state
        if (this.state.movies.length === 0) {
          this.setState({ noResults: true });
        } else {
          this.setState({ noResults: false });
        }
      });
  };

  // Function used to update the search title in state with every change to the input field

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {/* This component only displays on mobile view */}
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.noResults === true ? (
          <None />
        ) : (
          <MovieList
            // movies={this.state.movies}
            search={this.state.title}
            movies={currentMovies}
          />
        )}
      </div>
    );
  }
}

export default App;

// import Pagination from "./pagination";

{
  /* <Pagination
  moviesPerPage={moviesPerPage}
  totalMovies={this.state.movies.length}
  paginate={paginate}
/> */
}

// Variables and function below will be used to enable pagination.

// let moviesPerPage = 8;
// let indexOfLastMovie = this.state.currentPage * moviesPerPage;
// let indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
// let currentMovies = this.state.movies.slice(
//   indexOfFirstMovie,
//   indexOfLastMovie
// );

// const paginate = (number) => {
//   this.setState({ currentPage: number });
// };
