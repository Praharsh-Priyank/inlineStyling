import React from "react";
import ReactDOM from "react-dom";

const customStyles = {
  color: "red",
  fontSize: "35px",
  border: "1px solid black"
};
ReactDOM.render(
  <h1 style={customStyles}>Hello World!</h1>,
  document.getElementById("root")
);
