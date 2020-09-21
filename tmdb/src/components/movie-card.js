import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    <Card style={{ width: "18rem", display: "inline-block" }}>
      {props.image == null ? (
        <Card.Img
          src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          alt="card image"
          style={{ width: "100% ", height: 360 }}
        />
      ) : (
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w185${props.image}`}
          alt="card image"
          style={{ width: "100% ", height: 360 }}
        />
      )}
    </Card>
  );
};

export default MovieCard;
