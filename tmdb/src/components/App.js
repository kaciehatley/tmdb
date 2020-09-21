import React, { Component } from "react";
import Navbar from "./nav";
import Search from "./search";
import MovieList from "./movies";
import None from "./none";
import Pagination from "./pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      title: "",
      noResults: false,
      currentPage: 1,
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
        this.setState({ movies: [...data.results] });
        if (this.state.movies.length === 0) {
          this.setState({ noResults: true });
        } else {
          this.setState({ noResults: false });
        }
        // console.log(this.state.movies);
      });
  };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    let moviesPerPage = 8;
    let indexOfLastMovie = this.state.currentPage * moviesPerPage;
    let indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    let currentMovies = this.state.movies.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );

    const paginate = (number) => {
      this.setState({ currentPage: number });
    };

    return (
      <div className="App">
        <Navbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
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
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={this.state.movies.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default App;
