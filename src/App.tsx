import React from "react";
import "./App.css";

function App() {
  const data = new Date();
  return React.createElement(
    "div",
    { className: "App" }, 
    null,   
    <h1>"Hello !"</h1>,
    React.createElement("div", null, data.getFullYear())
  );
}

export default App;
