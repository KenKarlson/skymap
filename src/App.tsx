import React from "react";
import "./App.css";

function App() {
  const data = new Date();
  return React.createElement(
    "div",
    { className: "App" }, 
    React.createElement("h1", {className:"title"}, "Hello !"),
    React.createElement("div", {className:"year"}, data.getFullYear()),
    React.createElement("strong", {className:"month"}, data.getMonth()),
    React.createElement("p", {className:"day"}, data.getDate())
  );
}

export default App;
