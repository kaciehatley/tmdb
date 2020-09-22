import React from "react";
import Movie from "./movie-card";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {/* Mapping through the movie results, giving each card a key and separating the data into props */}
          {props.movies.map((movie, i) => {
            return (
              <Col key={i}>
                <Movie
                  key={i}
                  image={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date}
                  overview={movie.overview}
                  vote={movie.vote_average}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
