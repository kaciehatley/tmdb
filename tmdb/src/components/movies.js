import React from "react";
import Movie from "./movie-card";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = (props) => {
  return (
    <div>
      <Container>
        <Row style={{ margin: "auto" }}>
          {props.movies.map((movie, i) => {
            return (
              <Col key={i} style={{ margin: "auto" }}>
                <Movie
                  key={i}
                  image={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date}
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
