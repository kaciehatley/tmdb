import React from "react";
import Navbar from "./nav";
import Search from "./search";
// import { Navbar, Form, FormControl, Button } from "react-bootstrap";

// import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: `#0B0C10`,
        height: `100vh`,
        width: `100vw`,
      }}
    >
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
