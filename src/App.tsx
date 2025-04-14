import React from "react";
import "./App.css";

function App() {
  const data = new Date();
  return React.createElement(
    React.Fragment,
    null,
    "Hello",
    React.createElement("div", null, data.getFullYear())
  );
}

export default App;
