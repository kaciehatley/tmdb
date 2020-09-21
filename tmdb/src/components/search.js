import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Search = (props) => {
  return (
    <Container>
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
