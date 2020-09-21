import React from "react";
import Movie from "./movie-card";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 12 }}>
            {props.movies.map((movie, i) => {
              return <Movie key={i} image={movie.poster_path} />;
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
