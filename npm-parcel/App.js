import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div", { id: "mainDiv" }, 
  [
    React.createElement("div", { id: "childDiv", key: "child1" }, 
      [
        React.createElement("h1", { id: "h11", key: "h1a" }, "I am h1 tag in nested div with create React"),
        React.createElement("h2", { id: "h22", key: "h2a" }, "I am h2 tag in nested div with create React")
      ]
    ),
    React.createElement("div", { id: "childDiv2", key: "child2" }, 
      [
        React.createElement("h1", { id: "h21", key: "h1b" }, "I am h1 tag in nested div with create React"),
        React.createElement("h2", { id: "h22", key: "h2b" }, "I am h2 tag in nested div with create React")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
