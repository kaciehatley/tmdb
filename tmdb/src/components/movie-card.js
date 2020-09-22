import React, { useState, useEffect } from "react";
import { Card, Modal, Container, Row, Col } from "react-bootstrap";
// import MovieModal from "./modal";

const MovieCard = (props) => {
  const year = props.date.substring(0, 4);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="equal-height-columns">
      <div onClick={handleShow} className="equal-column-content cardScale">
        <Card
          style={{
            width: "13rem",
            display: "inline-block",
            margin: "auto",
            border: "none",
            backgroundColor: "#f5f2d0",
            filter: "drop-shadow(20px 12px 4px black)",
            // borderRadius: "0px",
            // boxShadow: "4px 4px black",
          }}
          className="cardDark"
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
              src={`https://image.tmdb.org/t/p/w500${props.image}`}
              alt="card image"
              style={{ width: "100% ", height: 260, border: "none" }}
            />
          )}
        </Card>
        <div
          style={{
            color: "white",
            width: "13rem",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          <h6>{props.title}</h6>
          <p>
            <em>{year}</em>
          </p>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        id="modal"
        style={{ marginLeft: -150 }}
      >
        <Container id="modalContainer">
          <Card
            style={{
              border: "none",
            }}
          >
            <Row>
              <Col md={6} style={{ padding: "20px" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${props.image}`}
                  alt="card image"
                  style={{ width: "100% ", border: "none" }}
                />
              </Col>
              <Col md={6} style={{ padding: "30px" }}>
                <h4>
                  <strong>{props.title}</strong>
                </h4>
                <p>{year}</p>
                <p>{props.overview}</p>
                <p>
                  <strong>Rating: </strong>
                  {props.vote}/10
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </Modal>
    </div>
  );
};

export default MovieCard;
