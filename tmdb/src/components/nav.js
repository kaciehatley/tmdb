import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movie Forward</Navbar.Brand>
        {/* <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </div>
  );
};

export default Nav;
