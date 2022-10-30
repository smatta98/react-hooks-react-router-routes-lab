import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import Directors from "./components/Directors";
import Home from "./components/Home";
import Movies from "./components/Movies";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


