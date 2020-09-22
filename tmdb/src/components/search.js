import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

// Search bar renders outside of nav bar on smaller viewports

const Search = (props) => {
  return (
    <Container id="searchBar">
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="mt-5">
          <Form action="" onSubmit={props.handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="Seach movie"
                onChange={props.handleChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
