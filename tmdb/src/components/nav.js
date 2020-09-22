import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

const Nav = (props) => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/tmdb" style={{ fontSize: "24px" }}>
          Movie Forward
        </Navbar.Brand>
        <Form
          inline
          className="ml-auto"
          action=""
          onSubmit={props.handleSubmit}
        >
          <FormControl
            type="text"
            placeholder="Seach movie"
            onChange={props.handleChange}
            className="mr-sm-2"
            id="inputSize"
          />
          <Button type="submit" variant="outline-info">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Nav;
