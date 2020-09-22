import React from "react";

// Renders when search returns zero movies

const None = () => {
  console.log("none");
  return (
    <h2 style={{ color: "white", textAlign: "center" }}>
      Sorry. No results match your search. Try again!
    </h2>
  );
};

export default None;
