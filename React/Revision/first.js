import React from "react";
import ReactDOM from "react-dom/client";

const greeting = React.createElement("h1", { key: 1 }, "Hii");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(greeting);
