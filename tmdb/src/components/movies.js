import React from "react";
import Movie from "./movie-card";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {props.movies.map((movie, i) => {
            console.log(movie);
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
