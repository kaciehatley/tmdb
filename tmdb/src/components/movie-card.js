import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = (props) => {
  const year = props.date.substring(0, 4);
  return (
    <div className="equal-height-columns" stye={{ marginBottom: "40px" }}>
      <div className="equal-column-content">
        <Card
          style={{
            width: "13rem",
            display: "inline-block",
            margin: "auto",
            border: "none",
            backgroundColor: "#f5f2d0",
            // borderRadius: "0px",
            // boxShadow: "4px 4px black",
          }}
        >
          {props.image == null ? (
            <Card.Img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="card image"
              style={{ width: "100% ", height: 260 }}
            />
          ) : (
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w185${props.image}`}
              alt="card image"
              style={{ width: "100% ", height: 260, border: "none" }}
            />
          )}
        </Card>
        <p
          style={{
            color: "white",
            width: "13rem",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
